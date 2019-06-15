import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAxE6KNNScHu4x-CQ56XPIF2i5i0rKdpPI",
    authDomain: "regg-13f97.firebaseapp.com",
    databaseURL: "https://regg-13f97.firebaseio.com",
    projectId: "regg-13f97",
    storageBucket: "regg-13f97.appspot.com",
    messagingSenderId: "499362156966",
    appId: "1:499362156966:web:3ba1622e92649514"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function res() {
    // return new Promise((resolve, reject) => {
        
    // })
    console.log('Response');
    
        firebase.database().ref('users/').set({
          username: 'name',
          email: 'email',
          profile_picture : 'imageUrl'
        }).then(
           ()=>{
            console.log('save');
           })
    
}


export {
    res
}