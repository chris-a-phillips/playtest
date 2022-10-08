export const starters = {
    dra: {
        type: '',
        attack: 117,
        defense: 98,
        speed: 86
    },
}



// saur: 57,57,45
// der: 56,47,52
// rtle: 49,65,44
// ita: 49,65,45
// quil: 56,47,52
// dile: 55,56,47
// cko: 55,45,55
// chic: 65,45,45
// kip: 60,50,45
// turt: 57,60,43
// char: 58,44,53
// lup: 56,55,47
// sniv: 45,55,54
// pig: 54,45,55
// osh: 59,45,50
// spin: 55,55,47
// fenn: 54,50,50
// kie: 59,42,56
// rowl: 53,53,55
// ten: 63,40,58
// plio: 60,55,55
// key: 53,45,58
// scor: 56,40,60
// ble: 55,40,60






let fruit = 'oranges';

switch (fruit) {
  case 'apples':
  case 'oranges':
    console.log('Known fruit');
    break;
  default:
    console.log('Unknown fruit');
}
// Logs: 'Known fruit'

const knownFruit = () => console.log('Known fruit');
const unknownFruit = () => console.log('Unknown fruit');

const logFruit = {
  'apples': knownFruit,
  'oranges': knownFruit,
  'default': unknownFruit
};

(logFruit[fruit] || logFruit['default'])(); // Logs: 'Known fruit'