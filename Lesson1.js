console.log(12);
let age = 25;
let year = 1997;
console.log(age, year);

const points = 100;
console.log(points);

// strings
console.log('fuck you');

let email = 'abdoalkh@pornnnhub.com';

console.log(email);

// string concatenation
let FirstName = 'Abdoo ';
let LastName = 'Alkhatteb';

let FullName = FirstName + LastName;

console.log(FullName);

// getting characters
console.log(FullName[3]);

// string length
console.log(FullName.length);

// string methods
console.log(FullName.toUpperCase());
let result = FullName.toLowerCase();
console.log(result, FullName);

let index = email.indexOf('p');
console.log(index);

// common string methods
let result2 = email.lastIndexOf('n');
console.log(result2);

// slice a section from a string
let result3 = email.slice(0, 13);
console.log(result3);

// making a substring
let result4 = email.substr(3, 10);
console.log(result4);

// replace a specific character in a string with another
let result5 = email.replace('h', 'w');
console.log(result5);

// numbers
let radius = 10;
const pi = 3.14;
let numbeR = '12';
console.log(radius, pi, numbeR);

// math operators +, -, *, /, **, %
console.log(10/2);

let result6 = radius % 3;
console.log(result6);

let result7 = pi * radius**2;
console.log(result7);

//order of operations - B I D M A S
let res8 = 5 * (10-3)**2;
console.log(res8);

let likes = 30;
//likes = likes + 1;
//likes++;
//likes--;
//likes += 10;
//likes -= 5;
//likes *= 3;
likes /= 2;
console.log(likes);

//NaN - not a number
console.log(5 / 'fuck');
console.log(5 * 'fuck');
console.log('fuck' * 5);

// adding numbers to strings
let res9 = 'the blog has ' + likes + ' likes';
console.log(res9);

//Template Strings
const title = 'Best gangbang with abdoo';
const author = 'Me the photographer';
const likes2 = 10000;

//concatenation way
//let res10 = 'The blog called ' + title + ' by ' + author + ' has ' + likes2 + ' likes';
//console.log(res10);

//template string way
let res10 = `The blog called ${title} by ${author} has ${likes2} likes`;
console.log(res10);
//creating HTML templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes2} likes</span>
`; 
console.log(html);

//arrarys
let niggas = ['shawn', 'ryu', 'ching-chang han chi'];
niggas[0] = 'hamdoun';
console.log(niggas[0]);

let ages = [20,25,30,35];
console.log(ages[2]);
console.log(ages.length);

//arrays methods
let res11 = niggas.join(',');
console.log(res11);

let res12 = niggas.indexOf('hamdoun');
console.log(res12);

let res13 = niggas.concat(['ken', 'kochou']);
console.log(res13);

let res14 = res13.indexOf('ken');
console.log(res14);

let res15 = niggas.push('abdoo');
console.log(res15);

// Null and Undefined
let age2 = null;
console.log(age2, age2 + 3, `the age is ${age2}`);

let age3;
console.log(age3, age3 + 3, `the age is ${age3}`);

//booleans & comparisons
console.log(true, false, 'true', 'false');

//methods can return booleans
let res16 = email.includes('@');
console.log(res16);

let names = ['abdoo', 'sharmout', 'donkey'];
let res17 = names.includes('human');
console.log(res17);
console.log(names.includes('donkey'));

//comparison operators
let abo = 25;
console.log(abo == 25);
console.log(abo == 30);
console.log(abo != 30);
console.log(abo > 30);
console.log(abo < 30);
console.log(abo >= 30);
console.log(abo <= 30);
let varse = 'Inter';
console.log(varse == 'inter');

//Loose comparison (different types can still be equal)
console.log(abo == 25);
console.log(abo == '25');
console.log(abo != 25);
console.log(abo != '25');

//Strict comparison (different types can't be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

//type conversion
let score = '100';
score = Number(score);
console.log(score + 1);

let me = 'Hello';
//me = Number(me);
console.log(me);
console.log(typeof me);
console.log(typeof score);

let res18 = String(50);
console.log(res18, typeof res18);

let fRes = Boolean(0); 
let fRes1 = Boolean(100);
let fRes2 = Boolean(-100);
let fRes3 = Boolean('0');
console.log(fRes, typeof fRes);
console.log(fRes1, typeof fRes1);
console.log(fRes2, typeof fRes2);
console.log(fRes3, typeof fRes3);

