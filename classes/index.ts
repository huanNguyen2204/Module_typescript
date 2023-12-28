class MyClass {
  // private myField: number;
  // protected protectedField: number;
  // public publicField: number;

  constructor(
    private myField: number,
    protected protectedField: number,
    public publicField: number
  ) {}
}

class MyClass2 {
  private _myField: number;

  get myField(): number {
    return this._myField;
  }

  set myField(value: number) {
    this._myField = value * 2;
  }

  constructor(value: number) {
    this._myField = value;
  }
}

class Person {
  constructor(public name: string) {}
}

class Animal {
  constructor(private name: string, private sound: string) {}

  makeSound(): void {
    console.log(`${this.name} is making a ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "barking");
  }
}

const bugsy = new Dog("Bugsy");
bugsy.makeSound();

abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  private sideLength: number;

  constructor(sideLength: number) {
    super();
    this.sideLength = sideLength;
  }

  getArea(): number {
    return this.sideLength * this.sideLength;
  }
}

const square = new Square(10);
console.log(square.getArea());

interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

class MyClass3 implements Printable, Loggable {
  print(): void {
    console.log("Printing");
  }

  log(): void {
    console.log("Logging...");
  }
}

// class MyClass4 {
//   private static _internalField: string = "";
//   static get value() {
//     return MyClass._internalField;
//   }
//   static set value(value: string) {
//     MyClass._internalField = value;
//   }
//   static getFormattedValue() {
//     return MyClass.value.toUpperCase();
//   }
// }
