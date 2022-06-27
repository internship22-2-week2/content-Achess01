import fs from "fs";

export class Data {
  constructor() {
    this._path = `./data.json`;
  }

  readJsonFile() {
    let contentFile = fs.readFileSync(this._path, "utf-8");
    if (contentFile) {
      return JSON.parse(contentFile);
    }
    return [];
  }

  writeJsonFile(data) {
    let strData = JSON.stringify(data, null, "");
    fs.writeFileSync(this._path, strData);
  }

  getAll() {
    return this.readJsonFile();
  }

  save(person) {
    let data = this.readJsonFile();
    data.push(person);
    this.writeJsonFile(data);
  }

  delete(name) {
    let data = this.readJsonFile();
    let newData = data.filter((p) => p._name !== name);
    this.writeJsonFile(newData);
  }

  update(name, { age, address }) {
    let data = this.readJsonFile();
    data.forEach((person) => {
      if (person._name === name) {
        if (age) person._age = age;
        if (address) person._address = address;
      }
    });
    this.writeJsonFile(data);
  }
}
