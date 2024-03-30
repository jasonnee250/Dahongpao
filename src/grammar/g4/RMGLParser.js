// Generated from ./src/grammar/g4/RMGLParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RMGLParserListener from './RMGLParserListener.js';
const serializedATN = [4,1,23,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,4,1,19,8,1,11,1,12,1,20,1,2,4,2,
24,8,2,11,2,12,2,25,1,3,1,3,1,3,1,3,5,3,32,8,3,10,3,12,3,35,9,3,1,3,1,3,
5,3,39,8,3,10,3,12,3,42,9,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,4,1,4,1,5,
1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,3,1,0,1,2,1,0,3,13,1,0,14,15,55,0,13,
1,0,0,0,2,18,1,0,0,0,4,23,1,0,0,0,6,27,1,0,0,0,8,49,1,0,0,0,10,51,1,0,0,
0,12,14,3,6,3,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,
16,1,1,0,0,0,17,19,5,17,0,0,18,17,1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,
21,1,0,0,0,21,3,1,0,0,0,22,24,5,18,0,0,23,22,1,0,0,0,24,25,1,0,0,0,25,23,
1,0,0,0,25,26,1,0,0,0,26,5,1,0,0,0,27,33,3,8,4,0,28,29,3,2,1,0,29,30,5,14,
0,0,30,32,1,0,0,0,31,28,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,
0,34,36,1,0,0,0,35,33,1,0,0,0,36,40,3,2,1,0,37,39,3,10,5,0,38,37,1,0,0,0,
39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,46,1,0,0,0,42,40,1,0,0,0,43,
45,5,19,0,0,44,43,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,7,
1,0,0,0,48,46,1,0,0,0,49,50,7,0,0,0,50,9,1,0,0,0,51,52,7,1,0,0,52,53,3,4,
2,0,53,54,7,2,0,0,54,11,1,0,0,0,6,15,20,25,33,40,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RMGLParser extends antlr4.Parser {

    static grammarFileName = "RMGLParser.g4";
    static literalNames = [ null, "'Rect'", "'Circle'", "'x'", "'y'", "'w'", 
                            "'h'", "'angle'", "'color'", "'text'", "'alpha'", 
                            "'borderWidth'", "'borderColor'", "'BorderAlpha'", 
                            "','", "';'" ];
    static symbolicNames = [ null, "Rect", "Circle", "X", "Y", "W", "H", 
                             "Angle", "Color", "Text", "Alpha", "BorderWidth", 
                             "BorderColor", "BorderAlpha", "Comma", "Semicolon", 
                             "Quotation", "Letter", "TokenChar", "NL", "Space", 
                             "Char", "AnnotationQuotation", "AnnotationChar" ];
    static ruleNames = [ "statement", "variableName", "charText", "lineGraphicDefine", 
                         "graphicType", "propertyDefine" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RMGLParser.ruleNames;
        this.literalNames = RMGLParser.literalNames;
        this.symbolicNames = RMGLParser.symbolicNames;
    }



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RMGLParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.lineGraphicDefine();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
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



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RMGLParser.RULE_variableName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 17;
	            this.match(RMGLParser.Letter);
	            this.state = 20; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
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



	charText() {
	    let localctx = new CharTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RMGLParser.RULE_charText);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.match(RMGLParser.TokenChar);
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
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



	lineGraphicDefine() {
	    let localctx = new LineGraphicDefineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RMGLParser.RULE_lineGraphicDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.graphicType();
	        this.state = 33;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 28;
	                this.variableName();
	                this.state = 29;
	                this.match(RMGLParser.Comma); 
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 36;
	        this.variableName();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16376) !== 0)) {
	            this.state = 37;
	            this.propertyDefine();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 43;
	            this.match(RMGLParser.NL);
	            this.state = 48;
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



	graphicType() {
	    let localctx = new GraphicTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RMGLParser.RULE_graphicType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
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



	propertyDefine() {
	    let localctx = new PropertyDefineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RMGLParser.RULE_propertyDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16376) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 52;
	        this.charText();
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
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


}

RMGLParser.EOF = antlr4.Token.EOF;
RMGLParser.Rect = 1;
RMGLParser.Circle = 2;
RMGLParser.X = 3;
RMGLParser.Y = 4;
RMGLParser.W = 5;
RMGLParser.H = 6;
RMGLParser.Angle = 7;
RMGLParser.Color = 8;
RMGLParser.Text = 9;
RMGLParser.Alpha = 10;
RMGLParser.BorderWidth = 11;
RMGLParser.BorderColor = 12;
RMGLParser.BorderAlpha = 13;
RMGLParser.Comma = 14;
RMGLParser.Semicolon = 15;
RMGLParser.Quotation = 16;
RMGLParser.Letter = 17;
RMGLParser.TokenChar = 18;
RMGLParser.NL = 19;
RMGLParser.Space = 20;
RMGLParser.Char = 21;
RMGLParser.AnnotationQuotation = 22;
RMGLParser.AnnotationChar = 23;

RMGLParser.RULE_statement = 0;
RMGLParser.RULE_variableName = 1;
RMGLParser.RULE_charText = 2;
RMGLParser.RULE_lineGraphicDefine = 3;
RMGLParser.RULE_graphicType = 4;
RMGLParser.RULE_propertyDefine = 5;

class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RMGLParser.RULE_statement;
    }

	lineGraphicDefine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineGraphicDefineContext);
	    } else {
	        return this.getTypedRuleContext(LineGraphicDefineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RMGLParser.RULE_variableName;
    }

	Letter = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RMGLParser.Letter);
	    } else {
	        return this.getToken(RMGLParser.Letter, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.exitVariableName(this);
		}
	}


}



class CharTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RMGLParser.RULE_charText;
    }

	TokenChar = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RMGLParser.TokenChar);
	    } else {
	        return this.getToken(RMGLParser.TokenChar, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.enterCharText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.exitCharText(this);
		}
	}


}



class LineGraphicDefineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RMGLParser.RULE_lineGraphicDefine;
    }

	graphicType() {
	    return this.getTypedRuleContext(GraphicTypeContext,0);
	};

	variableName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableNameContext);
	    } else {
	        return this.getTypedRuleContext(VariableNameContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RMGLParser.Comma);
	    } else {
	        return this.getToken(RMGLParser.Comma, i);
	    }
	};


	propertyDefine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyDefineContext);
	    } else {
	        return this.getTypedRuleContext(PropertyDefineContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RMGLParser.NL);
	    } else {
	        return this.getToken(RMGLParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.enterLineGraphicDefine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.exitLineGraphicDefine(this);
		}
	}


}



class GraphicTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RMGLParser.RULE_graphicType;
    }

	Rect() {
	    return this.getToken(RMGLParser.Rect, 0);
	};

	Circle() {
	    return this.getToken(RMGLParser.Circle, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.enterGraphicType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.exitGraphicType(this);
		}
	}


}



class PropertyDefineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RMGLParser.RULE_propertyDefine;
    }

	charText() {
	    return this.getTypedRuleContext(CharTextContext,0);
	};

	X() {
	    return this.getToken(RMGLParser.X, 0);
	};

	Y() {
	    return this.getToken(RMGLParser.Y, 0);
	};

	W() {
	    return this.getToken(RMGLParser.W, 0);
	};

	H() {
	    return this.getToken(RMGLParser.H, 0);
	};

	Angle() {
	    return this.getToken(RMGLParser.Angle, 0);
	};

	Color() {
	    return this.getToken(RMGLParser.Color, 0);
	};

	Text() {
	    return this.getToken(RMGLParser.Text, 0);
	};

	Alpha() {
	    return this.getToken(RMGLParser.Alpha, 0);
	};

	BorderColor() {
	    return this.getToken(RMGLParser.BorderColor, 0);
	};

	BorderWidth() {
	    return this.getToken(RMGLParser.BorderWidth, 0);
	};

	BorderAlpha() {
	    return this.getToken(RMGLParser.BorderAlpha, 0);
	};

	Comma() {
	    return this.getToken(RMGLParser.Comma, 0);
	};

	Semicolon() {
	    return this.getToken(RMGLParser.Semicolon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.enterPropertyDefine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RMGLParserListener ) {
	        listener.exitPropertyDefine(this);
		}
	}


}




RMGLParser.StatementContext = StatementContext; 
RMGLParser.VariableNameContext = VariableNameContext; 
RMGLParser.CharTextContext = CharTextContext; 
RMGLParser.LineGraphicDefineContext = LineGraphicDefineContext; 
RMGLParser.GraphicTypeContext = GraphicTypeContext; 
RMGLParser.PropertyDefineContext = PropertyDefineContext; 
