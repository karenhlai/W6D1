// Function.prototype.inherits = function(parent) {
//   let child = this;
//   let Surrogate = function() {};
//   Surrogate.prototype = parent.prototype;
//   child.prototype = new Surrogate();
//   child.prototype.constructor = child;
// }

function MovingObject(name) {
  this.name = name;
};

MovingObject.prototype.sayName = function() {
  console.log(`Hi, my name is ${this.name}`);
};

function Ship(name, numWings) { 
  MovingObject.call(this, name);
  this.numWings = numWings;
}
// Ship.inherits(MovingObject);

function Asteroid(name, craters) { 
  MovingObject.call(this, name);
  this.craters = craters;

  Asteroid.prototype = Object.create(MovingObject.prototype);
  Asteroid.prototype.constructor = Asteroid;
}
// Asteroid.inherits(MovingObject);