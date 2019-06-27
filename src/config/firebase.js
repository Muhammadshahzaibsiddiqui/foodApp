import * as firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACSH34QIOEEV-4OvBKtwOcZQaLxN7gfNM",
  authDomain: "blood-bank-c8055.firebaseapp.com",
  databaseURL: "https://blood-bank-c8055.firebaseio.com",
  projectId: "blood-bank-c8055",
  storageBucket: "blood-bank-c8055.appspot.com",
  messagingSenderId: "674204395320",
  appId: "1:674204395320:web:4972f81eb9d41f7c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage()




function userRegister(fullName, email, age, country, city, password, img, img1) {

  var file = img;
  var file = img1;
  // console.log(file);

  var storageRef = firebase.storage().ref();

  //dynamically set reference to the file name
  var thisRef = storageRef.child('user_images/' + file.name);

  //put request upload file to firebase storage
  thisRef.put(file).then(function (snapshot) {
    console.log('Uploaded a blob or file!');
    //get request to get URL for uploaded file

    thisRef.getDownloadURL().then(function (url) {
      // console.log(url);
      localStorage.setItem('ProductImg', JSON.stringify(url));

    }).then(function () {
      var img = localStorage.getItem("ProductImg");
      var url = JSON.parse(img);

      var id = db.collection("users").doc();
      id.set({
        id: id,
        username: fullName,
        email: email,
        age: age,
        coutry: country,
        city: city,
        password: password,
        imgURL: url
      }).then(
        () => {
          console.log('save');
          // window.location = 'userPage.html';
        })
    });
  });

}

function restaurantRegister(fullName, email, age, country, city, password, img, img1) {

  var file = img;
  var file = img1;
  // console.log(file);

  var storageRef = firebase.storage().ref();

  //dynamically set reference to the file name
  var thisRef = storageRef.child('user_images/' + file.name);

  //put request upload file to firebase storage
  thisRef.put(file).then(function (snapshot) {
    console.log('Uploaded a blob or file!');
    //get request to get URL for uploaded file

    thisRef.getDownloadURL().then(function (url) {
      // console.log(url);
      localStorage.setItem('ProductImg', JSON.stringify(url));

    }).then(function () {
      var img = localStorage.getItem("ProductImg");
      var url = JSON.parse(img);

      var id = db.collection("restaurants").doc();

      localStorage.setItem('restaurant_id', JSON.stringify(id));

      id.set({
        id: id,
        username: fullName,
        email: email,
        age: age,
        coutry: country,
        city: city,
        password: password,
        imgURL: url
      }).then(
        () => {
          console.log('save');
          // window.location = 'userPage.html';
        })
    });
  });

}





function login(email, password) {

}




function postFood(name, price, description, category, img, img1) {

  var file = img;
  var file = img1;
  // console.log(file);

  var storageRef = firebase.storage().ref();

  //dynamically set reference to the file name
  var thisRef = storageRef.child('food_images/' + file.name);

  //put request upload file to firebase storage
  thisRef.put(file).then(function (snapshot) {
    console.log('Uploaded a blob or file!');
    //get request to get URL for uploaded file

    thisRef.getDownloadURL().then(function (url) {
      // console.log(url);
      localStorage.setItem('ProductImg', JSON.stringify(url));

    }).then(function () {
      var img = localStorage.getItem("ProductImg");
      var url = JSON.parse(img);

      var restaurant = localStorage.getItem("restaurant_id");
      var restaurant_id = JSON.parse(restaurant);

      var id = db.collection("food").doc(restaurant_id).collection(restaurant_id).doc();
      id.set({
        food_id: id,
        restaurant_id: restaurant_id,
        name: name,
        price: price,
        description: description,
        category: category,
        img_URL: url
      }).then(
        () => {
          console.log('save');
          // window.location = 'userPage.html';
        })
    });
  });

}

const arr = [];
function foodList() {
  return new Promise((resolve, reject) => {

    // var docRef = db.collection("food").doc('o91gwrFrhUrofIpDqKZL').collection('o91gwrFrhUrofIpDqKZL').doc();
    var restaurant = localStorage.getItem("restaurant_id");
    var restaurant_id = JSON.parse(restaurant);

    db.collection("food").doc(restaurant_id).collection(restaurant_id).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().food_id._key.path.segments);
        arr.push(doc.data())
        if (doc.exists) {
          resolve(arr);
        } else {
          // doc.data() will be undefined in this case
          reject("No such document!");
        }
      })
    });

  })
}
const arr1 = [];
function userFoodList() {
  return new Promise((resolve, reject) => {

    // var docRef = db.collection("food").doc('o91gwrFrhUrofIpDqKZL').collection('o91gwrFrhUrofIpDqKZL').doc();
    var restaurant = localStorage.getItem("restaurant_id");
    var restaurant_id = JSON.parse(restaurant);

    db.collection("food").doc(restaurant_id).collection(restaurant_id).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        arr1.push(doc.data())
        if (doc.exists) {
          resolve(arr1);
          // #########

          // db.collection("food").doc(doc.id).collection(doc.id).doc().get().then(function (querySnapshot) {
          //   querySnapshot.forEach(function (doc1) {
          //     // doc.data() is never undefined for query doc snapshots
          //     console.log(doc1.id, " => ", doc1.data());
          //     arr1.push(doc1.data())
          //     if (doc.exists) {
          //       resolve(arr1);
          //     } else {
          //       // doc.data() will be undefined in this case
          //       reject("No such document!");
          //     }
          //   })
          // });

          // #########


        } else {
          // doc.data() will be undefined in this case
          reject("No such document!");
        }
      })
    });

  })
}










export {
  userRegister, restaurantRegister, login, postFood, foodList, userFoodList
}

