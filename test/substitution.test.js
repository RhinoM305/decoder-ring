const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("Substitution()",() => {
    describe("returns correctly encoded and decoded", () => {
        it("encodes word", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
            const expected = 'jrufscpw'
            expect(actual).to.be.eql(expected)
        })
        it("encodes sentence",() => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
            const expected = 'elp xhm xf mbymwwmfj dne'
            expect(actual).to.be.eql(expected)
        })
        it("decode word", () => {
             const actual = substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl",encode = false)
             const expected = "message"
             expect(actual).to.be.eql(expected)
        })
    })
})