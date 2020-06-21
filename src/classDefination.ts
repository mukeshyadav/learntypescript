/**
 * TypeScript: Class Definition
 * @namespace Vehicle
 * @constructor
 * @param {number} wheels - Number of wheels.
 * @paran {number} power - Power of the vehicle.
 * @param {number} speed - Speed of the vehicle.
 */

class Vehicle {
  wheels: number;
  power: number;
  speed: number = 0;

  constructor(wheels: number, power: number) {
    this.wheels = wheels;
    this.power = power;
  }

  accelerate(time: number): void {
    this.speed = this.speed + 0.5 * this.power * time;
  }
}
export default Vehicle;
