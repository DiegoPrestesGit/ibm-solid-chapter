import mongoose from "mongoose";

class Carro {
  cor: String;
  modelo: String;
  id: String;

  constructor(cor: String = null, modelo: String = null, id: String = null) {
    this.id = id;
    this.cor = cor;
    this.modelo = modelo;
  }

  validacao(): void {/*...*/}

  salvar(): void {
    const CarroSchema = new mongoose.Schema({
      cor: String,
      modelo: String,
    });
    const CarroModel = mongoose.model("Carro", CarroSchema);
    const carro = new CarroModel({
      cor: this.cor,
      modelo: this.modelo,
    });
    carro.save();
  }

  carroJaExiste(): void {
    const CarroSchema = new mongoose.Schema({
      cor: String,
      modelo: String,
    });
    const CarroModel = mongoose.model("Carro", CarroSchema);
    return CarroModel.findById(this.id);
  }
}
