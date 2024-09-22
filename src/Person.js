//src/Person.js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.cars = []; // A person can own multiple cars
  }

  // Method to add a car to the person’s collection
  addCar(car) {
    this.cars.push(car);
  }

  // Method to list all cars owned by the person
  listCars() {

    return this.cars.map( (car) => car.getInfo() ).join("\n");

  }
}

export default Person;
