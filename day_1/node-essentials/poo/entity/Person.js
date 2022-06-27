class Person {
  constructor({ name, age, address }) {
    this._name = name;
    this._age = age;
    this._address = address;
  }
}

export class Student extends Person {
  constructor({ name, age, address, grade }) {
    super({ name, age, address });
    this._grade = grade;
  }
  greet() {
    console.log(`Hola, yo soy ${this._name} y soy un estudiante`);
  }
}

export class Teacher extends Person {
  constructor({ name, age, address, course }) {
    super({ name, age, address });
    this._course = course;
  }
  greet() {
    console.log(`Hola, yo soy ${this._name} y soy un profesor`);
  }
}
