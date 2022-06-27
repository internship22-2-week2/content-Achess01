import fs from "fs";

export class Data {
  constructor(path) {
    this._path = path;
  }

  readJsonFile() {
    let contentFile = fs.readFileSync(this._path, "utf-8");
    if (contentFile) {
      return JSON.parse(contentFile);
    }
    return { descripcion: "Ordenes", ordenes: [] };
  }

  writeJsonFile(data) {
    let strData = JSON.stringify(data, null, 2);
    fs.writeFileSync(this._path, strData);
  }

  getAll() {
    return this.readJsonFile();
  }

  save(order) {
    let data = this.readJsonFile();
    data.ordenes.push(order);
    this.writeJsonFile(data);
  }

  delete(id) {
    let data = this.readJsonFile();
    let newData = data.ordenes.filter((order) => order._id !== id);
    data.ordenes = newData;
    this.writeJsonFile(data);
  }

  /* update(id) {
    let data = this.readJsonFile();
    //Edit
    this.writeJsonFile(data);
  } */
}
