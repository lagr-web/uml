// src/Ownership.js

class Ownership {
    constructor() {

      this.ownerships = new Map(); // Map to store Person as key and their Cars as value (Array of Cars)

    }
  
    // Method to add a car to a person
    addCarToPerson(car, person) {

      if (!this.ownerships.has(person)) {
        this.ownerships.set(person, []);
      }

      this.ownerships.get(person).push(car);
    }
  
    // Method to list all cars owned by a specific person
    listOwnedCars(person) {

      if (this.ownerships.has(person)) {
        return this.ownerships.get(person)
          .map(car => car.getInfo())
          .join("\n");
      }
      
      return `${person.name} owns no cars.`;
    }
    
  }
  
  export default Ownership;
  