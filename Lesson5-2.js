const article = document.querySelector('article');

//console.log(article.children);
//console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.nextElementSibling);

//Events and eventListener

const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    ul.innerHTML += '<li>fuck a kitty</li>';
});

//const tasks = document.querySelectorAll('li');

//tasks.forEach(task => {
    //task.addEventListener('click', e => {
        //console.log(e);
        //console.log(e.target);
        //e.target.style.textDecoration = 'line-through';
        //e.target.remove();
    //});
//});

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    };
});