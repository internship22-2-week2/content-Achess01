import { Student, Teacher } from "./entity/Person.js";
import { Data } from "./entity/Data.js";

class Register {
  constructor() {
    this._data = new Data();
  }
  register(person) {
    let newPerson = null;
    if (person.grade) {
      newPerson = new Student(person);
    } else if (person.course) {
      newPerson = new Teacher(person);
    }
    this.greeting(newPerson);
    this._data.save(newPerson);
  }

  greeting(instance) {
    instance.greet();
  }

  showData() {
    let data = this._data.getAll();
    console.table(data);
  }

  delete(name) {
    this._data.delete(name);
  }

  update(name, person = {}) {
    this._data.update(name, person);
  }
}

let student1 = {
  name: "John",
  age: 20,
  address: "123 Main St",
  grade: "A",
};

let teacher1 = {
  name: "Jane",
  age: 30,
  address: "456 Main St",
  course: "Math",
};

const registerPerson = new Register();
//registerPerson.register(teacher1);
//registerPerson.delete("Jane");
registerPerson.update("Jane", { age: 32 });
registerPerson.update("John");
registerPerson.showData();
