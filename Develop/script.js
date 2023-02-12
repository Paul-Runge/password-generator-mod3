// Variables for all password character types
var num = "0123456789";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate a random password
var generatePassword = function() {
  
  // User chosen character types
  var chosenChar = "";

  // Result of password generation
  var result = "";
  
  // Confirm password character length
  var confirmLength = prompt("Enter password length between 8 and 128 characters. (click OK to confirm)");
  
 
  // Confirm character types
  var confirmNum = confirm("Include numbers? (click OK to confirm)");
  var confirmUpper = confirm("Include uppercase letter? (click OK to confirm)");
  var confirmLower = confirm("Include lowercase letters? (click OK to confirm)");
  var confirmSpec = confirm("Include special characters? (click OK to confirm)");
  
  // Validate character length meets requirements
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Your password is not between 8 and 128 characters.")
    var confirmLength = prompt("Enter password length between 8 and 128 characters. (click OK to confirm)"); 
  }    
  
  // Validate atleast one character type chosen
  if (!confirmNum && !confirmUpper && !confirmLower && !confirmSpec) {
    alert("Please choose atlest one character type.")
    var confirmNum = confirm("Include numbers? (click OK to confirm)");
    var confirmUpper = confirm("Include uppercase letter? (click OK to confirm)");
    var confirmLower = confirm("Include lowercase letters? (click OK to confirm)");
    var confirmSpec = confirm("Include special characters? (click OK to confirm)");
  }
  
  // If user selects a character type, add character type values to chosen character reference
  if (confirmNum){
    chosenChar += num;
  }
  if (confirmUpper) {
    chosenChar += upperAlpha;
  }
  if (confirmLower) {
    chosenChar += lowerAlpha;
  }
  if (confirmSpec) {
    chosenChar += specChar;
  }

  // Generate password given user chosen parameters
  for (let i = 0; i < confirmLength; i++) {
    result += chosenChar.charAt(Math.floor(Math.random() * chosenChar.length));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);