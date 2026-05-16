import ColaVisitor from './generated/ColaVisitor.js';

export default class ColaVisitorImpl extends ColaVisitor {

    constructor() {
        super();

        this.cola = [];
    }

    visitPrograma(ctx) {

        return this.visit(ctx.comandos());
    }

    visitComandos(ctx) {

        for (let op of ctx.operacion()) {
            this.visit(op);
        }
    }

    visitCrear(ctx) {

        this.cola = [];

        const valores = ctx.lista().valor();

        for (let v of valores) {

            let texto = v.getText();

            // texto
            if (texto.startsWith('"')) {

                texto = texto.slice(1, -1);

            } else {

                // numero
                texto = Number(texto);
            }

            this.cola.push(texto);
        }

        console.log('Cola creada:', this.cola);
    }

    visitEncolar(ctx) {

        let valor = ctx.valor().getText();

        if (valor.startsWith('"')) {

            valor = valor.slice(1, -1);

        } else {

            valor = Number(valor);
        }

        this.cola.push(valor);

        console.log('Elemento encolado:', valor);
    }

    visitDesencolar(ctx) {

        const eliminado = this.cola.shift();

        console.log('Elemento eliminado:', eliminado);
    }

    visitVerPrimero(ctx) {

        console.log('Primer elemento:', this.cola[0]);
    }
}