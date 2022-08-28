import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    signInAnonymously, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';

export class FirebaseService {

    private firebaseApp: any;
    private firebaseDB: any;

    private firebaseConfig = {
        apiKey: "AIzaSyDt7wQ2GpdNcyTKvOKMJqI51I8Jhs-yynY",
        authDomain: "easy-drinks-19398.firebaseapp.com",
        projectId: "easy-drinks-19398",
        storageBucket: "easy-drinks-19398.appspot.com",
        messagingSenderId: "202024121114",
        appId: "1:202024121114:web:2007b35939fe39971e72a3"
    };
    
    constructor(){
        this.firebaseApp = initializeApp(this.firebaseConfig);
        this.firebaseDB = getFirestore(this.firebaseApp);
    }

    async setupAnonymouseAuth(){
        return new Promise<boolean>((resolve, reject) => {
            const auth = getAuth(this.firebaseApp);
            signInAnonymously(auth)
                .then(() => {
                    console.log("User Authenticated Anonymously");
                    resolve(true)
                })
                .catch(error => reject(error));
        });
    }

    async getCollection(colName: string){
        return new Promise<any>((resolve, reject) => {
            getDocs(collection(this.firebaseDB, colName))
                .then(result => {
                    console.log("Retrieving data from "+colName);
                    resolve(result.docs.map(doc => doc.data()));
                })
                .catch(err => reject(err));
        });
    }
} 