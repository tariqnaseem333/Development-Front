function check(value){ 
    console.log(value);
}
function getTrip (callback) {
    setTimeout(function () {
            callback("Let's go to Trip");
        }, 1500);
}
     
getTrip(check);
