function notifyMe(){
    Notification.requestPermission();
    if(Notification.permission === "default"){
        alert("Please grant permission");
    }
    else {
        new Notification("New Mail",{body:"You have 1 unread email"});
    }
}
