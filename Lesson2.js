//for loops
for(let i = 0; i < 5; i++ ){
    console.log('in loop:', i);
}
console.log('loop finished');

const names = ['abdoo', 'alkhateeb', 'donkey'];

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}<div>`;
    console.log(html);
}

//while loop
let i = 0;
while(i < 5){
    console.log('in loop', i);
    i++;
}

// do while loops
let l = 5;
do{
    console.log('val of l is:', l);
    l++;
} while(l<5);

//if statements
const age = 22;

if(age > 20){
    console.log("fuck, you're a real old fart, abdoooo");
}

const Sharameet = ['hassoon', ' abdoo', ' hassoon gay', ' abdoo lesbo.'];

if(Sharameet.length > 3){
    console.log(`The sharameet of the year are: ${Sharameet}`);
}
//const password = 'abdoo';
//const password = 'abdookalb';
const password = 'abdookalbsharmout';

/*if(password.length >= 12){
    console.log('this password is super strong')
} else if(password.length >= 8){
    console.log('this password is long enough');
} else{
    console.log("password isn't not long enough");
}
*/

//Logical operators - OR || and AND &&


if(password.length >= 12 && password.includes('@')){
    console.log('this password is super strong')
} else if(password.length >= 8 || password.includes('@')){
    console.log('this password is strong enough');
} else{
    console.log("password isn't not strong enough");
}

//Logical NOT (!)

let user = false;

if(!user){
    console.log('Take this : _!_');
}

console.log(!true);
console.log(!false);

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }

    console.log('your score :', scores[i]);

    /*if(scores[i] === 100){
        console.log("congrats, you've reached the top score!");
        break;
    }*/
}

//switch statements
const grade = 'F';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('WTF?!! Are you a dump?? It is a D you jackass!');
        break;
    case 'E':
        console.log("Congrats!! You're a real donkey... E!");
        break;
    case 'F':
        console.log('Please, someone get this animal out of my school, this fucker has the iq of a spoon... F!');
        break;
    default:
        console.log('not a valid grade');
        
}

//using if statements
//if(grade === 'A'){

//} else if(grade === 'B'){

//}else if(grade === 'C'){

//}else if(grade === 'D'){

//}else if(grade === 'E'){

//}else{
    
//}

//variables & block scope

let age2 = 30;

if(true){
    let age2 = 40;
    let name = 'abdoo';
    console.log('inside 1st code block ', age2, name);

    if(true){
        let age2 = 50;
        console.log('inside the 2nd code block: ', age2);
    }
}

console.log('outside code block ', age2, name);