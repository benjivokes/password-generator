//Generate Password script
var generatedPassword = null;
var passwordLength = 8;
var numeric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

function getRandomInteger(limit) {
  return Math.floor(Math.random() * Math.floor(limit));
}

function getPossibleCharacters(){
	let sourceCharsString = "";
	sourceCharsString = sourceCharsString.concat(numeric,upperCase,lowerCase,specialChars);
	return sourceCharsString.split("");
}

function validateInput(){
	//code to validate the inputs
	const includeNumeric = document.getElementById('includeNumeric').checked;
	const includeLower = document.getElementById('includeLower').checked;
	const includeUpper = document.getElementById('includeUpper').checked;
	const includeSpecial = document.getElementById('includeSpecial').checked;
	const passwordLength = document.getElementById('passwordLength').value;
	let alertString = "Numeric: " + includeNumeric + "\nLower: " + includeLower + "\nUpper: " + includeUpper + "\nSpecial: " + includeSpecial + "\nLength: " + passwordLength;
	window.alert(alertString);
}

function generatePassword() {
	validateInput();
	let sourceCharsArray = getPossibleCharacters();
	let newPassword = "";
	for (i=0; i < passwordLength; i++) {
		let randNum = getRandomInteger(sourceCharsArray.length);
		let associatedChar = sourceCharsArray[randNum];
		newPassword = newPassword.concat(associatedChar);
	}
	generatedPassword = newPassword;
	//set the field with the password
	document.getElementById('generatedPassword').value = newPassword;
	document.getElementById('generatedPassword').style.display = "block";
	document.getElementById('copyPassword').style.display = "inline";
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