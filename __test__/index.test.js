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


    it("Deve somar numero negativo e positivo -2 e 1, retornar -1", () => {
        const result = Service.Somar(-2, 1);
        expect(result).toBe(-1);
    })


    it("Deve lançar erro quando não informar valores", () => {

        expect(() => {
            Service.Somar()
        }).toThrow("Informe todos os valores");

    })


    it("Deve lançar erro quando informar texto", () => {

        expect(() => {
            Service.Somar("a",2)
        }).toThrow("Informe somente números");

    })

})



describe("Testes para função Subtrair", () => {


    it("Deve subtrair dois numeros positivos 2 e 1 retornando 1", () => {

        const result = Service.Subtrair(2,1);

        expect(result).toBe(1);

    })


    it("Deve subtrair numeros negativos -2 e -1 retornando -1", () => {

        const result = Service.Subtrair(-2,-1);

        expect(result).toBe(-1);

    })


    it("Deve lançar erro sem valores", () => {

        expect(()=>{

            Service.Subtrair()

        }).toThrow("Informe todos os valores");

    })

})



describe("Testes para função Multiplicar", () => {


    it("Deve multiplicar 2 e 2 retornando 4", () => {

        const result = Service.Multiplicar(2,2);

        expect(result).toBe(4);

    })


    it("Deve multiplicar por zero retornando 0", () => {

        const result = Service.Multiplicar(10,0);

        expect(result).toBe(0);

    })


    it("Deve lançar erro quando não informar valores", () => {

        expect(()=>{

            Service.Multiplicar()

        }).toThrow("Informe todos os valores");

    })

})



describe("Testes para função Dividir", () => {


    it("Deve dividir 2 por 2 retornando 1", () => {

        const result = Service.Dividir(2,2);

        expect(result).toBe(1);

    })


    it("Deve dividir numero negativo retornando negativo", () => {

        const result = Service.Dividir(-10,2);

        expect(result).toBe(-5);

    })


    it("Deve lançar erro divisão por zero", () => {

        expect(()=>{

            Service.Dividir(10,0)

        }).toThrow("Não é permitido divisão por zero");

    })


    it("Deve lançar erro sem valores", () => {

        expect(()=>{

            Service.Dividir()

        }).toThrow("Informe todos os valores");

    })

})



describe("Testes para função Potenciar", () => {


    it("Deve calcular 2 elevado a 3 retornando 8", () => {

        const result = Service.Potenciar(2,3);

        expect(result).toBe(8);

    })


    it("Deve calcular potencia negativa -2 elevado a 3 retornando -8", () => {

        const result = Service.Potenciar(-2,3);

        expect(result).toBe(-8);

    })


    it("Deve retornar 1 quando expoente for zero", () => {

        const result = Service.Potenciar(10,0);

        expect(result).toBe(1);

    })


    it("Deve calcular potencia decimal", () => {

        const result = Service.Potenciar(2.5,2);

        expect(result).toBe(6.25);

    })


    it("Deve lançar erro sem valores", () => {

        expect(()=>{

            Service.Potenciar()

        }).toThrow("Informe todos os valores");

    })


    it("Deve lançar erro com texto", () => {

        expect(()=>{

            Service.Potenciar("a",2)

        }).toThrow("Informe somente números");

    })

})



describe("Testes para função Radiciar", () => {


    it("Deve calcular raiz quadrada de 25 retornando 5", () => {

        const result = Service.Radiciar(25,2);

        expect(result).toBe(5);

    })


    it("Deve calcular raiz cubica de 27 retornando 3", () => {

        const result = Service.Radiciar(27,3);

        expect(result).toBe(3);

    })


    it("Deve calcular raiz quinta de 32 retornando 2", () => {

        const result = Service.Radiciar(32,5);

        expect(result).toBe(2);

    })


    it("Deve retornar raiz negativa -8 raiz cubica", () => {

        const result = Service.Radiciar(-8,3);

        expect(result).toBe(-2);

    })


    it("Deve lançar erro índice da raiz zero", () => {

        expect(()=>{

            Service.Radiciar(25,0)

        }).toThrow("Índice da raiz inválido");

    })


    it("Deve lançar erro sem valores", () => {

        expect(()=>{

            Service.Radiciar()

        }).toThrow("Informe todos os valores");

    })


    it("Deve lançar erro com texto", () => {

        expect(()=>{

            Service.Radiciar("a",2)

        }).toThrow("Informe somente números");

    })

})


