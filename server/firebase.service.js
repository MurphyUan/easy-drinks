const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs }  = require('firebase/firestore') ;

class FireBaseService {

  firebaseApp = undefined;
  firebaseDB = undefined;

  firebaseConfig = {
    apiKey: "AIzaSyDt7wQ2GpdNcyTKvOKMJqI51I8Jhs-yynY",
    authDomain: "easy-drinks-19398.firebaseapp.com",
    projectId: "easy-drinks-19398",
    storageBucket: "easy-drinks-19398.appspot.com",
    messagingSenderId: "202024121114",
    appId: "1:202024121114:web:2007b35939fe39971e72a3"
  };

  constructor() {
    this.firebaseApp = initializeApp(this.firebaseConfig);
    this.firebaseDB = getFirestore(this.firebaseApp);
  }

  // async getRestaurants() {
  //   const restaurantCol = collection(this.firebaseDB, 'restaurants');
  //   const restaurantSnapshot = await getDocs(restaurantCol);
  //   const restaurantList = restaurantSnapshot.docs.map((doc) => {
  //     doc.data()
  //   })
  //   return restaurantList;
  // }

  async getRestaurants(){
    return new Promise((resolve, reject) => {
      getDocs(collection(this.firebaseDB, 'restaurants'))
        .then(data => {
          resolve(data.docs.map(doc => doc.data()));
        })
        .catch(err => {
          reject(err);
        });
    })
  }

}

module.exports = { FireBaseService }