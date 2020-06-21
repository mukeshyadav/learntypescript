"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classDefination_1 = require("./classDefination");
var myString = "Hello World";
var myVehicle = new classDefination_1.default(4, 200);
myVehicle.accelerate(20);
console.log(myVehicle.speed);
