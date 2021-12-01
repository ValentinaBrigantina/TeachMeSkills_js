'use string'

const userPetya = {
    name: "Petya",
    transactions: [123, 123213213, -5, -8],
    sum: 10,
}
const userVasya = {
    name: "Vasya",
    transactions: [10, 20, -5, -8],
    sum: 10,
}

/* console.everyUser = function (users, prefix) {
    users.forEach(element => {
        console.log(prefix + element.name)  
    });
} */

console.everyUser = function (users, prefix) {
    for (let i = 0; i < users.length; i++) {
        console.log(prefix + users[i].name)  
    };
}

console.everyUser([userPetya, userVasya], 'Имя пользователя: ')