//src/Car.js

class Car {

  constructor(make, model, year) {
    this.make = make; // Brand of the car (String)
    this.model = model; // Model of the car (String)
    this.year = year; // Year of manufacture (Number)
    this.speed = 0; // Current speed (Number)
  } // END constructor

  accelerate(amount) {
    this.speed += amount;
  }

  // Method to apply brakes
  brake(amount) {
    this.speed -= amount;
  }

  // Method to display car info
  getInfo() {
    return `${this.year} ${this.make} ${this.model}, Speed: ${this.speed}`;
  }


} // END class

export default Car;
