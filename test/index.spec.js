const chai = require('chai');
const mocha = require('mocha');
const convert = require('../lib/index');
const expect = chai.expect;

describe('convert', () => {
  
  describe('#romanToInt', () => {
    it('Deve retornar 9 quando o parâmetro for IX', () => {
      expect(convert.romanToInt('IX')).to.be.equal(9);
    });
    it('Deve retornar um erro quando não houver parâmetro', () => {
      expect(() => convert.romanToInt()).to.throw('Insira um algarismo romano.');
      expect(() => convert.romanToInt('')).to.throw('Insira um algarismo romano.');
      expect(() => convert.romanToInt(9)).to.throw('Insira um algarismo romano.');
    });
  });

  describe('#intToRoman', () => {
    it('Deve retornar IX quando o parâmetro for 9', () => {
      expect(convert.intToRoman(9)).to.be.equal('IX');
    });
    it('Deve retornar um erro quando não houver parâmetro', () => {
      expect(() => convert.intToRoman()).to.throw('Insira um número decimal.');
      expect(() => convert.intToRoman('')).to.throw('Insira um número decimal.');
      expect(() => convert.intToRoman('IX')).to.throw('Insira um número decimal.');
    });
    it('Deve retornar um erro quando o parâmetro for igual ou menor que 0', () => {
      expect(() => convert.intToRoman(0)).to.throw('Insira um número maior que 0.');
      expect(() => convert.intToRoman(-3)).to.throw('Insira um número maior que 0.');
    });
  });
});