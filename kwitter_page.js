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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
      name =message_data('name');
      message=message_data('message');
      like=message_data('like');
      name_with_tag="<h4> " + name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag="<h4 class=message_h4">+ message +"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id +" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

      row=name_with_tag+message_with_tag+span_with_tag;
      document.getElementById("output").innerHTML+= row;

//End code
      } });  }); }
getData();

function updateLike(message_id){
console.log("clicked on like button-" + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes

});
}
function logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:User,
            message:msg,
            like:0
            
      });
}