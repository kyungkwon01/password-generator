var passwordText = document.getElementById("password");
var passwordGenerate = document.getElementById("generate");

function generatePassword() {
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
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  } else {
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSymbols = confirm("Include symbols?");
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
    if (
      includeLowercase === false &&
      includeUppercase === false &&
      includeNumbers === false &&
      includeSymbols === false
    ) {
      alert("You must choose at least one character type.");
      return;
    }
    for (var i = 0; i < passwordLength; i++) {
      var passwordIndex = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters[passwordIndex];
      document.getElementById("password").value = password;
    }
  }
}

passwordGenerate.addEventListener("click", generatePassword);
