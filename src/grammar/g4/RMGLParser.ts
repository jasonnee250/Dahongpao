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
	public static readonly Diamond = 3;
	public static readonly Parallelogram = 4;
	public static readonly Trapezoid = 5;
	public static readonly Triangle = 6;
	public static readonly Line = 7;
	public static readonly SimpleLine = 8;
	public static readonly PolyLine = 9;
	public static readonly CurveLine = 10;
	public static readonly LArrow = 11;
	public static readonly RArrow = 12;
	public static readonly X = 13;
	public static readonly Y = 14;
	public static readonly W = 15;
	public static readonly H = 16;
	public static readonly Angle = 17;
	public static readonly Color = 18;
	public static readonly Text = 19;
	public static readonly Alpha = 20;
	public static readonly BorderWidth = 21;
	public static readonly BorderColor = 22;
	public static readonly BorderAlpha = 23;
	public static readonly FontSize = 24;
	public static readonly FontColor = 25;
	public static readonly Comma = 26;
	public static readonly Semicolon = 27;
	public static readonly Quotation = 28;
	public static readonly Slash = 29;
	public static readonly TokenChar = 30;
	public static readonly NL = 31;
	public static readonly Space = 32;
	public static readonly Char = 33;
	public static readonly AnnotationQuotation = 34;
	public static readonly AnnotationChar = 35;
	public static readonly LineAnnotationNL = 36;
	public static readonly LineAnnotationChar = 37;
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
	public static readonly RULE_linkDefine = 10;
	public static readonly literalNames: (string | null)[] = [ null, "'Rect'", 
                                                            "'Circle'", 
                                                            "'Diamond'", 
                                                            "'Parallelogram'", 
                                                            "'Trapezoid'", 
                                                            "'Triangle'", 
                                                            "'--'", "'-line-'", 
                                                            "'-poly-'", 
                                                            "'-curve-'", 
                                                            "'<'", "'>'", 
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
                                                             "Circle", "Diamond", 
                                                             "Parallelogram", 
                                                             "Trapezoid", 
                                                             "Triangle", 
                                                             "Line", "SimpleLine", 
                                                             "PolyLine", 
                                                             "CurveLine", 
                                                             "LArrow", "RArrow", 
                                                             "X", "Y", "W", 
                                                             "H", "Angle", 
                                                             "Color", "Text", 
                                                             "Alpha", "BorderWidth", 
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
		"linkDefine",
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
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 22;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 31;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					{
					this.state = 28;
					this.lineGraphicDefine();
					}
					break;
				case 29:
					{
					this.state = 29;
					this.annotationDefine();
					}
					break;
				case 30:
					{
					this.state = 30;
					this.linkDefine();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1610612862) !== 0));
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
			this.state = 35;
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
			this.state = 37;
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
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 39;
				this.match(RMGLParser.AnnotationChar);
				}
				}
				this.state = 44;
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
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===37) {
				{
				{
				this.state = 45;
				this.match(RMGLParser.LineAnnotationChar);
				}
				}
				this.state = 50;
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
			this.state = 51;
			this.graphicType();
			this.state = 57;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 52;
					this.variableName();
					this.state = 53;
					this.match(RMGLParser.Comma);
					}
					}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 60;
			this.variableName();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67100672) !== 0)) {
				{
				this.state = 63;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
					{
					this.state = 61;
					this.propertyDefine();
					}
					break;
				case 19:
					{
					this.state = 62;
					this.textDefine();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 68;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 73;
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
			this.state = 74;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 126) !== 0))) {
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
			this.state = 76;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 66576384) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 77;
			this.charText();
			this.state = 78;
			_la = this._input.LA(1);
			if(!(_la===26 || _la===27)) {
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
			this.state = 80;
			this.match(RMGLParser.Text);
			this.state = 81;
			this.match(RMGLParser.Quotation);
			this.state = 82;
			this.annotationText();
			this.state = 83;
			this.match(RMGLParser.AnnotationQuotation);
			this.state = 84;
			_la = this._input.LA(1);
			if(!(_la===26 || _la===27)) {
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
			this.state = 86;
			this.match(RMGLParser.Slash);
			this.state = 87;
			this.lineAnnotationText();
			this.state = 88;
			this.match(RMGLParser.LineAnnotationNL);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 89;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 94;
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
	public linkDefine(): LinkDefineContext {
		let localctx: LinkDefineContext = new LinkDefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, RMGLParser.RULE_linkDefine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.match(RMGLParser.TokenChar);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 96;
				this.match(RMGLParser.LArrow);
				}
			}

			this.state = 99;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1920) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 100;
				this.match(RMGLParser.RArrow);
				}
			}

			this.state = 103;
			this.match(RMGLParser.TokenChar);
			this.state = 104;
			_la = this._input.LA(1);
			if(!(_la===26 || _la===27)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 105;
				this.match(RMGLParser.NL);
				}
				}
				this.state = 110;
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

	public static readonly _serializedATN: number[] = [4,1,37,112,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,5,0,24,8,0,10,0,12,0,27,9,0,1,0,1,0,1,0,4,0,32,8,0,11,0,12,
	0,33,1,1,1,1,1,2,1,2,1,3,5,3,41,8,3,10,3,12,3,44,9,3,1,4,5,4,47,8,4,10,
	4,12,4,50,9,4,1,5,1,5,1,5,1,5,5,5,56,8,5,10,5,12,5,59,9,5,1,5,1,5,1,5,5,
	5,64,8,5,10,5,12,5,67,9,5,1,5,5,5,70,8,5,10,5,12,5,73,9,5,1,6,1,6,1,7,1,
	7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,91,8,9,10,9,12,9,
	94,9,9,1,10,1,10,3,10,98,8,10,1,10,1,10,3,10,102,8,10,1,10,1,10,1,10,5,
	10,107,8,10,10,10,12,10,110,9,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,
	0,4,1,0,1,6,2,0,13,18,20,25,1,0,26,27,1,0,7,10,114,0,25,1,0,0,0,2,35,1,
	0,0,0,4,37,1,0,0,0,6,42,1,0,0,0,8,48,1,0,0,0,10,51,1,0,0,0,12,74,1,0,0,
	0,14,76,1,0,0,0,16,80,1,0,0,0,18,86,1,0,0,0,20,95,1,0,0,0,22,24,5,31,0,
	0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,31,1,0,0,0,
	27,25,1,0,0,0,28,32,3,10,5,0,29,32,3,18,9,0,30,32,3,20,10,0,31,28,1,0,0,
	0,31,29,1,0,0,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,
	34,1,1,0,0,0,35,36,5,30,0,0,36,3,1,0,0,0,37,38,5,30,0,0,38,5,1,0,0,0,39,
	41,5,35,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,
	7,1,0,0,0,44,42,1,0,0,0,45,47,5,37,0,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,
	1,0,0,0,48,49,1,0,0,0,49,9,1,0,0,0,50,48,1,0,0,0,51,57,3,12,6,0,52,53,3,
	2,1,0,53,54,5,26,0,0,54,56,1,0,0,0,55,52,1,0,0,0,56,59,1,0,0,0,57,55,1,
	0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,65,3,2,1,0,61,64,3,14,
	7,0,62,64,3,16,8,0,63,61,1,0,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,
	0,0,65,66,1,0,0,0,66,71,1,0,0,0,67,65,1,0,0,0,68,70,5,31,0,0,69,68,1,0,
	0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,11,1,0,0,0,73,71,1,0,0,
	0,74,75,7,0,0,0,75,13,1,0,0,0,76,77,7,1,0,0,77,78,3,4,2,0,78,79,7,2,0,0,
	79,15,1,0,0,0,80,81,5,19,0,0,81,82,5,28,0,0,82,83,3,6,3,0,83,84,5,34,0,
	0,84,85,7,2,0,0,85,17,1,0,0,0,86,87,5,29,0,0,87,88,3,8,4,0,88,92,5,36,0,
	0,89,91,5,31,0,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,
	0,93,19,1,0,0,0,94,92,1,0,0,0,95,97,5,30,0,0,96,98,5,11,0,0,97,96,1,0,0,
	0,97,98,1,0,0,0,98,99,1,0,0,0,99,101,7,3,0,0,100,102,5,12,0,0,101,100,1,
	0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,104,5,30,0,0,104,108,7,2,0,0,
	105,107,5,31,0,0,106,105,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,
	1,0,0,0,109,21,1,0,0,0,110,108,1,0,0,0,13,25,31,33,42,48,57,63,65,71,92,
	97,101,108];

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
	public linkDefine_list(): LinkDefineContext[] {
		return this.getTypedRuleContexts(LinkDefineContext) as LinkDefineContext[];
	}
	public linkDefine(i: number): LinkDefineContext {
		return this.getTypedRuleContext(LinkDefineContext, i) as LinkDefineContext;
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
	public Diamond(): TerminalNode {
		return this.getToken(RMGLParser.Diamond, 0);
	}
	public Parallelogram(): TerminalNode {
		return this.getToken(RMGLParser.Parallelogram, 0);
	}
	public Trapezoid(): TerminalNode {
		return this.getToken(RMGLParser.Trapezoid, 0);
	}
	public Triangle(): TerminalNode {
		return this.getToken(RMGLParser.Triangle, 0);
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


export class LinkDefineContext extends ParserRuleContext {
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
	public Line(): TerminalNode {
		return this.getToken(RMGLParser.Line, 0);
	}
	public SimpleLine(): TerminalNode {
		return this.getToken(RMGLParser.SimpleLine, 0);
	}
	public PolyLine(): TerminalNode {
		return this.getToken(RMGLParser.PolyLine, 0);
	}
	public CurveLine(): TerminalNode {
		return this.getToken(RMGLParser.CurveLine, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(RMGLParser.Comma, 0);
	}
	public Semicolon(): TerminalNode {
		return this.getToken(RMGLParser.Semicolon, 0);
	}
	public LArrow(): TerminalNode {
		return this.getToken(RMGLParser.LArrow, 0);
	}
	public RArrow(): TerminalNode {
		return this.getToken(RMGLParser.RArrow, 0);
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RMGLParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RMGLParser.NL, i);
	}
    public get ruleIndex(): number {
    	return RMGLParser.RULE_linkDefine;
	}
	public enterRule(listener: RMGLParserListener): void {
	    if(listener.enterLinkDefine) {
	 		listener.enterLinkDefine(this);
		}
	}
	public exitRule(listener: RMGLParserListener): void {
	    if(listener.exitLinkDefine) {
	 		listener.exitLinkDefine(this);
		}
	}
}
