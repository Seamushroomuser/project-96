
var firebaseConfig = {
    apiKey: "AIzaSyC3ZerkafWqA_ktVgWpV13I24420qS4FQU",
    authDomain: "lets-chat-web-app-578ba.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-578ba-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-578ba",
    storageBucket: "lets-chat-web-app-578ba.appspot.com",
    messagingSenderId: "177948885797",
    appId: "1:177948885797:web:7a72424af092167da650cc"
  };
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
          localStorage.setItem("Roomname",room_name);
          window.location = "kwitter_page.html";
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();
