function placesToVisit() {
	var url = "./places.json";
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function () {
		document.getElementById("places").innerText = xhr.responseText
    }
	xhr.send();
}
