function submitAlert(x) {
	var name = document.getElementById(x).value;
	var text = "Thanks for your submission, ";
	text += name;
	text += "! I will get back to you shortly via e-mail.";
	alert(text);
}