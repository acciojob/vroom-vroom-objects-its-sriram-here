// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call Car constructor with this context
  Car.call(this, make, model);

  // Add topSpeed property
  this.topSpeed = topSpeed;
}

// Inherit Car's prototype
SportsCar.prototype = Object.create(Car.prototype);

// Correct the constructor reference
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
