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
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML= "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  
  
    console.log("room name - " + room_name);
  room = "<div id="+Room_names+" class='room_name' onclick='simple(this.id)'> "+Room_name+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  
  });});}
  getData();
  
   store = localStorage.getItem("raft")
  document.getElementById("welcome").innerHTML = "welcome" + store
  
  function easy() {
      room = document.getElementById("")
      window.location ="index.html"
  }
  function addRoom() {
      room_name = document.getElementById("maze").value
      localStorage.setItem("room_name", room_name)
      firebase.database().ref("/").child(room_name).update
      (
          {
              kwitter : "chat"
          }
      )
      window.location = "kwitter_page.html"
  }
  
  function redirectToRoomName()
  {
      console.log(room_name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
  }