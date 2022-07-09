const { caesar } = require("../src/caesar");
const { expect } = require("chai");



describe("Caesar()", () => {
    
    
 describe("checking if inputs are correct",() => {
    it("should return false if shift is eql too 0",() => {
        const actual = caesar(undefined,0);
         expect(actual).to.be.false;
     })
    it("should return false if more than 25",() => {
        const actual = caesar(undefined,26);
        expect(actual).to.be.false;
    })
    it("should return false if less than -25",() => {
        const actual = caesar(undefined,-26)
         expect(actual).to.be.false
     })
     it("should return false if shift does not exist",() => {
        const actual = caesar(undefined)
         expect(actual).to.be.false
     })
 }) 
 describe("checking if returns cyphered text",() => {
    it("should return scrambled word",() => {
        const actual = caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.be.eql(expected)
    })
    it("should return scrambled sentence",() => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.be.eql(expected)
    })
 })
})


