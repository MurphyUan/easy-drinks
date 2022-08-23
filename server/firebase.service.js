const { initializeApp } = require('firebase/app');
const { getFirestore }  = require('firebase/firestore') ;

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

}

module.exports = { FireBaseService }