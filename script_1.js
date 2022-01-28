'use strict'

const getDateAgo = (date, days) => {
    const firstDate = new Date(date)
    const secondDate = new Date(firstDate - days * 24 * 3600 * 1000)
    return `${secondDate.getMonth() + 1}-${secondDate.getDate()}-${secondDate.getFullYear()}`
}

console.log(getDateAgo('03-01-2022', 1))