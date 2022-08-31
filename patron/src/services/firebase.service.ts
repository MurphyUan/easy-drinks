import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInAnonymously, 
    signInWithEmailAndPassword, 
    Auth, onAuthStateChanged} from 'firebase/auth';
import { 
    getFirestore, 
    collection, 
    getDocs, doc, deleteDoc,
    QueryDocumentSnapshot, DocumentSnapshot,
    addDoc, getDoc,  } from 'firebase/firestore';
import { ItemEntity, OrderItemEntity } from '../models/shared-data.model';

export class FirebaseService {

    private firebaseApp: any;
    private firebaseDB: any;
    private firebaseAuth: Auth;

    private firebaseUID: string;

    private firebaseConfig = {
        apiKey: "AIzaSyDt7wQ2GpdNcyTKvOKMJqI51I8Jhs-yynY",
        authDomain: "easy-drinks-19398.firebaseapp.com",
        projectId: "easy-drinks-19398",
        storageBucket: "easy-drinks-19398.appspot.com",
        messagingSenderId: "202024121114",
        appId: "1:202024121114:web:2007b35939fe39971e72a3"
    };
    
    constructor(){
        this.firebaseUID = '';
        this.firebaseApp = initializeApp(this.firebaseConfig);
        this.firebaseDB = getFirestore(this.firebaseApp);
        this.firebaseAuth = getAuth(this.firebaseApp);

        onAuthStateChanged(this.firebaseAuth, user => {
            if(user)
                this.firebaseUID = user.uid
        });
    }

    public get FireBaseAuth() {
        return this.firebaseUID;
    }

    async setupAnonymouseAuth(){
        return new Promise<boolean>((resolve, reject) => {
            signInAnonymously(this.firebaseAuth)
                .then(() => {
                    console.log("User Authenticated Anonymously");
                    resolve(true)
                })
                .catch(error => reject(error));
        });
    }

    async setupEmailAuth(email: string, password: string){
        return new Promise<boolean>((resolve, reject) => {
            signInWithEmailAndPassword(this.firebaseAuth, email, password)
                .then(() => {
                    resolve(true)
                })
                .catch(error => reject(error));
        })
    }

    async publishCartToOrder(cart: OrderItemEntity, barUID: string){
        return new Promise((resolve, reject) => {
            addDoc(collection(this.firebaseDB, `bars/${barUID}/orders`), cart)
                .then(() => resolve(true))
                .catch(err => console.log(err))
        });
    }

    async removeFromCollection(colName: string, docId: string){
        return new Promise((resolve, reject) => {
            deleteDoc(doc(this.firebaseDB, colName, docId))
                .then(() => resolve(true))
                .catch(err => reject(err));
        });
    }

    async getCollection(colName: string){
        return new Promise<QueryDocumentSnapshot[]>((resolve, reject) => {
            getDocs(collection(this.firebaseDB, colName))
                .then(result => {
                    console.log("Retrieving data from "+colName);
                    resolve(result.docs);
                })
                .catch(err => reject(err));
        });
    }

    async getSingleCollection(colName: string, uid: string){
        return new Promise<DocumentSnapshot>((resolve, reject) => {
            getDoc(doc(this.firebaseDB, colName, uid))
                .then(result => {
                    resolve(result)
                })
                .catch(err => reject(err));
        })
    }
} 