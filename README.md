# 🧮 Calculadora Inteligente em JavaScript

![Node.js Version](https://img.shields.io/badge/Node.js-v18.17.0-green)
![Mocha Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Testes](https://github.com/seu-usuario/seu-repositorio/actions/workflows/node.js.yml/badge.svg)

Projeto desenvolvido durante o estágio na Compass UOL, com foco em lógica de programação, testes automatizados e boas práticas de desenvolvimento.  
Esta calculadora realiza operações matemáticas básicas e avançadas, com testes automatizados usando Mocha e Chai.

---

## 📁 Estrutura de Diretórios

- **Diretório: `src`**  
  Contém o código principal da calculadora, com funções matemáticas organizadas em módulos.

- **Diretório: `test`**  
  Contém os arquivos de teste automatizado, organizados por funcionalidade.

- **Arquivo: `calculadora.test.js`**  
  Contém os testes unitários das funções da calculadora.

- **Arquivo: `package.json`**  
  Contém as dependências e scripts de execução do projeto.

---

## 📚 Para quem é este projeto?

Este projeto é ideal para:

- Iniciantes em JavaScript que querem aprender lógica e testes automatizados
- Estudantes que buscam um exemplo prático de aplicação com estrutura profissional

---

## 🧠 Aprendizados aplicados

- Modularização com ES Modules (`import/export`)
- Testes automatizados com Mocha + Chai

---

## 📦 Tecnologias utilizadas

- JavaScript (ES6+)
- Mocha
- Chai

---

# 🧰 Guia de Instalação: JavaScript, Mocha, Chai e NYC no seu PC

### 1️⃣ Instalar o Node.js

Caso node ou npm não estejam disponíveis no seu terminal:

- Acesse: https://nodejs.org
- Baixe a versão LTS recomendada
- Instale normalmente e reinicie o terminal

---

### 2️⃣ Clonar ou criar a pasta do projeto

Você pode clonar o repositório original ou criar uma pasta nova:

```bash
git clone xxxxxxxxxxxxxxxxxxxxxxxxxx
cd xxxxxxxxxxxxxxxxxxx
```

Ou, se preferir começar do zero:

```bash
mkdir calculadora-js
cd calculadora-js
```

---

### 3️⃣ Inicializar o projeto Node.js

```bash
npm init -y
```

Isso cria o arquivo `package.json` com configurações básicas.

---

### 4️⃣ Instalar Mocha e Chai

```bash
npm install --save-dev mocha chai
```

Eles serão adicionados como dependências de desenvolvimento.

---

### 5️⃣ Criar estrutura de pastas e arquivos

```bash
mkdir src test public
touch src/calculadora.js test/calculadora.test.js
```

---

### 6️⃣ Configurar script de teste no package.json

Abra o `package.json` e adicione ou edite a seção de scripts:

```json
"scripts": {
  "test": "mocha test/*.js"
}
```

---

### 7️⃣ Rodar os testes

```bash
npm test
```

Se tudo estiver certo, os testes definidos em `calculadora.test.js` serão executados e demonstrado o resultado no terminal.

---

## 🧠 Estrutura e Lógica dos Testes Automatizados

O projeto foi desenvolvido com foco em **modularidade** e **qualidade de software**.  
A lógica está dividida em duas partes principais:

---

### 📦 Estrutura de Código

O arquivo `src/calculadora.js` contém a classe `Calculadora`, que implementa métodos estáticos para operações matemáticas:

- `soma(a, b)`
- `subtracao(a, b)`
- `multiplicacao(a, b)`
- `divisao(a, b)`
- `modulo(a, b)`
- `fatorial(n)`

Cada método retorna o resultado da operação ou lança um erro quando os parâmetros são inválidos (ex: divisão por zero ou fatorial de número negativo).

---

### 🧪 Estrutura dos Testes

O arquivo `test/calculadora.test.js` utiliza **Mocha** como framework de testes e **Chai** como biblioteca de asserções.  
A estrutura segue o padrão:

```js
describe('Calculadora', () => {
  describe('Método soma', () => {
    it('Deve somar 5 e 8 resultando em 13', () => {
      const resultado = Calculadora.soma(5, 8);
      expect(resultado).to.equal(13);
    });
  });
  // ... demais métodos
});
```

Cada método da calculadora possui um bloco `describe`, com testes individuais (`it`) que validam:

- O retorno esperado para entradas válidas
- O lançamento de erros para entradas inválidas (ex: divisão por zero)
- A consistência da lógica matemática

---

## 🧪 Descrição dos Testes Realizados

- **Função soma**  
  - Objetivo: Validar a operação de soma entre dois números.  
  - Verificações: Soma de 5 e 8 resultando em 13.

- **Função subtração**  
  - Objetivo: Validar a operação de subtração.  
  - Verificações: Subtração de 5 de 8 resultando em 3.

- **Função multiplicação**  
  - Objetivo: Validar a multiplicação de dois valores.  
  - Verificações: Multiplicação de 5 por 8 resultando em 40.

- **Função divisão**  
  - Objetivo: Validar a divisão entre dois números.  
  - Verificações: Divisão de 40 por 8 resultando em 5; erro ao dividir por zero.

- **Função módulo**  
  - Objetivo: Validar o cálculo do resto da divisão.  
  - Verificações: Módulo de 10 por 3 resultando em 1; erro ao calcular módulo por zero.

- **Função fatorial**  
  - Objetivo: Validar o cálculo do fatorial de um número.  
  - Verificações: Fatorial de 5 resultando em 120; erro ao calcular fatorial

---

## 🧪 Comandos úteis para testes e desenvolvimento

```bash
npm run test         # Executa os testes com cobertura
npm run dev          # (Se configurado) Inicia ambiente de desenvolvimento
npm run lint         # (Se configurado) Verifica padrões de código
npm run build        # (Se configurado) Gera versão de produção
```
