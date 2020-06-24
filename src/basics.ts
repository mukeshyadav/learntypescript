/**
 * Typescript, all number are floating point,
 * its supports decimal, hexadecimal, octal and binary literal
 * @type {number}
 */
export let varNum: number = 1;

/**
 * Typescript, follows the same syntax as Javascript
 * @type {string}
 */
export let varString: string = "Mukesh";

/**
 * Boolean values function just like they do in Javascript
 * @type {boolean}
 */
export let varTrue: boolean = true;

/**
 * In Typescript, arrays are a collection of same object
 * Array can be declared in two way with datatype follow by []
 * or the standard approach with Array<elemType>
 * Also can declare array with multiple types using | operator or
 * create multidimensional array to save one into another using []
 * @type {Array.<number>}
 */
export let varArray: Array<number> = [1, 2, 3];
export let varArrayMix: (Date | string[])[] = [
  new Date(),
  new Date(),
  ["1", "abc"]
];

/**
 * In Typescript, Tuple are like arrays, but there we can define type of data at each index
 * @type {tuple}
 */

export let varNumberTuple: [number, number, number] = [1, 2, 3];

/**
 * Void, is subtype of undefine. It is return type that is substituted with different types
 * when needed.
 */

/**
 * Function, in Typescript declare same way as javascript, with type annotation
 * @param {string} [person] - someone name
 */
export function funcGreet(person: string) {
  return `Hellow, ${person}`;
}
