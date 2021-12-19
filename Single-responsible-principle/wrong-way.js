const mongoose = require("mongoose");

export default class Carro {
  constructor(cor = null, modelo = null, placa = null, id = null) {
    this.id = id;
    this.cor = cor;
    this.modelo = modelo;
    this.placa = placa;
    this.conectarAoMongo();
  }

  conectarAoMongo() {
    mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
  }

  salvar() {
    const CarroSchema = new mongoose.Schema({
      cor: String,
      modelo: String,
      placa: String,
    });
    const CarroModel = mongoose.model("Carro", CarroSchema);
    const carro = new CarroModel({
      cor: this.cor,
      modelo: this.modelo,
      placa: this.placa,
    });
    carro.save();
  }

  buscarPorId(id) {
    const CarroSchema = new mongoose.Schema({
      cor: String,
      modelo: String,
      placa: String,
    });
    const CarroModel = mongoose.model("Carro", CarroSchema);
    return CarroModel.findById(id);
  }
}
