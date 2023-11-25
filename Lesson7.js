const scores = [20, 10, 45, 50, 15, 5, 0,];

const users = [
    {name: 'Hamdoun', premium: true},
    {name: 'Frabish Nigger', premium: false},
    {name: 'Khofo', premium: false},
    {name: 'Conor', premium: true}
];

const premiumUsers = users.filter(user => {
    return user.premium;
});
console.log(premiumUsers);