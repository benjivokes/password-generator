# password-generator
Password generator is a library for generating random and unique passwords.

## Base HTML Structure
	
  	 <div class="passwordOptions">
                    <div class="form-group">
                        <label for="passwordLength">Length of password</label>
                        <input type="number" class="form-control" id="passwordLength" min="8" max="128">
                        <small id="passwordLengthHelp" class="form-text text-muted">Length between 8 and 128</small>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="includeNumeric" checked>
                        <label class="form-check-label" for="includeNumeric">Use numeric characters [0123456789]</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="includeLower" checked>
                        <label class="form-check-label" for="includeLower">Use lowercase characters [a-z]</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="includeUpper" checked>
                        <label class="form-check-label" for="includeUpper">Use uppercase characters [A-Z]</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="includeSpecial">
                        <label class="form-check-label" for="includeSpecial">Use other characters</label>
                    </div>
            
    

## Base Config Options

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


