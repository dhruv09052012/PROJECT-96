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

  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send()
    {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
          });
      document.getElementById("msg").value="";
    }

    function logout()
    {
          localStorage.removeItem("userr_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }