//Submit events

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);
});
//Regular expressions
const name = 'NiggerForLife';
const pattern = /^[a-zA-Z0-9]{6,}$/;

const res = pattern.test(name);
console.log(res);