function Carro(cor, velocMaxima) {
    // Criando os atributos
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;
    // Criando um método
    
}

// Criando um Prototype

Carro.prototype = {
    acelerar = function () {
        this.velocAtual += 10;
    }
}