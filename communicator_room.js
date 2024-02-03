var firebaseConfig = {
      apiKey: "AIzaSyB1Jwy4R4PWPzm_6CQJGctYo6f4Z1mCoA4",
      authDomain: "kwitter-2b13b.firebaseapp.com",
      databaseURL: "https://kwitter-2b13b-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b13b",
      storageBucket: "kwitter-2b13b.appspot.com",
      messagingSenderId: "814773228660",
      appId: "1:814773228660:web:66cb126f77be48bb2d6d21",
      measurementId: "G-C4KN5TCJHX"
    };
    
    // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("username");
     document.getElementById("User").innerHTML="WELCOME "+username+" 😄😄";

     function addRoom(){
     rn=document.getElementById("room_name").value;

     firebase.database().ref("/").child(rn).update({
      purpose:"adding room name"
     });

     localStorage.setItem("room_name" , rn );
     window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room names are " +Room_names);
      row="<div class='row1' id="+Room_names+" onclick='Row(this.Id)'>#"+Room_names+" </div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();

function Row(name){
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

