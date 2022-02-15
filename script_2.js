'use strict'

window.onload = function() {
    const germanCarsString = '[{"car":"BMW","model":"5-series e39"},{"car":"Volkswagen","model":"Golf MK 3"}]'
    const japanCarsString = '[{"car":"Honda","model":"Civic (5G)"},{"car":"Nissan","model":"Silvia (S14)"}]'
    
    localStorage.setItem('germanCars', germanCarsString)
    localStorage.setItem('japanCars', japanCarsString)

    const germanCarsArr = JSON.parse(localStorage.getItem('germanCars'))
    const japanCarsArr = JSON.parse(localStorage.getItem('japanCars'))

    germanCarsArr.forEach(car => {
        const listGermanCars = document.querySelector('.germanCars')
        let itemList = document.createElement('li')
        itemList.innerHTML = `Car: <b>${car.car}</b>, model: <b>${car.model}</b>`
        listGermanCars.append(itemList)
    })

    japanCarsArr.forEach(car => {
        const listJapanCars = document.querySelector('.japanCars')
        let itemList = document.createElement('li')
        itemList.innerHTML = `Car: <b>${car.car}</b>, model: <b>${car.model}</b>`
        listJapanCars.append(itemList)
    })
}