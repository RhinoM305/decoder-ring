// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
// set objects for letter translation
      let alpha = {
          a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22",
          h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33",
          o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54",
          v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "
      };
      
      let decoded = {
          11: "a", 12: "f", 13: "l", 14: "q", 15: "v", 21: "b", 22: "g",
          23: "m", 24: "r", 25: "w", 31: "c", 32: "h", 33: "n", 34: "s",
          35: "x", 41: "d", 42: "(i/j)", 43: "o", 44: "t", 45: "y",
          51: "e", 52: "k", 53: "p", 54: "u", 55: "z", [' ']: " "
      };
//encode/decode
      if (encode){
          return input.split('').map(letter => { // if our encode is true than we will split the input up than map a new arr
              return alpha[letter.toLowerCase()] // in each index of the new array we will call upon our object by lowercasing our input letter and using that as the caller
          }).join(''); // after map is done looping through each letter in the input it will undo the split function called earlier
      }
      else { // if our encode is not true we will than run this
          if(input.replace(/\s/g,'').length %2 !== 0){return false} // we are using a regular expression to delete the any white spaces represented by the /s than we check if the result of that is even, if it is we return false
          return input.match(/[0-9]{2}|\s/g).map(number => { // then we use the match function to create an array that groups each number in pairs of two or if there is a white space
              return decoded[number] // we than map a new arr calling upon the decoded object. we call each key using each number pair given to us by our match function
          }).join('') // we than join our arr back together to form a single string and return it
      }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
