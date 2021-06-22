import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCNrFZrppmDtw0n5_K_k3I3jHgrgzJ5-GY",
    authDomain: "final-project-84b87.firebaseapp.com",
    projectId: "final-project-84b87",
    storageBucket: "final-project-84b87.appspot.com",
    messagingSenderId: "230504557574",
    appId: "1:230504557574:web:d2f9c68fb9aecaee1aa787"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db } ;