// Assignment Code
var generateBtn = document.querySelector("#generate");
var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var onlyLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var onlySpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];


function generatePassword() {
  var finalPassword = '';
  var length = prompt("What should be the length of your password?");
  console.log(typeof length);
  if (length < 8) {
    alert("Password must be atleast 8 characters.");
    return generatePassword();
  } else if (length > 128) {
    alert("Password must be less than 128 characters.");
    return '';
  } else {
    let checkSpecialCharacter = confirm("Do you want to include special characters?");
    
    //prompt user for numeric characters
    var checkNumeric = confirm("Do you want to include numeric characters?");
  
    //prompt user for lowercase characters
    var checkLowerCase = confirm("Do you want to include lowercase characters?");
  
    //prompt user for uppercase characters
    var checkUpperCase = confirm("Do you want to include uppercase characters?");

    if (!checkSpecialCharacter && !checkNumeric && !checkLowerCase && !checkUpperCase) {
      alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
      return '';
    }
    var allChar = [];
    if (checkSpecialCharacter) {
      allChar = allChar.concat(onlySpecial);
    }
    if (checkNumeric) {
      allChar = allChar.concat(onlyNumeric);
    }
    if (checkLowerCase) {
      allChar = allChar.concat(onlyLower);
    }
    if (checkUpperCase) {
      allChar = allChar.concat(onlyUpper);
    }
    console.log(allChar);
    for (let i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * allChar.length);
      finalPassword += allChar[random];
    }
    return finalPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
