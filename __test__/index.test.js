import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';


describe("Testes para Função Somar", () => {

    it("Deve somar dois numeros positivos 2 e 1, retornar 3", () => {
        const result = Service.Somar(2, 1);
        expect(result).toBe(3);
    })

    it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2, -1);
        expect(result).toBe(-3);
    })

    it("Deve somar dois numeros, um negativo -2 e um positivo 1, retornar -1", () => {
        const result = Service.Somar(-2, 1);
        expect(result).toBe(-1);
    })

    it("Deve somar dois numeros, um positivo 2 e um negativo -1, retornar 1", () => {
        const result = Service.Somar(2, -1);
        expect(result).toBe(1);
    })
})


describe("Testes parar função sub", () => {

    it("Deve subtrair dois numeros positivos 2 e 1, retornar 1", () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })

})


describe("Testes para a função Div", () => {

    it("Deve dividir dois numeros positivos 2 e 2, retornar 1", () => {
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


describe("Testes para a função Potenciar", () => {


    it("Deve elevar 2 na potência 3 e retornar 8", () => {

        const result = Service.Potenciar(2,3);

        expect(result).toBe(8);

    })


    it("Deve elevar numero negativo -2 na potência 3 e retornar -8", () => {

        const result = Service.Potenciar(-2,3);

        expect(result).toBe(-8);

    })


    it("Deve retornar 1 quando o expoente for zero", () => {

        const result = Service.Potenciar(10,0);

        expect(result).toBe(1);

    })


    it("Deve lançar erro quando não informar valores", () => {

        expect(() => {

            Service.Potenciar(2)

        }).toThrow("Informe todos os valores");

    })


    it("Deve lançar erro quando enviar texto", () => {

        expect(() => {

            Service.Potenciar("a",2)

        }).toThrow("Informe somente números");

    })

})


describe("Testes para a função Radiciar", () => {


    it("Deve calcular raiz quadrada de 25 retornando 5", () => {

        const result = Service.Radiciar(25,2);

        expect(result).toBe(5);

    })


    it("Deve calcular raiz cubica de 27 retornando 3", () => {

        const result = Service.Radiciar(27,3);

        expect(result).toBe(3);

    })


    it("Deve calcular raiz negativa -8 retornando -2", () => {

        const result = Service.Radiciar(-8,3);

        expect(result).toBe(-2);

    })


    it("Deve lançar erro quando índice da raiz for zero", () => {

        expect(() => {

            Service.Radiciar(25,0)

        }).toThrow("Índice da raiz inválido");

    })


    it("Deve lançar erro quando não informar valores", () => {

        expect(() => {

            Service.Radiciar()

        }).toThrow("Informe todos os valores");

    })

})











