function validateName(name,pattern){
    if(name.match(pattern)){
        console.log("match found");
    }
    else {
        console.log("match not found");
    }
}
var name = "$John";
var regEx = /\$/;    //check for $ character in the name"
validateName(name,regEx)