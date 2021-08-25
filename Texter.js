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
  var User = localStorage.getItem("User");
  var room = localStorage.getItem("Room Name");
  document.getElementById("Welcome").innerHTML = "Welcome to room #" + room + "!";
  
  function Send(){
    var sender = document.getElementById("sender").value;
    firebase.database().ref(room).push({
    Username : User,
    Message : sender,
    Like : 0
});
  document.getElementById("sender").value = "";
  }
  function getData(){
    firebase.database().ref("/"+room).on('value', function(snapshot){
                                                  document.getElementById("empty_div").innerHTML = "";
                                                  snapshot.forEach(function(childSnapshot){
                                                    var child_key = childSnapshot.key;
                                                    var child_value = childSnapshot.val();//.val() is a function which returns values from the realtime DB//
                                                    if(child_key != "FavouriteFood"){  //!= means not equal to//
                                                      console.log("child_key" + child_key);
                                                      console.log("child_value" + child_value);
                                                      var Like = child_value["Like"];
                                                      var Name = child_value["Username"];
                                                      var Message = child_value["Message"];
                                                      var name_with_img =  "<h4>" + Name + "<img src='tick.png' class='img_tick'></h4>";
                                                      var message_tag = "<h4 class='mess_h4'>"+ Message + "</h4>";
                                                      var liker = "<button id="+ child_key +" class='btn btn-warning' value="+ Like +" onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up' id="+ child_key +"1>Like: " + Like + "</span></button><hr>";//(this.id) passes the id of current element
                                                      var row = name_with_img + message_tag + liker;
                                                      document.getElementById("empty_div").innerHTML += row;// += adds an extra thing of an element
                                                    }
                                                  });
    });
  }
  getData();
  function updateLike(button_id){
    console.log("inside updateLike() and room =" + room);
    var like = document.getElementById(button_id).value;
    like = Number(like) + 1;//The Number function converts a string into a number
    //document.getElementById(button_id + "1").innerHTML = "Like: " + like;//
    firebase.database().ref(room).child(button_id).update({
      Like : like
    });
  }
  function Logout(){
    localStorage.removeItem("User");
    window.location = "index.html";
  }