import ColaVisitor from './generated/ColaVisitor.js';

export default class ColaTranslatorImpl extends ColaVisitor {

    constructor() {
        super();

        this.codigo = [];
    }

    visitPrograma(ctx) {

        this.codigo.push('let cola = [];');

        this.visit(ctx.comandos());

        return this.codigo.join('\n');
    }

    visitComandos(ctx) {

        for (let op of ctx.operacion()) {
            this.visit(op);
        }
    }

    visitCrear(ctx) {

        const lista = ctx.lista().getText();

        this.codigo.push(`cola = ${lista};`);
    }

    visitEncolar(ctx) {

        const valor = ctx.valor().getText();

        this.codigo.push(`cola.push(${valor});`);
    }

    visitDesencolar(ctx) {

        this.codigo.push('cola.shift();');
    }

    visitVerPrimero(ctx) {

        this.codigo.push('console.log(cola[0]);');
    }
}