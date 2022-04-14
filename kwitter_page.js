//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCPmTpAmsfOGw4bjSRIF_QSQFwYnqROD0U",
      authDomain: "kwitter-e5e7d.firebaseapp.com",
      databaseURL: "https://kwitter-e5e7d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5e7d",
      storageBucket: "kwitter-e5e7d.appspot.com",
      messagingSenderId: "956956334869",
      appId: "1:956956334869:web:6147385d75520ecd3f271c"
    };
    
   firebase.initializeApp(firebaseConfig);
   var user_name=localStorage.getItem("uname");
   var room_name=localStorage.getItem("room_name");
   function send(){
         var msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
               name: user_name,
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
