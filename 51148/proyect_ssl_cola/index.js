import fs from 'fs';
import antlr4 from 'antlr4';

import ColaLexer from './generated/ColaLexer.js';
import ColaParser from './generated/ColaParser.js';

import ColaVisitorImpl from './ColaVisitorImpl.js';
import ColaTranslatorImpl from './ColaTranslatorImpl.js';

// ═══════════════════════════════════════════════════
// TP: Sintaxis y Semántica de los Lenguajes
// Alumno: Lucas Agustín Videla
// Analizador de lenguaje de colas con ANTLR4 + JS
// ═══════════════════════════════════════════════════

// 1. Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');

// 2. Crear stream de caracteres
const chars = new antlr4.InputStream(input);

// 3. Crear lexer
const lexer = new ColaLexer(chars);

// 4. Crear stream de tokens
const tokens = new antlr4.CommonTokenStream(lexer);

// 5. Crear parser
const parser = new ColaParser(tokens);

parser.buildParseTrees = true;

// ═══════════════════════════════════════════════════
// MANEJO DE ERRORES
// ═══════════════════════════════════════════════════

const erroresLexicos = [];
const erroresSintacticos = [];

// Listener de errores léxicos
lexer.removeErrorListeners();

lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {

        erroresLexicos.push({
            linea: line,
            columna: column,
            mensaje: msg
        });
    }
});

// Listener de errores sintácticos
parser.removeErrorListeners();

parser.addErrorListener({

    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {

        erroresSintacticos.push({
            linea: line,
            columna: column,
            mensaje: msg
        });
    },

    reportAmbiguity: () => {},

    reportAttemptingFullContext: () => {},

    reportContextSensitivity: () => {}
});

// ═══════════════════════════════════════════════════
// TABLA DE TOKENS
// ═══════════════════════════════════════════════════

console.log('════════════════════════════════════════════════');
console.log('          TABLA DE LEXEMAS Y TOKENS'          );
console.log('════════════════════════════════════════════════');

lexer.reset();

const allTokens = lexer.getAllTokens();

allTokens.forEach(token => {

    // Ignorar EOF
    if (token.type === antlr4.Token.EOF) {
        return;
    }

    // Obtener nombre del token
    const nombreToken =
        ColaParser.symbolicNames[token.type] ||
        ColaParser.literalNames[token.type] ||
        "TOKEN_DESCONOCIDO";

    console.log(`|Lexema: ${token.text.padEnd(15)}|Token: ${nombreToken.padEnd(15)}|`);
});

console.log();

// Reiniciar lexer luego de consumir tokens
lexer.reset();

const tokenStream = new antlr4.CommonTokenStream(lexer);

const parserFinal = new ColaParser(tokenStream);

parserFinal.buildParseTrees = true;

// ═══════════════════════════════════════════════════
// CONSTRUCCIÓN DEL ÁRBOL
// ═══════════════════════════════════════════════════

const tree = parserFinal.programa();

// ═══════════════════════════════════════════════════
// REPORTE DE ERRORES
// ═══════════════════════════════════════════════════

const totalErrores =
    erroresLexicos.length + erroresSintacticos.length;

console.log('═══════════════════════════════════════════════════');
console.log('          ANÁLISIS DEL CÓDIGO FUENTE');
console.log('═══════════════════════════════════════════════════');

if (totalErrores === 0) {

    console.log('✅ EL CÓDIGO ES CORRECTO');
    console.log('No se encontraron errores.');
    console.log();

} else {

    console.log(`❌ SE ENCONTRARON ${totalErrores} ERROR(ES)\n`);

    // Errores léxicos
    if (erroresLexicos.length > 0) {

        console.log('🔤 ERRORES LÉXICOS');
        console.log('------------------------------------------------');

        erroresLexicos.forEach((e, i) => {

            console.log(
                `${i + 1}) Línea ${e.linea}, columna ${e.columna}`
            );

            console.log(`   → ${e.mensaje}`);
        });

        console.log();
    }

    // Errores sintácticos
    if (erroresSintacticos.length > 0) {

        console.log('📝 ERRORES SINTÁCTICOS');
        console.log('------------------------------------------------');

        erroresSintacticos.forEach((e, i) => {

            console.log(
                `${i + 1}) Línea ${e.linea}, columna ${e.columna}`
            );

            console.log(`   → ${e.mensaje}`);
        });

        console.log();
    }

    console.log('⛔ El programa no puede ejecutarse.');
    process.exit(1);
}

// ═══════════════════════════════════════════════════
// ÁRBOL SINTÁCTICO
// ═══════════════════════════════════════════════════

console.log('═══════════════════════════════════════════════════');
console.log('              ÁRBOL SINTÁCTICO');
console.log('═══════════════════════════════════════════════════');

console.log(
    tree.toStringTree(parserFinal.ruleNames)
);

console.log();

// ═══════════════════════════════════════════════════
// TRADUCCIÓN A JAVASCRIPT
// ═══════════════════════════════════════════════════

console.log('═══════════════════════════════════════════════════');
console.log('         TRADUCCIÓN A JAVASCRIPT');
console.log('═══════════════════════════════════════════════════');

const translator = new ColaTranslatorImpl();

const codigoJS = translator.visit(tree);

console.log(codigoJS);

console.log();

// ═══════════════════════════════════════════════════
// EJECUCIÓN DEL PROGRAMA
// ═══════════════════════════════════════════════════

console.log('═══════════════════════════════════════════════════');
console.log('          EJECUCIÓN DEL PROGRAMA');
console.log('═══════════════════════════════════════════════════');

const visitor = new ColaVisitorImpl();

try {

    visitor.visit(tree);

    console.log();
    console.log('═══════════════════════════════════════════════════');
    console.log('              ESTADO FINAL DE LA COLA');
    console.log('═══════════════════════════════════════════════════');

    console.log(visitor.cola);

    console.log();
    console.log('✅ Programa ejecutado correctamente.');

} catch (err) {

    console.log();

    console.error('═══════════════════════════════════════════════════');
    console.error('⚠️ ERROR EN TIEMPO DE EJECUCIÓN');
    console.error('═══════════════════════════════════════════════════');

    console.error(err.message);

    process.exit(1);
}