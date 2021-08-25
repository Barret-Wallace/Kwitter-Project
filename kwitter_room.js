  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAdJd-N1h4LZaTSzhc9BVOeyngRGrgCtI",
    authDomain: "kwitter-6f11d.firebaseapp.com",
    databaseURL: "https://kwitter-6f11d-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f11d",
    storageBucket: "kwitter-6f11d.appspot.com",
    messagingSenderId: "681920177016",
    appId: "1:681920177016:web:1c02026c746239cbde5e8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Logout(){
    localStorage.removeItem("User");
    window.location = "index.html";
  }
  user_name = localStorage.getItem("User"); 
  document.getElementById("emph3").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
      var room = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
        FavouriteFood : "Maggie"
      });
      localStorage.setItem("Room Name", room);
      window.location = "Texter.html";
  }
  function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("empty_div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    var room_name = childKey;
    var row = "<div class='roomy' id="+room_name+" onclick='redi(this.id)'>#"+room_name+"</div><hr>";
    document.getElementById("empty_div").innerHTML += row;
    console.log("inside getData function");
    });
    });
  }
  

  getData();

  
  function redi(room_name){
    console.log("inside the redi function");
    localStorage.setItem("Room Name", room_name);
    window.location = "Texter.html";
  }