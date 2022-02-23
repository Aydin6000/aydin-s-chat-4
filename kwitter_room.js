
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA4s_3cD_mY0-Fk94Rp_8BF2BquullUV7U",
      authDomain: "kwitter-26765.firebaseapp.com",
      databaseURL: "https://kwitter-26765-default-rtdb.firebaseio.com",
      projectId: "kwitter-26765",
      storageBucket: "kwitter-26765.appspot.com",
      messagingSenderId: "119567934766",
      appId: "1:119567934766:web:6c999cb626e5e44be386bf"
    };
    
    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
     firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

    function addRoom()
    {
      Room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("roomname-" + Room_names);
      row="<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}