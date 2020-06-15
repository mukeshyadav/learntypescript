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
