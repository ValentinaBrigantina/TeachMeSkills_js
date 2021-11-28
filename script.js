"use strict"

        let user = {
            name: prompt('Ваше имя'),
            surname: prompt('Ваша фамилия'),
            age: Number(prompt('Сколько вам лет?')),
            city: prompt('Город, в котором вы проживаете'),
            isDriver: confirm('У вас есть водительское удостоверение?'),
        };

        console.log(`Привет, меня зовут ${user.name} ${user.surname}, мне ${user.age}лет, я живу в городе ${user.city}. ${user.isDriver ? 'Я вожу машину.' : 'Я не вожу машину.'}`)