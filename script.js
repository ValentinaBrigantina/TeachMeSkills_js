'use strict'

window.onload = function() {
    const users = [
        {name: 'Ivan', age: 18},
        {name: 'Petr', age: 12},
        {name: 'Sidor', age: 25},
        {name: 'Pavel', age: 16},
        {name: 'Sasha', age: 29},
    ]

    for(let user of users) {
        let div = document.createElement('div');
        div.classList.add('fieldInfo')
        div.innerHTML = `<p>Имя: ${user.name}, возраст: ${user.age} лет.</p>`
        document.body.append(div)
    }

    const btnAddNewUser = document.querySelector('.btnAddNewUser')

    const inputName = document.createElement('input')
    inputName.classList.add('inputName')
    inputName.type = 'text'
    inputName.placeholder = 'Введите имя'
    
    const inputAge = document.createElement('input')
    inputAge.classList.add('inputAge')
    inputAge.type = 'number'
    inputAge.placeholder = 'Введите возраст'

    const btnConfirm = document.createElement('button')
    btnConfirm.classList.add('btnConfirm')
    btnConfirm.innerHTML = 'Готово!'

    const warningMessage = document.createElement('div');
    warningMessage.classList.add('warningMessage')
    warningMessage.innerHTML = '<p><b>Все поля должны быть заполнены!</b></p>'


    const addNewUser = () => {
        btnAddNewUser.after(inputName)
        inputName.after(inputAge)
        inputAge.after(btnConfirm)
    }

    const saveNewUser = () => {
        const userName = inputName.value
        const userAge = inputAge.value

        if (userName === '' || userAge === '') {
            btnConfirm.after(warningMessage)
        } else {
            users.push({name: userName, age: userAge})
            let div = document.createElement('div');
            div.classList.add('fieldInfo')
            div.innerHTML = `<p>Имя: ${userName}, возраст: ${userAge} лет.</p>`
            document.body.append(div)

            inputName.value = ''
            inputName.remove()
            inputAge.value = ''
            inputAge.remove()
            btnConfirm.remove()
            warningMessage.remove()
        } 
    }

    btnAddNewUser.addEventListener('click', addNewUser);
    btnConfirm.addEventListener('click', saveNewUser); 
}
