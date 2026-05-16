grammar Cola;

//----REGLAS DEL PARSER----\\            

programa
    : COLA ID LLAVEIZQ comandos LLAVEDER EOF
    ;

comandos
    : operacion*
    ;

operacion
    : crear
    | encolar
    | desencolar
    | verPrimero
    ;

crear
    : CREAR PARIZQ lista PARDER ADMIRACION
    ;

encolar
    : ENCOLAR PARIZQ valor PARDER ADMIRACION
    ;

desencolar
    : DESENCOLAR PARIZQ PARDER ADMIRACION
    ;

verPrimero
    : VERPRIMERO PARIZQ PARDER ADMIRACION
    ;

valor
    : NUMERO
    | TEXTO
    ;

lista
    : CORIZQ (valor (COMA valor)*)? CORDER
    ;


//----REGLAS DEL LEXER----\\


COLA : 'cola';
CREAR : 'crear';
ENCOLAR : 'encolar';
DESENCOLAR : 'desencolar';
VERPRIMERO : 'verPrimero';

LLAVEIZQ : '{';
LLAVEDER : '}';

PARIZQ : '(';
PARDER : ')';

CORIZQ : '[';
CORDER : ']';

COMA : ',';
ADMIRACION : '!';

ID : [a-zA-Z][a-zA-Z0-9]*;

NUMERO : [0-9]+;

TEXTO : '"' .*? '"';

WS : [ \t\r\n]+ -> skip;