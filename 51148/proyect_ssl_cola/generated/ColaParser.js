// Generated from Cola.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ColaListener from './ColaListener.js';
import ColaVisitor from './ColaVisitor.js';

const serializedATN = [4,1,17,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,27,8,
1,10,1,12,1,30,9,1,1,2,1,2,1,2,1,2,3,2,36,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,
8,1,8,1,8,1,8,5,8,66,8,8,10,8,12,8,69,9,8,3,8,71,8,8,1,8,1,8,1,8,0,0,9,0,
2,4,6,8,10,12,14,16,0,1,1,0,15,16,71,0,18,1,0,0,0,2,28,1,0,0,0,4,35,1,0,
0,0,6,37,1,0,0,0,8,43,1,0,0,0,10,49,1,0,0,0,12,54,1,0,0,0,14,59,1,0,0,0,
16,61,1,0,0,0,18,19,5,1,0,0,19,20,5,14,0,0,20,21,5,6,0,0,21,22,3,2,1,0,22,
23,5,7,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,27,3,4,2,0,26,25,1,0,0,0,27,30,
1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,28,1,0,0,0,31,36,3,6,
3,0,32,36,3,8,4,0,33,36,3,10,5,0,34,36,3,12,6,0,35,31,1,0,0,0,35,32,1,0,
0,0,35,33,1,0,0,0,35,34,1,0,0,0,36,5,1,0,0,0,37,38,5,2,0,0,38,39,5,8,0,0,
39,40,3,16,8,0,40,41,5,9,0,0,41,42,5,13,0,0,42,7,1,0,0,0,43,44,5,3,0,0,44,
45,5,8,0,0,45,46,3,14,7,0,46,47,5,9,0,0,47,48,5,13,0,0,48,9,1,0,0,0,49,50,
5,4,0,0,50,51,5,8,0,0,51,52,5,9,0,0,52,53,5,13,0,0,53,11,1,0,0,0,54,55,5,
5,0,0,55,56,5,8,0,0,56,57,5,9,0,0,57,58,5,13,0,0,58,13,1,0,0,0,59,60,7,0,
0,0,60,15,1,0,0,0,61,70,5,10,0,0,62,67,3,14,7,0,63,64,5,12,0,0,64,66,3,14,
7,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,71,1,0,0,
0,69,67,1,0,0,0,70,62,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,72,73,5,11,0,0,
73,17,1,0,0,0,4,28,35,67,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ColaParser extends antlr4.Parser {

    static grammarFileName = "Cola.g4";
    static literalNames = [ null, "'cola'", "'crear'", "'encolar'", "'desencolar'", 
                            "'verPrimero'", "'{'", "'}'", "'('", "')'", 
                            "'['", "']'", "','", "'!'" ];
    static symbolicNames = [ null, "COLA", "CREAR", "ENCOLAR", "DESENCOLAR", 
                             "VERPRIMERO", "LLAVEIZQ", "LLAVEDER", "PARIZQ", 
                             "PARDER", "CORIZQ", "CORDER", "COMA", "ADMIRACION", 
                             "ID", "NUMERO", "TEXTO", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "encolar", 
                         "desencolar", "verPrimero", "valor", "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ColaParser.ruleNames;
        this.literalNames = ColaParser.literalNames;
        this.symbolicNames = ColaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ColaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(ColaParser.COLA);
	        this.state = 19;
	        this.match(ColaParser.ID);
	        this.state = 20;
	        this.match(ColaParser.LLAVEIZQ);
	        this.state = 21;
	        this.comandos();
	        this.state = 22;
	        this.match(ColaParser.LLAVEDER);
	        this.state = 23;
	        this.match(ColaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ColaParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 25;
	            this.operacion();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ColaParser.RULE_operacion);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.crear();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.encolar();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.desencolar();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.verPrimero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ColaParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(ColaParser.CREAR);
	        this.state = 38;
	        this.match(ColaParser.PARIZQ);
	        this.state = 39;
	        this.lista();
	        this.state = 40;
	        this.match(ColaParser.PARDER);
	        this.state = 41;
	        this.match(ColaParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	encolar() {
	    let localctx = new EncolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ColaParser.RULE_encolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(ColaParser.ENCOLAR);
	        this.state = 44;
	        this.match(ColaParser.PARIZQ);
	        this.state = 45;
	        this.valor();
	        this.state = 46;
	        this.match(ColaParser.PARDER);
	        this.state = 47;
	        this.match(ColaParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desencolar() {
	    let localctx = new DesencolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ColaParser.RULE_desencolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(ColaParser.DESENCOLAR);
	        this.state = 50;
	        this.match(ColaParser.PARIZQ);
	        this.state = 51;
	        this.match(ColaParser.PARDER);
	        this.state = 52;
	        this.match(ColaParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verPrimero() {
	    let localctx = new VerPrimeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ColaParser.RULE_verPrimero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(ColaParser.VERPRIMERO);
	        this.state = 55;
	        this.match(ColaParser.PARIZQ);
	        this.state = 56;
	        this.match(ColaParser.PARDER);
	        this.state = 57;
	        this.match(ColaParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ColaParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ColaParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(ColaParser.CORIZQ);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===16) {
	            this.state = 62;
	            this.valor();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 63;
	                this.match(ColaParser.COMA);
	                this.state = 64;
	                this.valor();
	                this.state = 69;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 72;
	        this.match(ColaParser.CORDER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ColaParser.EOF = antlr4.Token.EOF;
ColaParser.COLA = 1;
ColaParser.CREAR = 2;
ColaParser.ENCOLAR = 3;
ColaParser.DESENCOLAR = 4;
ColaParser.VERPRIMERO = 5;
ColaParser.LLAVEIZQ = 6;
ColaParser.LLAVEDER = 7;
ColaParser.PARIZQ = 8;
ColaParser.PARDER = 9;
ColaParser.CORIZQ = 10;
ColaParser.CORDER = 11;
ColaParser.COMA = 12;
ColaParser.ADMIRACION = 13;
ColaParser.ID = 14;
ColaParser.NUMERO = 15;
ColaParser.TEXTO = 16;
ColaParser.WS = 17;

ColaParser.RULE_programa = 0;
ColaParser.RULE_comandos = 1;
ColaParser.RULE_operacion = 2;
ColaParser.RULE_crear = 3;
ColaParser.RULE_encolar = 4;
ColaParser.RULE_desencolar = 5;
ColaParser.RULE_verPrimero = 6;
ColaParser.RULE_valor = 7;
ColaParser.RULE_lista = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_programa;
    }

	COLA() {
	    return this.getToken(ColaParser.COLA, 0);
	};

	ID() {
	    return this.getToken(ColaParser.ID, 0);
	};

	LLAVEIZQ() {
	    return this.getToken(ColaParser.LLAVEIZQ, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	LLAVEDER() {
	    return this.getToken(ColaParser.LLAVEDER, 0);
	};

	EOF() {
	    return this.getToken(ColaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_operacion;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	encolar() {
	    return this.getTypedRuleContext(EncolarContext,0);
	};

	desencolar() {
	    return this.getTypedRuleContext(DesencolarContext,0);
	};

	verPrimero() {
	    return this.getTypedRuleContext(VerPrimeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_crear;
    }

	CREAR() {
	    return this.getToken(ColaParser.CREAR, 0);
	};

	PARIZQ() {
	    return this.getToken(ColaParser.PARIZQ, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	PARDER() {
	    return this.getToken(ColaParser.PARDER, 0);
	};

	ADMIRACION() {
	    return this.getToken(ColaParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EncolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_encolar;
    }

	ENCOLAR() {
	    return this.getToken(ColaParser.ENCOLAR, 0);
	};

	PARIZQ() {
	    return this.getToken(ColaParser.PARIZQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PARDER() {
	    return this.getToken(ColaParser.PARDER, 0);
	};

	ADMIRACION() {
	    return this.getToken(ColaParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterEncolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitEncolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitEncolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesencolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_desencolar;
    }

	DESENCOLAR() {
	    return this.getToken(ColaParser.DESENCOLAR, 0);
	};

	PARIZQ() {
	    return this.getToken(ColaParser.PARIZQ, 0);
	};

	PARDER() {
	    return this.getToken(ColaParser.PARDER, 0);
	};

	ADMIRACION() {
	    return this.getToken(ColaParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterDesencolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitDesencolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitDesencolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VerPrimeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_verPrimero;
    }

	VERPRIMERO() {
	    return this.getToken(ColaParser.VERPRIMERO, 0);
	};

	PARIZQ() {
	    return this.getToken(ColaParser.PARIZQ, 0);
	};

	PARDER() {
	    return this.getToken(ColaParser.PARDER, 0);
	};

	ADMIRACION() {
	    return this.getToken(ColaParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterVerPrimero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitVerPrimero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitVerPrimero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(ColaParser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(ColaParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaParser.RULE_lista;
    }

	CORIZQ() {
	    return this.getToken(ColaParser.CORIZQ, 0);
	};

	CORDER() {
	    return this.getToken(ColaParser.CORDER, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ColaParser.COMA);
	    } else {
	        return this.getToken(ColaParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ColaParser.ProgramaContext = ProgramaContext; 
ColaParser.ComandosContext = ComandosContext; 
ColaParser.OperacionContext = OperacionContext; 
ColaParser.CrearContext = CrearContext; 
ColaParser.EncolarContext = EncolarContext; 
ColaParser.DesencolarContext = DesencolarContext; 
ColaParser.VerPrimeroContext = VerPrimeroContext; 
ColaParser.ValorContext = ValorContext; 
ColaParser.ListaContext = ListaContext; 
