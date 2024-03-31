// Generated from ./src/grammar/g4/RMGLParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import RMGLParserListener from "./RMGLParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class RMGLParser extends Parser {
	public static readonly Rect = 1;
	public static readonly Circle = 2;
	public static readonly X = 3;
	public static readonly Y = 4;
	public static readonly W = 5;
	public static readonly H = 6;
	public static readonly Angle = 7;
	public static readonly Color = 8;
	public static readonly Text = 9;
	public static readonly Alpha = 10;
	public static readonly BorderWidth = 11;
	public static readonly BorderColor = 12;
	public static readonly BorderAlpha = 13;
	public static readonly Comma = 14;
	public static readonly Semicolon = 15;
	public static readonly Quotation = 16;
	public static readonly Letter = 17;
	public static readonly TokenChar = 18;
	public static readonly NL = 19;
	public static readonly Space = 20;
	public static readonly Char = 21;
	public static readonly AnnotationQuotation = 22;
	public static readonly AnnotationChar = 23;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_statement = 0;
	public static readonly RULE_variableName = 1;
	public static readonly RULE_charText = 2;
	public static readonly RULE_lineGraphicDefine = 3;
	public static readonly RULE_graphicType = 4;
	public static readonly RULE_propertyDefine = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'Rect'", 
                                                            "'Circle'", 
                                                            "'x'", "'y'", 
                                                            "'w'", "'h'", 
                                                            "'angle'", "'color'", 
                                                            "'text'", "'alpha'", 
                                                            "'borderWidth'", 
                                                            "'borderColor'", 
                                                            "'BorderAlpha'", 
                                                            "','", "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Rect", 
                                                             "Circle", "X", 
                                                             "Y", "W", "H", 
                                                             "Angle", "Color", 
                                                             "Text", "Alpha", 
                                                             "BorderWidth", 
                                                             "BorderColor", 
                                                             "BorderAlpha", 
                                                             "Comma", "Semicolon", 
                                                             "Quotation", 
                                                             "Letter", "TokenChar", 
                                                             "NL", "Space", 
                                                             "Char", "AnnotationQuotation", 
                                                             "AnnotationChar" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "variableName", "charText", "lineGraphicDefine", "graphicType", 
		"propertyDefine",
	];
	public get grammarFileName(): string { return "RMGLParser.g4"; }
	public get literalNames(): (string | null)[] { return RMGLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return RMGLParser.symbolicNames; }
	public get ruleNames(): string[] { return RMGLParser.ruleNames; }
	public get serializedATN(): number[] { return RMGLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, RMGLParser._ATN, RMGLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, RMGLParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.lineGraphicDefine();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1 || _la===2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let localctx: VariableNameContext = new VariableNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, RMGLParser.RULE_variableName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 17;
				this.match(RMGLParser.Letter);
				}
				}
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charText(): CharTextContext {
		let localctx: CharTextContext = new CharTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, RMGLParser.RULE_charText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 22;
				this.match(RMGLParser.TokenChar);
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lineGraphicDefine(): LineGraphicDefineContext {
		let localctx: LineGraphicDefineContext = new LineGraphicDefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, RMGLParser.RULE_lineGraphicDefine);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 27;
			this.graphicType();
			this.state = 33;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 28;
					this.variableName();
					this.state = 29;
					this.match(RMGLParser.Comma);
					}
					}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 36;
			this.variableName();
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16376) !== 0)) {
				{
				{
				this.state = 37;
				this.propertyDefine();
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19) {
				{
				{
				this.state = 43;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphicType(): GraphicTypeContext {
		let localctx: GraphicTypeContext = new GraphicTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RMGLParser.RULE_graphicType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyDefine(): PropertyDefineContext {
		let localctx: PropertyDefineContext = new PropertyDefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, RMGLParser.RULE_propertyDefine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16376) !== 0))) {
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
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,23,56,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,4,
	1,19,8,1,11,1,12,1,20,1,2,4,2,24,8,2,11,2,12,2,25,1,3,1,3,1,3,1,3,5,3,32,
	8,3,10,3,12,3,35,9,3,1,3,1,3,5,3,39,8,3,10,3,12,3,42,9,3,1,3,5,3,45,8,3,
	10,3,12,3,48,9,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,3,1,0,
	1,2,1,0,3,13,1,0,14,15,55,0,13,1,0,0,0,2,18,1,0,0,0,4,23,1,0,0,0,6,27,1,
	0,0,0,8,49,1,0,0,0,10,51,1,0,0,0,12,14,3,6,3,0,13,12,1,0,0,0,14,15,1,0,
	0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,19,5,17,0,0,18,17,1,0,0,
	0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,3,1,0,0,0,22,24,5,18,0,0,
	23,22,1,0,0,0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,5,1,0,0,0,27,
	33,3,8,4,0,28,29,3,2,1,0,29,30,5,14,0,0,30,32,1,0,0,0,31,28,1,0,0,0,32,
	35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,40,
	3,2,1,0,37,39,3,10,5,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,
	1,0,0,0,41,46,1,0,0,0,42,40,1,0,0,0,43,45,5,19,0,0,44,43,1,0,0,0,45,48,
	1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,46,1,0,0,0,49,50,7,
	0,0,0,50,9,1,0,0,0,51,52,7,1,0,0,52,53,3,4,2,0,53,54,7,2,0,0,54,11,1,0,
	0,0,6,15,20,25,33,40,46];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RMGLParser.__ATN) {
			RMGLParser.__ATN = new ATNDeserializer().deserialize(RMGLParser._serializedATN);
		}

		return RMGLParser.__ATN;
	}


	static DecisionsToDFA = RMGLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StatementContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lineGraphicDefine_list(): LineGraphicDefineContext[] {
		return this.getTypedRuleContexts(LineGraphicDefineContext) as LineGraphicDefineContext[];
	}
	public lineGraphicDefine(i: number): LineGraphicDefineContext {
		return this.getTypedRuleContext(LineGraphicDefineContext, i) as LineGraphicDefineContext;
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_statement;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Letter_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.Letter);
	}
	public Letter(i: number): TerminalNode {
		return this.getToken(RMGLParser.Letter, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_variableName;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterVariableName) {
	 		listener.enterVariableName(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitVariableName) {
	 		listener.exitVariableName(this);
		}
	}
}


export class CharTextContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TokenChar_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.TokenChar);
	}
	public TokenChar(i: number): TerminalNode {
		return this.getToken(RMGLParser.TokenChar, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_charText;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterCharText) {
	 		listener.enterCharText(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitCharText) {
	 		listener.exitCharText(this);
		}
	}
}


export class LineGraphicDefineContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public graphicType(): GraphicTypeContext {
		return this.getTypedRuleContext(GraphicTypeContext, 0) as GraphicTypeContext;
	}
	public variableName_list(): VariableNameContext[] {
		return this.getTypedRuleContexts(VariableNameContext) as VariableNameContext[];
	}
	public variableName(i: number): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, i) as VariableNameContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(RMGLParser.Comma, i);
	}
	public propertyDefine_list(): PropertyDefineContext[] {
		return this.getTypedRuleContexts(PropertyDefineContext) as PropertyDefineContext[];
	}
	public propertyDefine(i: number): PropertyDefineContext {
		return this.getTypedRuleContext(PropertyDefineContext, i) as PropertyDefineContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RMGLParser.NL, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_lineGraphicDefine;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterLineGraphicDefine) {
	 		listener.enterLineGraphicDefine(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitLineGraphicDefine) {
	 		listener.exitLineGraphicDefine(this);
		}
	}
}


export class GraphicTypeContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Rect(): TerminalNode {
		return this.getToken(RMGLParser.Rect, 0);
	}
	public Circle(): TerminalNode {
		return this.getToken(RMGLParser.Circle, 0);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_graphicType;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterGraphicType) {
	 		listener.enterGraphicType(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitGraphicType) {
	 		listener.exitGraphicType(this);
		}
	}
}


export class PropertyDefineContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public charText(): CharTextContext {
		return this.getTypedRuleContext(CharTextContext, 0) as CharTextContext;
	}
	public X(): TerminalNode {
		return this.getToken(RMGLParser.X, 0);
	}
	public Y(): TerminalNode {
		return this.getToken(RMGLParser.Y, 0);
	}
	public W(): TerminalNode {
		return this.getToken(RMGLParser.W, 0);
	}
	public H(): TerminalNode {
		return this.getToken(RMGLParser.H, 0);
	}
	public Angle(): TerminalNode {
		return this.getToken(RMGLParser.Angle, 0);
	}
	public Color(): TerminalNode {
		return this.getToken(RMGLParser.Color, 0);
	}
	public Text(): TerminalNode {
		return this.getToken(RMGLParser.Text, 0);
	}
	public Alpha(): TerminalNode {
		return this.getToken(RMGLParser.Alpha, 0);
	}
	public BorderColor(): TerminalNode {
		return this.getToken(RMGLParser.BorderColor, 0);
	}
	public BorderWidth(): TerminalNode {
		return this.getToken(RMGLParser.BorderWidth, 0);
	}
	public BorderAlpha(): TerminalNode {
		return this.getToken(RMGLParser.BorderAlpha, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(RMGLParser.Comma, 0);
	}
	public Semicolon(): TerminalNode {
		return this.getToken(RMGLParser.Semicolon, 0);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_propertyDefine;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterPropertyDefine) {
	 		listener.enterPropertyDefine(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitPropertyDefine) {
	 		listener.exitPropertyDefine(this);
		}
	}
}
