user_name = localStorage.getitem("user_name");
room_name = localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
const config = {
      apiKey: "AIzaSyDvEaSm0vf0gJXp_Qj_-b1MfT1x9uLD9_Y",
      authDomain: "schoolchat-7386b.firebaseapp.com",
      databaseURL: "https://schoolchat-7386b-default-rtdb.firebaseio.com",
      projectId: "schoolchat-7386b",
      storageBucket: "schoolchat-7386b.appspot.com",
      messagingSenderId: "474471210351",
      appId: "1:474471210351:web:b3f50bee5645a58acddc9a"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg, 
      Like:0
      });
      document.getElementById("msg").value = "";
}

