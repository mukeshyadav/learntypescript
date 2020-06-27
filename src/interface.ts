/**
 * Interface, a way to define Object shape i n typescript, JavaScript support classes so interface can be used with classes also
 * @type {intergace}
 */

export interface User {
  name: string;
  id: number;
}

export class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
