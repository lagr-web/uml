//src/app.js

import Car from "./Car";
import Person from "./Person";
import Ownership from "./OwnerShip";

import "../css/style.scss";

// **  IIFE: Immediately Invoked Function Expression  */

( () => {

 const person = new Person('Alice', 30);
 const car1 = new Car('Toyota', 'Corolla', 2020);
 const car2 = new Car('Honda', 'Civic', 2021);

 //console.log ( car1.getInfo() );


 //person.addCar(car1);
 //person.addCar(car2);

 //console.log(person.listCars());

 const ownership = new Ownership();

 // Add cars to person through Ownership
 ownership.addCarToPerson(car1, person);
 ownership.addCarToPerson(car2, person);

 console.log(ownership.listOwnedCars(person));


})();
