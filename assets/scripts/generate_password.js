//Generate Password script
var generatedPassword = null;
var passwordLength = 10;
var numeric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

document.getElementById('passwordLength').value = passwordLength;
function getRandomInteger(limit) {
  return Math.floor(Math.random() * Math.floor(limit));
}

function getPossibleCharacters(input){
    let sourceCharsString = "";
    if (input.includeNumeric) {
        sourceCharsString += numeric;
    }
        if (input.includeLower) {
        sourceCharsString += lowerCase;
    }
        if (input.includeUpper) {
        sourceCharsString += upperCase;
    }
        if (input.includeSpecial) {
        sourceCharsString += specialChars;
    }
    passwordLength = input.passwordLength;
    return sourceCharsString.split("");
}

function validateInput(){
    //code to validate the inputs
    //returns false if input not validated
    //otherwise returns object of input values
    var validatedInput = {
        includeNumeric: document.getElementById('includeNumeric').checked,
        includeLower: document.getElementById('includeLower').checked,
        includeUpper: document.getElementById('includeUpper').checked,
        includeSpecial: document.getElementById('includeSpecial').checked,
        passwordLength: parseInt(document.getElementById('passwordLength').value,10)
    }
    let alertString = "Numeric: " + validatedInput.includeNumeric +
        "\nLower: " + validatedInput.includeLower + 
        "\nUpper: " + validatedInput.includeUpper + 
        "\nSpecial: " + validatedInput.includeSpecial + 
        "\nLength: " + validatedInput.passwordLength;
    //Code to verify at least one checkbox is checked
    if ((validatedInput.includeNumeric == false) &&
        (validatedInput.includeSpecial == false) &&
        (validatedInput.includeLower == false) &&
        (validatedInput.includeUpper ==false)) {
        window.alert("There are no characters to use in the password! Tick at least one box.");
        return false;
    }
    if ((validatedInput.passwordLength < 8) || (validatedInput.passwordLength > 128)) {
        window.alert("The length you specified is not between 8 and 128!")
        return false;
    }
    return validatedInput;
}


function generatePassword() {
    let validatedInput = validateInput();
    if (!validatedInput) {
        return
    }
    let sourceCharsArray = getPossibleCharacters(validatedInput);
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