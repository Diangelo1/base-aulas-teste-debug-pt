import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';

describe("Testes para Função Somar", () => {

    it("Deve somar dois numeros positivos 2 e 1, retornar 3", () => {
        const result = Service.Somar(2, 1);
        expect(result).toBe(3);
    })
    it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2, -1);
        expect(result).toBe(-4);
    })
    it("Deve somar dois numeros, um negativo -2 e um positivo 1, retornar -1", () => {
        const result = Service.Somar(-2, 1);
        expect(result).toBe(-2);
    })
    it("Deve somar dois numeros, um positivo 2 e um negativo -1, retornar 1", () => {
        const result = Service.Somar(2, -1);
        expect(result).toBe(2);
    })
})

describe("Testes parar função sub", () =>{

    it("Deve subtrair dois numeros positivos 2 e 1, retornar 1", () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })
})

describe("Testes para a função Div", () => {

    it("Deve dividir dois numeros positvos, 2 e 2, retornar 1", () => {
        const result = Service.Dividir(2, 2);
        expect(result).toBe(1);
    })
})

describe("Testes para a função multiplicar", () => {

    it("Deve multiplicar dois numero positivos 2 e 2, retornar 4", () => {
        const result = Service.Multiplicar(2, 2);
        expect(result).toBe(4);
    })
})

describe("Testes para a função potenciar", () => {

    it("", () => {
        const result = Service.Multiplicar(2, 2);
        expect(result).toBe(4);
    })
})



















/*describe('Teste do primeiro exercício', () => {
    //executando antes de TODOS  os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    //executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should sum two numbers', () => {
        const result = exercicio1(1, 2)

        expect(result).toBe(3);
    });
})*/