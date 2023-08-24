"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestePh = void 0;
class TestePh {
    constructor(nomeProduto, valorPh, horaTeste, minutoTeste) {
        this.valorPh = 0;
        this.horaTeste = 0;
        this.minutoTeste = 0;
        this.nomeProduto = "";
        this.nomeProduto = nomeProduto;
        this.valorPh = valorPh;
        this.minutoTeste = minutoTeste;
        this.horaTeste = horaTeste;
    }
    get getNomeProduto() {
        return this.nomeProduto;
    }
    set setNomeProduto(nomeProduto) {
        this.nomeProduto = nomeProduto;
    }
    get getValorPh() {
        return this.valorPh;
    }
    set setValorPh(valorPh) {
        this.valorPh = valorPh;
    }
    get getMinutoTeste() {
        return this.minutoTeste;
    }
    set setMinutoTeste(minutoTeste) {
        this.minutoTeste = minutoTeste;
    }
    get getHoraTeste() {
        return this.horaTeste;
    }
    set setHoraTeste(horaTeste) {
        this.horaTeste = horaTeste;
    }
    retornaAcidez() {
        if (this.getValorPh >= 8) {
            return "Ph Alcalino";
        }
        else if (this.valorPh <= 6.99) {
            return "Ph Acido";
        }
        else {
            return "Ph Neutro";
        }
    }
}
exports.TestePh = TestePh;
