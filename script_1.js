'use strict'

async function sendRequest(method, url, body) {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        if(response.ok) {
            const data = await response.json()
            console.log(data)
        } else {
            console.log('Ошибка HTTP: ' + response.status)
        }

    } catch(error) {
        console.log(error)
    }
}

const url = 'https://jsonplaceholder.typicode.com/users'
const urlUserId2 = `${url}/2`
const newUser = {
    name: 'Petya',
    username: 'Ivanov',
    email: 'mail.com',
}

sendRequest('GET', urlUserId2)

sendRequest('POST', url, newUser)

sendRequest('PUT', urlUserId2, newUser)

sendRequest('PATCH', urlUserId2, {name: 'Vasya'})

sendRequest('DELETE', urlUserId2)