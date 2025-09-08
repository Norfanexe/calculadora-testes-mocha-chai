// Exporta a classe Calculadora para uso em outros módulos
export default class Calculadora {
    
  static soma(a, b) {
    return a + b;
  }

  static subtracao(a, b) {
    return a - b;
  }

  static multiplicacao(a, b) {
    return a * b;
  }

  static divisao(a, b) {
    if (b === 0) {
      throw new Error("não é permitido divisões por zero");
    }
    return a / b;
  }

  static modulo(a, b) {
    if (b === 0) {
      throw new Error("não é permitido divisões por zero");
    }
    return a % b; // Refatorado para usar operador nativo
  }

  static fatorial(n) {
    if (n < 0) {
      throw new Error("não é permitido calcular o fatorial de um número negativo");
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

