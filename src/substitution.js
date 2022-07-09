// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
   
    
  function substitution(input, alphabet, encode = true) {
    //set defaults
      if (!input || !alphabet || alphabet.length !== 26){return false}; // we are checking if alphabet is correctly inputted
      if (Array.from(new Set(alphabet)).length !== 26){return false}; // a bit is happening here but we are firstly passing in a string 'alphabet' into the set function =>
      // the set function will remove any duplicated, than the array.from will turn the result of the set into an array. we will than get the length of said array and se if it is 26 indexes long
      let abcs = 'abcdefghijklmnopqrstuvwxyz'; // we define our abc string
      alphabet = alphabet.split(''); // we split the given alphabet and set it to lowercase
      input = input.toLowerCase();
      let enCode = {}; 
      let decode = {};
      let result = '';

      abcs.split('').forEach((letter, index) => { // we are spliting the abc string and looping through each letter
          enCode[letter] = alphabet[index]; // we are creating the new alphabet that has an assocation with the given alphabet i.e. a : x
          decode[alphabet[index]] = letter; // we are doing the opposite of the last line of code, i.e. x : a
      })
      
//if encode is false
      if (!encode) enCode = decode; //if no encode we switch encode to the decode object
      input.split('').forEach(letter => { // we are looping through the input
          result += letter === ' ' ? ' ' : enCode[letter] // so for each letter in input if the input has a space we add a space to result else we invoke the correct decode object value
      })
//return it
      return result;
  }
//END OF SUBSTITUTION FUNCTION
    
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
