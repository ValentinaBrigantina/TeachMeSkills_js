"use strict"

        let user = {
            name: prompt('Ваше имя'),
            surname: prompt('Ваша фамилия'),
            age: Number(prompt('Сколько вам лет?')),
            city: prompt('Город, в котором вы проживаете'),
            isDriver: confirm('У вас есть водительское удостоверение?'),
        };

        function correctAge() {
            const ageAsStr = String(user.age);
            if (user.age >= 10 && user.age <= 20) {
                return `${user.age} лет`; 
            }

            if (ageAsStr.endsWith('1')) {
                return `${user.age} год`;
            }

            else if (ageAsStr.endsWith('2')) {
                return `${user.age} года`;
            }

            else if (ageAsStr.endsWith('3')) {
                return `${user.age} года`;
            }

            else if (ageAsStr.endsWith('4')) {
                return `${user.age} года`;
            }

            return `${user.age} лет`; 
        };

        function NotIsDriver() {
            if (!user.isDriver) {
                return `не `;
            }

            return '';
        }

        console.log (`Привет, меня зовут ${user.name} ${user.surname}, мне ${correctAge()}. Я живу в городе ${user.city}. Я ${NotIsDriver()}вожу машину`);