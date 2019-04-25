import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBJN5GD2d9amxVN6EptYfk52hd2H51F4hs",
    authDomain: "eventplanner-d7d1c.firebaseapp.com",
    databaseURL: "https://eventplanner-d7d1c.firebaseio.com",
    projectId: "eventplanner-d7d1c",
    storageBucket: "eventplanner-d7d1c.appspot.com",
    messagingSenderId: "356098175062"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
