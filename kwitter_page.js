    const firebaseConfig = {
    apiKey: "AIzaSyAUPwPK-JbKo2znLA8w7SemcAe-ejcl148",
    authDomain: "kwitter-pro-70dcd.firebaseapp.com",
    databaseURL: "https://kwitter-pro-70dcd-default-rtdb.firebaseio.com",
    projectId: "kwitter-pro-70dcd",
    storageBucket: "kwitter-pro-70dcd.appspot.com",
    messagingSenderId: "2859285066",
    appId: "1:2859285066:web:fa9cabc419ec3dbcc6c4b3"
  };
   
   
   firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name")
    console.log(room_name)
    user_name = localStorage.getItem("raft")
  
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();

function logout() {
      localStorage.removeItem("raft")
      localStorage.removeItem("room_name")
      window.location= "index.html"
}


function send() {
      type = document.getElementById("bar").value;
      firebase.database().ref(room_name).push({
            user_name : user_name,
            message : type,
            like : 0
      })
      document.getElementById("bar").value = ""
}