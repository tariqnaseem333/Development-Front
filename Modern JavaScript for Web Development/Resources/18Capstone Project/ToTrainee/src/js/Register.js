
let ageValid = false;

function getFromSession() {
	//Function implementation here with exception handling
	var url = "./types.json";

}



function showDropdown(cityArr) {
	// function implementation here
}

function enableButton() {
	//function implementation here
}



function changeToUpper() {
	//function implementation here
}


//debugg the below function as per given requirements
function checkAge() {
	var age = document.getElementById("age").innerHTML;
	if (age > 18 && age < 60) {
		document.getElementById("ageError").innerText = "Sorry, You should be between 18-60 years old!"
		document.getElementById("successMessage").innerText = ""
		document.getElementById('btn').disabled = true;
		ageValid=false;
	} else {
		document.getElementById("ageError").innerText = ""
		ageValid=true;

	}
}


function register() {
	//function implementation here
}
//Do not remove below line of code

if (typeof exports !== 'undefined') {
	module.exports = {
		register,
		checkAge,
		enableButton,
		showDropdown,
		getFromSession
	};
}