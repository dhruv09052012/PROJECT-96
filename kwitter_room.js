// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC3SN6VDQkwrqQiLNySNLe44XgkObZ4mLA",
      authDomain: "kwitter-952e4.firebaseapp.com",
      databaseURL: "https://kwitter-952e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-952e4",
      storageBucket: "kwitter-952e4.appspot.com",
      messagingSenderId: "636111265179",
      appId: "1:636111265179:web:3ef471973c0304fe2d153e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome" + user_name + "!!!";

function add_room()
{
    room_name=document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
      console.log("Room name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML =row;
      //End code
      });
});
}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("userr_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}