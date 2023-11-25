const para = document.querySelector('div.error');

console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras);

const errors = document.querySelectorAll('.error');
console.log(errors);

// get an element by ID
const titles = document.getElementById('page-title');
console.log(titles);

// get elements by their class name 
const error2 = document.getElementsByClassName('error');
console.log(error2);
console.log(error2[0]);

// get elements by their tag name
const paras1 = document.getElementsByTagName('p');
console.log(paras1);

// Changing  the html content
const parag = document.querySelector('p');
//console.log(parag.innerText);

parag.innerText = 'Hello, motherfucker';

paras2 = document.querySelectorAll('p');

paras2.forEach(parag1 => {
    console.log(parag1.innerText);
    parag1.innerText += ' new text';
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.xhamster.com');
link.innerText = 'Go watch porn and get of my ass';
link.setAttribute('style', 'color: black');

// Changing CSS Styles

const title = document.querySelector('h2');
console.log(title.style.color);
title.style.margin = '20px';
title.style.fontSize = '35px';

//Adding and Removing Classes

const content1 = document.querySelector('p');
console.log(content1.classList);
content1.classList.add('error');
content1.classList.toggle('nigger');
content1.classList.toggle('nigger');