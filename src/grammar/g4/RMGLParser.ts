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
	public static readonly FontSize = 14;
	public static readonly FontColor = 15;
	public static readonly Comma = 16;
	public static readonly Semicolon = 17;
	public static readonly Quotation = 18;
	public static readonly Slash = 19;
	public static readonly TokenChar = 20;
	public static readonly NL = 21;
	public static readonly Space = 22;
	public static readonly Char = 23;
	public static readonly AnnotationQuotation = 24;
	public static readonly AnnotationChar = 25;
	public static readonly LineAnnotationNL = 26;
	public static readonly LineAnnotationChar = 27;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_statement = 0;
	public static readonly RULE_variableName = 1;
	public static readonly RULE_charText = 2;
	public static readonly RULE_annotationText = 3;
	public static readonly RULE_lineAnnotationText = 4;
	public static readonly RULE_lineGraphicDefine = 5;
	public static readonly RULE_graphicType = 6;
	public static readonly RULE_propertyDefine = 7;
	public static readonly RULE_textDefine = 8;
	public static readonly RULE_annotationDefine = 9;
	public static readonly literalNames: (string | null)[] = [ null, "'Rect'", 
                                                            "'Circle'", 
                                                            "'x'", "'y'", 
                                                            "'w'", "'h'", 
                                                            "'angle'", "'color'", 
                                                            "'text'", "'alpha'", 
                                                            "'borderWidth'", 
                                                            "'borderColor'", 
                                                            "'borderAlpha'", 
                                                            "'fontSize'", 
                                                            "'fontColor'", 
                                                            "','", "';'", 
                                                            null, "'//'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Rect", 
                                                             "Circle", "X", 
                                                             "Y", "W", "H", 
                                                             "Angle", "Color", 
                                                             "Text", "Alpha", 
                                                             "BorderWidth", 
                                                             "BorderColor", 
                                                             "BorderAlpha", 
                                                             "FontSize", 
                                                             "FontColor", 
                                                             "Comma", "Semicolon", 
                                                             "Quotation", 
                                                             "Slash", "TokenChar", 
                                                             "NL", "Space", 
                                                             "Char", "AnnotationQuotation", 
                                                             "AnnotationChar", 
                                                             "LineAnnotationNL", 
                                                             "LineAnnotationChar" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "variableName", "charText", "annotationText", "lineAnnotationText", 
		"lineGraphicDefine", "graphicType", "propertyDefine", "textDefine", "annotationDefine",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 20;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 28;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
					{
					this.state = 26;
					this.lineGraphicDefine();
					}
					break;
				case 19:
					{
					this.state = 27;
					this.annotationDefine();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524294) !== 0));
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			this.match(RMGLParser.TokenChar);
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			this.match(RMGLParser.TokenChar);
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
	public annotationText(): AnnotationTextContext {
		let localctx: AnnotationTextContext = new AnnotationTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, RMGLParser.RULE_annotationText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 36;
				this.match(RMGLParser.AnnotationChar);
				}
				}
				this.state = 41;
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
	public lineAnnotationText(): LineAnnotationTextContext {
		let localctx: LineAnnotationTextContext = new LineAnnotationTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RMGLParser.RULE_lineAnnotationText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 42;
				this.match(RMGLParser.LineAnnotationChar);
				}
				}
				this.state = 47;
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
	public lineGraphicDefine(): LineGraphicDefineContext {
		let localctx: LineGraphicDefineContext = new LineGraphicDefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, RMGLParser.RULE_lineGraphicDefine);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.graphicType();
			this.state = 54;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 49;
					this.variableName();
					this.state = 50;
					this.match(RMGLParser.Comma);
					}
					}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 57;
			this.variableName();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65528) !== 0)) {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
					{
					this.state = 58;
					this.propertyDefine();
					}
					break;
				case 9:
					{
					this.state = 59;
					this.textDefine();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 65;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 70;
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
		this.enterRule(localctx, 12, RMGLParser.RULE_graphicType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
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
		this.enterRule(localctx, 14, RMGLParser.RULE_propertyDefine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 65016) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 74;
			this.charText();
			this.state = 75;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===17)) {
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
	public textDefine(): TextDefineContext {
		let localctx: TextDefineContext = new TextDefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, RMGLParser.RULE_textDefine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(RMGLParser.Text);
			this.state = 78;
			this.match(RMGLParser.Quotation);
			this.state = 79;
			this.annotationText();
			this.state = 80;
			this.match(RMGLParser.AnnotationQuotation);
			this.state = 81;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===17)) {
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
	public annotationDefine(): AnnotationDefineContext {
		let localctx: AnnotationDefineContext = new AnnotationDefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, RMGLParser.RULE_annotationDefine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(RMGLParser.Slash);
			this.state = 84;
			this.lineAnnotationText();
			this.state = 85;
			this.match(RMGLParser.LineAnnotationNL);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 86;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 91;
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

	public static readonly _serializedATN: number[] = [4,1,27,93,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,0,4,0,29,8,0,11,0,12,0,30,1,1,1,1,1,
	2,1,2,1,3,5,3,38,8,3,10,3,12,3,41,9,3,1,4,5,4,44,8,4,10,4,12,4,47,9,4,1,
	5,1,5,1,5,1,5,5,5,53,8,5,10,5,12,5,56,9,5,1,5,1,5,1,5,5,5,61,8,5,10,5,12,
	5,64,9,5,1,5,5,5,67,8,5,10,5,12,5,70,9,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,
	8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,88,8,9,10,9,12,9,91,9,9,1,9,0,0,10,
	0,2,4,6,8,10,12,14,16,18,0,3,1,0,1,2,2,0,3,8,10,15,1,0,16,17,92,0,23,1,
	0,0,0,2,32,1,0,0,0,4,34,1,0,0,0,6,39,1,0,0,0,8,45,1,0,0,0,10,48,1,0,0,0,
	12,71,1,0,0,0,14,73,1,0,0,0,16,77,1,0,0,0,18,83,1,0,0,0,20,22,5,21,0,0,
	21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,28,1,0,0,0,25,
	23,1,0,0,0,26,29,3,10,5,0,27,29,3,18,9,0,28,26,1,0,0,0,28,27,1,0,0,0,29,
	30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,1,1,0,0,0,32,33,5,20,0,0,33,3,
	1,0,0,0,34,35,5,20,0,0,35,5,1,0,0,0,36,38,5,25,0,0,37,36,1,0,0,0,38,41,
	1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,7,1,0,0,0,41,39,1,0,0,0,42,44,5,
	27,0,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,9,1,0,
	0,0,47,45,1,0,0,0,48,54,3,12,6,0,49,50,3,2,1,0,50,51,5,16,0,0,51,53,1,0,
	0,0,52,49,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,
	0,56,54,1,0,0,0,57,62,3,2,1,0,58,61,3,14,7,0,59,61,3,16,8,0,60,58,1,0,0,
	0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,68,1,0,0,0,
	64,62,1,0,0,0,65,67,5,21,0,0,66,65,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,
	68,69,1,0,0,0,69,11,1,0,0,0,70,68,1,0,0,0,71,72,7,0,0,0,72,13,1,0,0,0,73,
	74,7,1,0,0,74,75,3,4,2,0,75,76,7,2,0,0,76,15,1,0,0,0,77,78,5,9,0,0,78,79,
	5,18,0,0,79,80,3,6,3,0,80,81,5,24,0,0,81,82,7,2,0,0,82,17,1,0,0,0,83,84,
	5,19,0,0,84,85,3,8,4,0,85,89,5,26,0,0,86,88,5,21,0,0,87,86,1,0,0,0,88,91,
	1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,19,1,0,0,0,91,89,1,0,0,0,10,23,28,
	30,39,45,54,60,62,68,89];

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
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RMGLParser.NL, i);
	}
	public lineGraphicDefine_list(): LineGraphicDefineContext[] {
		return this.getTypedRuleContexts(LineGraphicDefineContext) as LineGraphicDefineContext[];
	}
	public lineGraphicDefine(i: number): LineGraphicDefineContext {
		return this.getTypedRuleContext(LineGraphicDefineContext, i) as LineGraphicDefineContext;
	}
	public annotationDefine_list(): AnnotationDefineContext[] {
		return this.getTypedRuleContexts(AnnotationDefineContext) as AnnotationDefineContext[];
	}
	public annotationDefine(i: number): AnnotationDefineContext {
		return this.getTypedRuleContext(AnnotationDefineContext, i) as AnnotationDefineContext;
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
	public TokenChar(): TerminalNode {
		return this.getToken(RMGLParser.TokenChar, 0);
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
	public TokenChar(): TerminalNode {
		return this.getToken(RMGLParser.TokenChar, 0);
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


export class AnnotationTextContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AnnotationChar_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.AnnotationChar);
	}
	public AnnotationChar(i: number): TerminalNode {
		return this.getToken(RMGLParser.AnnotationChar, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_annotationText;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterAnnotationText) {
	 		listener.enterAnnotationText(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitAnnotationText) {
	 		listener.exitAnnotationText(this);
		}
	}
}


export class LineAnnotationTextContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LineAnnotationChar_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.LineAnnotationChar);
	}
	public LineAnnotationChar(i: number): TerminalNode {
		return this.getToken(RMGLParser.LineAnnotationChar, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_lineAnnotationText;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterLineAnnotationText) {
	 		listener.enterLineAnnotationText(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitLineAnnotationText) {
	 		listener.exitLineAnnotationText(this);
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
	public textDefine_list(): TextDefineContext[] {
		return this.getTypedRuleContexts(TextDefineContext) as TextDefineContext[];
	}
	public textDefine(i: number): TextDefineContext {
		return this.getTypedRuleContext(TextDefineContext, i) as TextDefineContext;
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
	public FontSize(): TerminalNode {
		return this.getToken(RMGLParser.FontSize, 0);
	}
	public FontColor(): TerminalNode {
		return this.getToken(RMGLParser.FontColor, 0);
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


export class TextDefineContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Text(): TerminalNode {
		return this.getToken(RMGLParser.Text, 0);
	}
	public Quotation(): TerminalNode {
		return this.getToken(RMGLParser.Quotation, 0);
	}
	public annotationText(): AnnotationTextContext {
		return this.getTypedRuleContext(AnnotationTextContext, 0) as AnnotationTextContext;
	}
	public AnnotationQuotation(): TerminalNode {
		return this.getToken(RMGLParser.AnnotationQuotation, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(RMGLParser.Comma, 0);
	}
	public Semicolon(): TerminalNode {
		return this.getToken(RMGLParser.Semicolon, 0);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_textDefine;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterTextDefine) {
	 		listener.enterTextDefine(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitTextDefine) {
	 		listener.exitTextDefine(this);
		}
	}
}


export class AnnotationDefineContext extends ParserRuleContext {
	constructor(parser?: RMGLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Slash(): TerminalNode {
		return this.getToken(RMGLParser.Slash, 0);
	}
	public lineAnnotationText(): LineAnnotationTextContext {
		return this.getTypedRuleContext(LineAnnotationTextContext, 0) as LineAnnotationTextContext;
	}
	public LineAnnotationNL(): TerminalNode {
		return this.getToken(RMGLParser.LineAnnotationNL, 0);
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RMGLParser.NL, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_annotationDefine;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterAnnotationDefine) {
	 		listener.enterAnnotationDefine(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitAnnotationDefine) {
	 		listener.exitAnnotationDefine(this);
		}
	}
}
