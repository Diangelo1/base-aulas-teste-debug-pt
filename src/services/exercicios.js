class Service {

    ValidarValores(num1, num2) {

        if (num1 === undefined || num1 === null || num1 === "") {
            throw new Error("Informe todos os valores");
        }

        if (num2 === undefined || num2 === null || num2 === "") {
            throw new Error("Informe todos os valores");
        }


        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Informe somente números");
        }
    }


    Somar(num1, num2) {

        this.ValidarValores(num1, num2);

        return Number(num1) + Number(num2);
    }


    Subtrair(num1, num2) {

        this.ValidarValores(num1, num2);

        return Number(num1) - Number(num2);
    }


    Multiplicar(num1, num2) {

        this.ValidarValores(num1, num2);

        return Number(num1) * Number(num2);
    }


    Dividir(num1, num2) {

        this.ValidarValores(num1, num2);


        if (Number(num2) === 0) {
            throw new Error("Não é permitido divisão por zero");
        }


        return Number(num1) / Number(num2);
    }


    Potenciar(num1, num2) {

        this.ValidarValores(num1, num2);

        return Number(num1) ** Number(num2);
    }


    Radiciar(num1, num2) {

        this.ValidarValores(num1, num2);


        if (Number(num2) <= 0) {
            throw new Error("Índice da raiz inválido");
        }


        if (Number(num1) < 0 && Number(num2) % 2 !== 0) {

            return -((-Number(num1)) ** (1 / Number(num2)));

        }


        return Number(num1) ** (1 / Number(num2));
    }

}


export default new Service();