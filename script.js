// Assigning variables to the method returning the elements with the Id
var passwordText = document.getElementById("password");
var passwordGenerate = document.getElementById("generate");

// Function to generate the password
function generatePassword() {
  // Assigning variables to possible password characters and the length of the password
  var password = "";
  var passwordCharacters = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+-={}[]:";
  var passwordLength;
  passwordLength = prompt(
    "Enter password length (must be between 8 and 128 characters):"
  );
  // Checking if the length of the password is less than 8 or greater than 128
  // If true, it will generate a alert message and return
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  //If false, it will prompt if they if they want to include lowercase, uppercase, numbers, or symbols
  else {
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSymbols = confirm("Include symbols?");
    // If the state of the prompt is true, it will append the characters to the password characters according to the user's selection
    if (includeLowercase) {
      passwordCharacters += lowercase;
    }
    if (includeUppercase) {
      passwordCharacters += uppercase;
    }
    if (includeNumbers) {
      passwordCharacters += numbers;
    }
    if (includeSymbols) {
      passwordCharacters += symbols;
    }
    // If none of the above conditions are true, it will alert the user to select at least one character type and return
    if (
      includeLowercase === false &&
      includeUppercase === false &&
      includeNumbers === false &&
      includeSymbols === false
    ) {
      alert("You must choose at least one character type.");
      return;
    }
    // If at least one of the conditions are true, it will generate the password
    // It will loop through the passwordCharacters array and append each character to the password variable
    // It will then append the password variable to the passwordText variable, which will show up on the page
    for (var i = 0; i < passwordLength; i++) {
      var passwordIndex = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters[passwordIndex];
      document.getElementById("password").value = password;
    }
  }
}
// Runs the generatePassword function when the generate button is clicked
passwordGenerate.addEventListener("click", generatePassword);
