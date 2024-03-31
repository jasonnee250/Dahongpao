// Generated from ./src/grammar/g4/RMGLParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RMGLParserListener } from "./RMGLParserListener";
import { RMGLParserVisitor } from "./RMGLParserVisitor";


export class RMGLParser extends Parser {
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
	public static readonly RULE_statement = 0;
	public static readonly RULE_variableName = 1;
	public static readonly RULE_charText = 2;
	public static readonly RULE_lineGraphicDefine = 3;
	public static readonly RULE_graphicType = 4;
	public static readonly RULE_propertyDefine = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "variableName", "charText", "lineGraphicDefine", "graphicType", 
		"propertyDefine",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Rect'", "'Circle'", "'x'", "'y'", "'w'", "'h'", "'angle'", 
		"'color'", "'text'", "'alpha'", "'borderWidth'", "'borderColor'", "'BorderAlpha'", 
		"','", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Rect", "Circle", "X", "Y", "W", "H", "Angle", "Color", "Text", 
		"Alpha", "BorderWidth", "BorderColor", "BorderAlpha", "Comma", "Semicolon", 
		"Quotation", "Letter", "TokenChar", "NL", "Space", "Char", "AnnotationQuotation", 
		"AnnotationChar",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RMGLParser._LITERAL_NAMES, RMGLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RMGLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RMGLParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RMGLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RMGLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RMGLParser._ATN, this);
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RMGLParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			} while (_la === RMGLParser.Rect || _la === RMGLParser.Circle);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RMGLParser.RULE_variableName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			} while (_la === RMGLParser.Letter);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charText(): CharTextContext {
		let _localctx: CharTextContext = new CharTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RMGLParser.RULE_charText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			} while (_la === RMGLParser.TokenChar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineGraphicDefine(): LineGraphicDefineContext {
		let _localctx: LineGraphicDefineContext = new LineGraphicDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RMGLParser.RULE_lineGraphicDefine);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.graphicType();
			this.state = 33;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 36;
			this.variableName();
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RMGLParser.X) | (1 << RMGLParser.Y) | (1 << RMGLParser.W) | (1 << RMGLParser.H) | (1 << RMGLParser.Angle) | (1 << RMGLParser.Color) | (1 << RMGLParser.Text) | (1 << RMGLParser.Alpha) | (1 << RMGLParser.BorderWidth) | (1 << RMGLParser.BorderColor) | (1 << RMGLParser.BorderAlpha))) !== 0)) {
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
			while (_la === RMGLParser.NL) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public graphicType(): GraphicTypeContext {
		let _localctx: GraphicTypeContext = new GraphicTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RMGLParser.RULE_graphicType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if (!(_la === RMGLParser.Rect || _la === RMGLParser.Circle)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDefine(): PropertyDefineContext {
		let _localctx: PropertyDefineContext = new PropertyDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RMGLParser.RULE_propertyDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RMGLParser.X) | (1 << RMGLParser.Y) | (1 << RMGLParser.W) | (1 << RMGLParser.H) | (1 << RMGLParser.Angle) | (1 << RMGLParser.Color) | (1 << RMGLParser.Text) | (1 << RMGLParser.Alpha) | (1 << RMGLParser.BorderWidth) | (1 << RMGLParser.BorderColor) | (1 << RMGLParser.BorderAlpha))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 52;
			this.charText();
			this.state = 53;
			_la = this._input.LA(1);
			if (!(_la === RMGLParser.Comma || _la === RMGLParser.Semicolon)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19:\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x03\x06\x03\x15" +
		"\n\x03\r\x03\x0E\x03\x16\x03\x04\x06\x04\x1A\n\x04\r\x04\x0E\x04\x1B\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03" +
		"\x05\x03\x05\x07\x05)\n\x05\f\x05\x0E\x05,\v\x05\x03\x05\x07\x05/\n\x05" +
		"\f\x05\x0E\x052\v\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x05" +
		"\x03\x02\x03\x04\x03\x02\x05\x0F\x03\x02\x10\x11\x029\x02\x0F\x03\x02" +
		"\x02\x02\x04\x14\x03\x02\x02\x02\x06\x19\x03\x02\x02\x02\b\x1D\x03\x02" +
		"\x02\x02\n3\x03\x02\x02\x02\f5\x03\x02\x02\x02\x0E\x10\x05\b\x05\x02\x0F" +
		"\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11" +
		"\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x15\x07\x13\x02\x02\x14" +
		"\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16" +
		"\x17\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x1A\x07\x14\x02\x02\x19" +
		"\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B" +
		"\x1C\x03\x02\x02\x02\x1C\x07\x03\x02\x02\x02\x1D#\x05\n\x06\x02\x1E\x1F" +
		"\x05\x04\x03\x02\x1F \x07\x10\x02\x02 \"\x03\x02\x02\x02!\x1E\x03\x02" +
		"\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03" +
		"\x02\x02\x02%#\x03\x02\x02\x02&*\x05\x04\x03\x02\')\x05\f\x07\x02(\'\x03" +
		"\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02+0\x03" +
		"\x02\x02\x02,*\x03\x02\x02\x02-/\x07\x15\x02\x02.-\x03\x02\x02\x02/2\x03" +
		"\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x021\t\x03\x02\x02\x0220" +
		"\x03\x02\x02\x0234\t\x02\x02\x024\v\x03\x02\x02\x0256\t\x03\x02\x0267" +
		"\x05\x06\x04\x0278\t\x04\x02\x028\r\x03\x02\x02\x02\b\x11\x16\x1B#*0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RMGLParser.__ATN) {
			RMGLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RMGLParser._serializedATN));
		}

		return RMGLParser.__ATN;
	}

}

export class StatementContext extends ParserRuleContext {
	public lineGraphicDefine(): LineGraphicDefineContext[];
	public lineGraphicDefine(i: number): LineGraphicDefineContext;
	public lineGraphicDefine(i?: number): LineGraphicDefineContext | LineGraphicDefineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineGraphicDefineContext);
		} else {
			return this.getRuleContext(i, LineGraphicDefineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RMGLParser.RULE_statement; }
	// @Override
	public enterRule(listener: RMGLParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RMGLParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RMGLParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	public Letter(): TerminalNode[];
	public Letter(i: number): TerminalNode;
	public Letter(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RMGLParser.Letter);
		} else {
			return this.getToken(RMGLParser.Letter, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RMGLParser.RULE_variableName; }
	// @Override
	public enterRule(listener: RMGLParserListener): void {
		if (listener.enterVariableName) {
			listener.enterVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: RMGLParserListener): void {
		if (listener.exitVariableName) {
			listener.exitVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RMGLParserVisitor<Result>): Result {
		if (visitor.visitVariableName) {
			return visitor.visitVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharTextContext extends ParserRuleContext {
	public TokenChar(): TerminalNode[];
	public TokenChar(i: number): TerminalNode;
	public TokenChar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RMGLParser.TokenChar);
		} else {
			return this.getToken(RMGLParser.TokenChar, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RMGLParser.RULE_charText; }
	// @Override
	public enterRule(listener: RMGLParserListener): void {
		if (listener.enterCharText) {
			listener.enterCharText(this);
		}
	}
	// @Override
	public exitRule(listener: RMGLParserListener): void {
		if (listener.exitCharText) {
			listener.exitCharText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RMGLParserVisitor<Result>): Result {
		if (visitor.visitCharText) {
			return visitor.visitCharText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineGraphicDefineContext extends ParserRuleContext {
	public graphicType(): GraphicTypeContext {
		return this.getRuleContext(0, GraphicTypeContext);
	}
	public variableName(): VariableNameContext[];
	public variableName(i: number): VariableNameContext;
	public variableName(i?: number): VariableNameContext | VariableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableNameContext);
		} else {
			return this.getRuleContext(i, VariableNameContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RMGLParser.Comma);
		} else {
			return this.getToken(RMGLParser.Comma, i);
		}
	}
	public propertyDefine(): PropertyDefineContext[];
	public propertyDefine(i: number): PropertyDefineContext;
	public propertyDefine(i?: number): PropertyDefineContext | PropertyDefineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyDefineContext);
		} else {
			return this.getRuleContext(i, PropertyDefineContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RMGLParser.NL);
		} else {
			return this.getToken(RMGLParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RMGLParser.RULE_lineGraphicDefine; }
	// @Override
	public enterRule(listener: RMGLParserListener): void {
		if (listener.enterLineGraphicDefine) {
			listener.enterLineGraphicDefine(this);
		}
	}
	// @Override
	public exitRule(listener: RMGLParserListener): void {
		if (listener.exitLineGraphicDefine) {
			listener.exitLineGraphicDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RMGLParserVisitor<Result>): Result {
		if (visitor.visitLineGraphicDefine) {
			return visitor.visitLineGraphicDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GraphicTypeContext extends ParserRuleContext {
	public Rect(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Rect, 0); }
	public Circle(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Circle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RMGLParser.RULE_graphicType; }
	// @Override
	public enterRule(listener: RMGLParserListener): void {
		if (listener.enterGraphicType) {
			listener.enterGraphicType(this);
		}
	}
	// @Override
	public exitRule(listener: RMGLParserListener): void {
		if (listener.exitGraphicType) {
			listener.exitGraphicType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RMGLParserVisitor<Result>): Result {
		if (visitor.visitGraphicType) {
			return visitor.visitGraphicType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDefineContext extends ParserRuleContext {
	public charText(): CharTextContext {
		return this.getRuleContext(0, CharTextContext);
	}
	public X(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.X, 0); }
	public Y(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Y, 0); }
	public W(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.W, 0); }
	public H(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.H, 0); }
	public Angle(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Angle, 0); }
	public Color(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Color, 0); }
	public Text(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Text, 0); }
	public Alpha(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Alpha, 0); }
	public BorderColor(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.BorderColor, 0); }
	public BorderWidth(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.BorderWidth, 0); }
	public BorderAlpha(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.BorderAlpha, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Comma, 0); }
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(RMGLParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RMGLParser.RULE_propertyDefine; }
	// @Override
	public enterRule(listener: RMGLParserListener): void {
		if (listener.enterPropertyDefine) {
			listener.enterPropertyDefine(this);
		}
	}
	// @Override
	public exitRule(listener: RMGLParserListener): void {
		if (listener.exitPropertyDefine) {
			listener.exitPropertyDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RMGLParserVisitor<Result>): Result {
		if (visitor.visitPropertyDefine) {
			return visitor.visitPropertyDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


