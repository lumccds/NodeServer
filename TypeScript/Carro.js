"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (outraPlaca) {
        this.placa = outraPlaca;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (outraCor) {
        this.cor = outraCor;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (outroAno) {
        if (outroAno < 1990 || outroAno > 2100) {
            console.log("O valor para o ano do carro eh invalido!");
        }
        else {
            this.ano = outroAno;
        }
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (outroModelo) {
        this.modelo = outroModelo;
    };
    Carro.prototype.andar = function () {
        console.log("O carro " + this.modelo + " de placa " + this.placa + " do ano " + this.ano + " est\u00E1 andando.");
    };
    Carro.prototype.parar = function () {
        console.log("O carro " + this.modelo + " de cor " + this.cor + " parou.");
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
        if (this.ligado == true) {
            this.andar();
        }
        else {
            console.log("O carro " + this.modelo + " n\u00E3o liga.");
        }
    };
    Carro.prototype.desligar = function () {
        console.log("O carro " + this.modelo + " esta desligado.");
    };
    return Carro;
}());
exports.Carro = Carro;
