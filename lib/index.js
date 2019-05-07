module.exports = {

  romanToInt: (str) => {
    const romansAlgarism = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabicsAlgarism = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arabics = 0;
    if (str === "" || str === undefined || typeof str !== "string") {
      throw new Error("Insira um algarismo romano.");
    }
    for (let i in arabicsAlgarism) {
      while (str.indexOf(romansAlgarism[i]) === 0) {
        arabics += arabicsAlgarism[i];
        str = str.replace(romansAlgarism[i], "");
      }
    }
    return arabics;
  },

  intToRoman: (num) => {
    const romansAlgarism = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabicsAlgarism = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = "";

    if (num === "" || num === undefined || typeof num !== "number") {
      throw new Error("Insira um número decimal.");
    }
    if (num <= 0) {
      throw new Error("Insira um número maior que 0.");
    }
    for (let i in romansAlgarism) {
      while (num >= arabicsAlgarism[i]) {
        num -= arabicsAlgarism[i];
        romans += romansAlgarism[i];
      }
    }  
    return romans;
  }

};

