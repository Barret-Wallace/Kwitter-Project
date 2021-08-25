function Login(){
    var user = document.getElementById("user_name").value;
    localStorage.setItem("User", user);
    window.location = "kwitter_room.html";
}
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcDnLwlhAycVw3FN8mNLchq6Wj8uai-60",
    authDomain: "practice-94-4cba7.firebaseapp.com",
    databaseURL: "https://practice-94-4cba7-default-rtdb.firebaseio.com",
    projectId: "practice-94-4cba7",
    storageBucket: "practice-94-4cba7.appspot.com",
    messagingSenderId: "168294588192",
    appId: "1:168294588192:web:f519ca476c99e3cab30145"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);