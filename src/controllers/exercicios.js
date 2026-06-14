import Service from "../services/exercicios.js"

class Controller {

    Somar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Somar(num1, num2)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }

    Subtrair(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Subtrair(num1, num2)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }

    Multiplicar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Multiplicar(num1, num2)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }

    Dividir(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Dividir(num1, num2)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }

    Potenciar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Potenciar(num1, num2)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }

    Radiciar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Radiciar(num1, num2)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }
}

export default new Controller()