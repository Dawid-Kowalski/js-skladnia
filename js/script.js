// zadanie 1

const string1 = 'Hello';
const string2 = 'World';

const string3 = `${string1} ${string2}`;

// zadanie 2

const multiply = (x, y=1) => x*y;

// zadanie 3

const avarge = (...args) => args.reduce((x, y) => x+y) / args.length;

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

avagre(...grades);

//zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [,,firstName,,secondName] = data;