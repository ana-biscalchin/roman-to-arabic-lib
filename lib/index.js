module.exports = {

    romansAlgarism = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    arabicsAlgarism = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    function romanToInt(str) {
    if (str === '' || str === undefined || typeof str != 'string') {
        throw new Error('Insira um algarismo romano.')
    }

    let arabics = 0;
    for (let i = 0; i <= arabicsAlgarism.length; i++) {
        while (str.indexOf(romansAlgarism[i]) === 0) {
            arabics += arabicsAlgarism[i];
            str = str.replace(romansAlgarism[i], '');
        }
    }

    return arabics;
}

function intToRoman(num) {
    if (num === '' || num === undefined || typeof num != 'number') {
        throw new Error('Insira um número decimal.')
    }
    if (num <= 0) {
        throw new Error('Insira um número maior que 0.')
    }

    let romans = '';
    for (let i = 0; i < romansAlgarism.length; i++) {
        while (num >= arabicsAlgarism[i]) {
            num -= arabicsAlgarism[i];
            romans += romansAlgarism[i];
        }
    }
    return romans;
}

}