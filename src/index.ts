import Vehicle from "./classDefination";
import {
  varNum,
  varString,
  varArray,
  varArrayMix,
  varNumberTuple,
  varTrue,
  funcGreet
} from "./basics";

import { User, UserAccount } from "./interface";

const myVehicle: Vehicle = new Vehicle(4, 200);
myVehicle.accelerate(20);

/**
 * Variable declaration in Typescript
 */
varNum;
varString;
varArray;
varArrayMix;
varNumberTuple;
varTrue;

funcGreet("Mukesh");
/**
 * Interface
 */

export const user: User = {
  name: "Mukesh",
  id: 1
};

const myUser: User = new UserAccount("Lokesh", 123);
