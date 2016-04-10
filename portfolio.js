function submitAlert(x) {
	var name = document.getElementById(x).value;
	document.getElementById("thankYou").innerHTML = "Thanks for your submission, " + name + "!"
}