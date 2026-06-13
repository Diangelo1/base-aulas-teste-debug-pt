class Service {
    Somar(num1, num2) {
        
        if (num1, num2){
            return num1 + num2;
        }

        /*else if (num2 < 0){
            return num1 + (num2);
        }*/
        
    }

    Subtrair(num1, num2) {
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        return num1 * num2;
    }

    Dividir(num1, num2) {
        return num1 / num2;
    }

    Potenciar(num1, num2) {
        return num1 ** num2;
    }

    Radiciar(num1, num2) {
        return num1 **(1 / num2);
    }
}

export default new Service()