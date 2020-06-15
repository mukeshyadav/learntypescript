import Vehicle from "./classDefination";
const myString: string = "Hello World";

const myVehicle: Vehicle = new Vehicle(4, 200);
myVehicle.accelerate(20);
console.log(myVehicle.speed);
