# Aclaraciones ‼️

El programa se ejecuta desde la terminal utilizando el comando: 'npm start' desde la terminal.
El archivo input.txt ya contiene una entrada válida lista para ejecutar.

---

## Qué hace este programa?

Este proyecto implementa un analizador e intérprete de un lenguaje personalizado de colas utilizando:

ANTLR4
JavaScript
Node.js

El lenguaje permite:

Crear colas
Encolar elementos
Desencolar elementos
Ver el primer elemento de la cola

Además, el programa realiza:

Análisis léxico
Análisis sintáctico
Generación de tabla de tokens
Construcción del árbol sintáctico
Traducción y ejecución en JavaScript

---

### Cómo abrir el repositorio?

Abrir una terminal (puede ser CMD, PowerShell o Git Bash) en tu ordenador.
Despues cloná el repositorio del siguiente modo, en la terminal escribe:
git clone

O bien descargando el archivo, y importarlo a Visual Studio.
una vez dentro, le aparecera la carpeta '51148' que contien cuatro archivos 'input' de ejemplos,
y una carpeta llamada  'proyect_ssl_cola' que es el Analizador.
para acceder a el coloque en la terminal:

 cd .\proyect_ssl_cola\

Una vez dentro del proyecto, ya estaria listo para usar.

---


#### Resultado esperado

Presionamos ctrl + ñ que nos abrira la terminal del VS, en  este apartado se nos mostrará la tabla de lexemas y tokens, arbol de derivación y la traduccion a Java con resultado esperado de la gramatica, para ver esto pondremos el comando 'npm start' y presionamos enter, esta entrada deberia mostrarnos el siguiente resultado:


════════════════════════════════════════════════
          TABLA DE LEXEMAS Y TOKENS
════════════════════════════════════════════════
|Lexema: cola           |Token: COLA           |
|Lexema: MiCola         |Token: ID             |
|Lexema: {              |Token: LLAVEIZQ       |
|Lexema: crear          |Token: CREAR          |
|Lexema: (              |Token: PARIZQ         |
|Lexema: [              |Token: CORIZQ         |
|Lexema: 10             |Token: NUMERO         |
|Lexema: ,              |Token: COMA           |
|Lexema: 20             |Token: NUMERO         |
|Lexema: ,              |Token: COMA           |
|Lexema: 30             |Token: NUMERO         |
|Lexema: ]              |Token: CORDER         |
|Lexema: )              |Token: PARDER         |
|Lexema: !              |Token: ADMIRACION     |
|Lexema: encolar        |Token: ENCOLAR        |
|Lexema: (              |Token: PARIZQ         |
|Lexema: "hola"         |Token: TEXTO          |
|Lexema: )              |Token: PARDER         |
|Lexema: !              |Token: ADMIRACION     |
|Lexema: verPrimero     |Token: VERPRIMERO     |
|Lexema: (              |Token: PARIZQ         |
|Lexema: )              |Token: PARDER         |
|Lexema: !              |Token: ADMIRACION     |
|Lexema: desencolar     |Token: DESENCOLAR     |
|Lexema: (              |Token: PARIZQ         |
|Lexema: )              |Token: PARDER         |
|Lexema: !              |Token: ADMIRACION     |
|Lexema: }              |Token: LLAVEDER       |

═══════════════════════════════════════════════════
          ANÁLISIS DEL CÓDIGO FUENTE
═══════════════════════════════════════════════════
✅ EL CÓDIGO ES CORRECTO
No se encontraron errores.

═══════════════════════════════════════════════════
              ÁRBOL SINTÁCTICO
═══════════════════════════════════════════════════
(programa cola MiCola { (comandos (operacion (crear crear ( (lista [ (valor 10) , (valor 20) , (valor 30) ]) ) !)) (operacion (encolar encolar ( (valor "hola") ) !)) (operacion (verPrimero verPrimero ( ) !)) (operacion (desencolar desencolar ( ) !))) } <EOF>)

═══════════════════════════════════════════════════
         TRADUCCIÓN A JAVASCRIPT
═══════════════════════════════════════════════════
let cola = [];
cola = [10,20,30];
cola.push("hola");
console.log(cola[0]);
cola.shift();

═══════════════════════════════════════════════════
          EJECUCIÓN DEL PROGRAMA
═══════════════════════════════════════════════════
Cola creada: [ 10, 20, 30 ]
Elemento encolado: hola
Primer elemento: 10
Elemento eliminado: 10

═══════════════════════════════════════════════════
              ESTADO FINAL DE LA COLA
═══════════════════════════════════════════════════
[ 20, 30, 'hola' ]

Si este es el output que la consola muestra, esta todo correctamente ejecutado.
Puedes probar los otros inputs realizando los mismos pasos. 

---
