import Vehicle from "./classDefination";

const myVehicle: Vehicle = new Vehicle(4, 200);
myVehicle.accelerate(20);

/**
 * Typescript, all number are floating point,
 * its supports decimal, hexadecimal, octal and binary literal
 * @type {number}
 */
let varNum: number = 1;

/**
 * Typescript, follows the same syntax as Javascript
 * @type {string}
 */
let varString: string = "Mukesh";

/**
 * Boolean values function just like they do in Javascript
 * @type {boolean}
 */
let varTrue: boolean = true;

/**
 * In Typescript, arrays are a collection of same object
 * Array can be declared in two way with datatype follow by []
 * or the standard approach with Array<elemType>
 * Also can declare array with multiple types using | operator or
 * create multidimensional array to save one into another using []
 * @type {Array.<number>}
 */
let varArray: Array<number> = [1, 2, 3];
let varArrayMix: (Date | string[])[] = [new Date(), new Date(), ["1", "abc"]];
