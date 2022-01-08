'use strict'

class House {

    constructor(length, width, floors) {
        this.length = length;
        this.width = width;
        this.floors = floors;
    }

    static sortBuyFloors(HouseA, HouseB) {
        return HouseA.floors - HouseB.floors;
    }
}

class Skyscraper extends House {

    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = offices;
    }

}

let firstSkyscraper = new Skyscraper(140, 220, 25, 60);
let secondSkyscraper = new Skyscraper(170, 240, 20, 80);
let thirdSkyscraper = new Skyscraper(120, 290, 26, 30);

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

skyscrapers.sort(House.sortBuyFloors);

console.log(skyscrapers[0]);
console.log(skyscrapers[1]);