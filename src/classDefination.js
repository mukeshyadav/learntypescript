"use strict";
/**
 * TypeScript: Class Definition
 * @namespace Vehicle
 * @constructor
 * @param {number} wheels - Number of wheels.
 * @paran {number} power - Power of the vehicle.
 * @param {number} speed - Speed of the vehicle.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function() {
  function Vehicle(wheels, power) {
    this.speed = 0;
    this.wheels = wheels;
    this.power = power;
  }
  Vehicle.prototype.accelerate = function(time) {
    this.speed = this.speed + 0.5 * this.power * time;
  };
  return Vehicle;
})();
exports.default = Vehicle;
