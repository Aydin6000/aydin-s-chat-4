//YOUR FIREBASE LINKS
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
   room_name=localStorage.getItem("room_name");
   
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
