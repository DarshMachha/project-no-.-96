function addUser(){
    user_name=document.getElementById("login_id").value;
    localStorage.setItem("username",user_name);
    window.location="communicator_room.html";
}

