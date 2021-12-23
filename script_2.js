'use strict'

function HouseBuilder(width, length, numberOfFloors) {
    this.width = width
    this.length = length
    this.numberOfFloors = numberOfFloors
}

const firstHouse = new HouseBuilder(120, 180, 2)
const secondHouse = new HouseBuilder(220, 100, 1)

HouseBuilder.prototype.calcArea = function () {
    const { width, length, numberOfFloors } = this
    this.totalArea = width * length * numberOfFloors
    return this.totalArea
}

console.log(firstHouse.calcArea())
console.log(secondHouse.calcArea())