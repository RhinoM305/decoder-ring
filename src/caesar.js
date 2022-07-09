// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    
    
  
    function caesar(input, shift, encode = true) {
    //checking if shift is possible.
    if(shift > 25 || shift < -25 || !shift) return false; // checks if shift value is correctly inputed else return false
    if(!encode) shift *= -1 // checks if we need to encode or decode than making shift a negative if we need to decode
    return input.toLowerCase().split("").map((letter) => { // lowercase so we shorten the ascii values we are working with i.e. we are only working with the range 97-122,
      if(letter.charCodeAt(0) < 97) return letter          // than we split the inputed text, than we use map to loop through each letter.
      let num = letter.charCodeAt(0) + parseInt(shift)     // using charcode to comapare the ascii value of current letter to the ascii value before 'a' i.e. '`' or 96
      if(num > 122){                                       //we used a if statement to see if the current letter was within our lower case alphabet
        num = 96 + (num - 122)                             //we than assign the var num too the sum of the current letters ascii number and the shift number. We use parseInt to gurantee that we receieve a integer.
      }                                                    //so first we check if number is more than the ascii value of 'z' or 122 if it is we start at 96 or the ascii value of 'a' and subtract num from 122 to esentially loop around.
      else if (num < 97) {                                 //we also need a checker for the negative shifts, so if num is less than 97
        num += 26                                          //so if our number brings us below the ascii value of 97 or 'a' than we need to start at 'z' or 122 and work our way backwards we can do this by adding 26 to compensate for the negative value.
      }
      return String.fromCharCode(num)  // we return a string char code so the ascii value displays a string or letter i.e. we are returning a letter
    }).join("") // we are now joining together the orignal seperated string.
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
