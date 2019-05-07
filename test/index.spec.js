const chai = require('chai');
const expect = chai.expect;
const convert = require('../lib/index');

describe('convert', () => {
  
  describe('romanToInt', () => {
    it('Should return 20 when parameter is XX', () => {
      expect(convert.romanToInt('XX')).to.be.equal(20);
    });
    it('Should return an error when there is no parameter', () => {
      expect(() => convert.romanToInt()).to.throw('Insira um algarismo romano.');
      expect(() => convert.romanToInt('')).to.throw('Insira um algarismo romano.');
      expect(() => convert.romanToInt(9)).to.throw('Insira um algarismo romano.');
    });
  });

  describe('intToRoman', () => {
    it('Should return XXI when parameter is 21', () => {
      expect(convert.intToRoman(9)).to.be.equal('IX');
    });
    it('Should return an error when there is no parameter', () => {
      expect(() => convert.intToRoman()).to.throw('Insira um número decimal.');
      expect(() => convert.intToRoman('')).to.throw('Insira um número decimal.');
      expect(() => convert.intToRoman('IX')).to.throw('Insira um número decimal.');
    });
    it('Must return an error when parameter is equal to or less than 0', () => {
      expect(() => convert.intToRoman(0)).to.throw('Insira um número maior que 0.');
      expect(() => convert.intToRoman(-3)).to.throw('Insira um número maior que 0.');
    });
  });
});