import { expect } from "chai";
import Calculadora from "../src/calculadora.js";

describe("Calculadora", () => {

  describe("Método soma", () => {
    it("Deve somar 5 e 8 resultando em 13", () => {
      const resultado = Calculadora.soma(5, 8);
      expect(resultado).to.equal(13);
    });
  });

  describe("Método subtração", () => {
    it("Deve subtrair 5 de 8 resultando em 3", () => {
      const resultado = Calculadora.subtracao(8, 5);
      expect(resultado).to.equal(3);
    });
  });

  describe("Método multiplicação", () => {
    it("Deve multiplicar 5 por 8 resultando em 40", () => {
      const resultado = Calculadora.multiplicacao(5, 8);
      expect(resultado).to.equal(40);
    });
  });

  describe("Método divisão", () => {
    it("Deve dividir 40 por 8 resultando em 5", () => {
      const resultado = Calculadora.divisao(40, 8);
      expect(resultado).to.equal(5);
    });

    it("Deve lançar erro ao dividir por zero", () => {
      expect(() => Calculadora.divisao(40, 0)).to.throw("não é permitido divisões por zero");
    });
  });

  describe("Método módulo", () => {
    it("Deve calcular o módulo de 10 por 3 resultando em 1", () => {
      const resultado = Calculadora.modulo(10, 3);
      expect(resultado).to.equal(1);
    });

    it("Deve lançar erro ao calcular o módulo por zero", () => {
      expect(() => Calculadora.modulo(10, 0)).to.throw("não é permitido divisões por zero");
    });
  });

  describe("Método fatorial", () => {
    it("Deve calcular o fatorial de 5 resultando em 120", () => {
      const resultado = Calculadora.fatorial(5);
      expect(resultado).to.equal(120);
    });

    it("Deve lançar erro ao calcular o fatorial de número negativo", () => {
      expect(() => Calculadora.fatorial(-1)).to.throw("não é permitido calcular o fatorial de um número negativo");
    });
  });

});

