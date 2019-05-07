const chai = require("chai");
const expect = chai.expect;
const conversor = require("../lib/conversor");

describe("lib conversor", () => {
    describe("Receber", () => {
      it("should to be a string", () => {
        expect(conversor.romanToArabic("III")).to.equal(true);
      });
      
    });     
})