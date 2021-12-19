import mongoose from 'mongoose';

class Carro {
    cor: String;
    modelo: String;
    placa: String;
    id: String;

    constructor(cor: String, modelo: String, placa: String, id: String) {
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.id = id;
    }
}

const CarroSchema = new mongoose.Schema({
      cor: String,
      modelo: String,
});

class CarroService {
    salvar(carro: Carro) {
        CarroSchema(carro).save();
    }


    buscarPorId(id: String) {
        const carro = CarroSchema.findById(id);
        return carro;
    }
}