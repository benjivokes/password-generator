//Generate Password script
var generatedPassword = null;
var passwordLength = 8;
var numeric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
	let newPassword = "HelloWorld";
	generatedPassword = newPassword;
	//set the field with the password
	document.getElementById('generatedPassword').value = newPassword;
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