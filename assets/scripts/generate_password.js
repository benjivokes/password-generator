//Generate Password script
var generatedPassword = null;

function generatePassword() {
	alert("Password Generated");
}

function copyPassword() {
	//Copy the generated password to the clipboard
	if (generatedPassword == null) {
		alert("Nothing copied because a password has not been generated.")
	} else {
		let password = document.getElementById('generatedPassword');
		password.select();
		document.execCommand('copy');
		alert("Password copied");
	}
}