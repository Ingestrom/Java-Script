//function declaration
function greet(){
    console.log('abdoo is a dog');    
}

//fuction expression
const SpeakTheTruth = function(){
    console.log('abdoo is a sharmoota');
};

greet();
greet();
greet();

SpeakTheTruth();
SpeakTheTruth();
SpeakTheTruth();

//arguments and parameters

const Bark = function(sound = 'AAAHHH', dog = 'Hassoun AAAAAHHH'){
    console.log(`abdoo says: ${sound} ${dog}`);
};

Bark("Where's hassoun my donkey? Woof!");
//Bark();

//returning values

/*const tell = function(name = 'abdoo', time = 'night'){
    console.log(`good ${time} ${name}`);
}*/

//const calcArea = function(radius){
//    return 3.14 * radius**2;
//};

//const area = calcArea(5);
//console.log(area);
//todo : insert the return value in another function

// regular functions
const calcSur =function(length){
    return length**2;
};

//arrow functions
const calcArea = (radius) => {
    return 3.14 * radius**2;
};


const area2 =calcArea(5);
console.log('area is:', area2);

//Practice arrow functions
const greet2 = () => 'hello nigga';

greet2();
console.log(greet2());
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

bill (3, 30);
console.log(bill([10, 25, 55], 0.2));
//functions

const greeting = () => 'nigga!!';
let resultOne = greeting();
console.log(resultOne);
//methods
const name2 = 'fraun';
let resultTwo = name2.toUpperCase();
console.log(resultTwo);

//callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
}

myFunc(function(value){
    //do something
    console.log(value)
});

// let people = ['ahmad', 'zurgan', 'muj3es', 'hnt', 'burakbeh'];

//get a reference to the 'ul'
const ul = document.querySelector('.People');
console.log(ul);

const people = ['muj3es', 'khara', 'Quanneish', 'aneesa', 'sharmouta'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

