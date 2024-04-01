// Generated from ./src/grammar/g4/RMGLLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class RMGLLexer extends Lexer {
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
	public static readonly TokenChar = 17;
	public static readonly NL = 18;
	public static readonly Space = 19;
	public static readonly Char = 20;
	public static readonly AnnotationQuotation = 21;
	public static readonly AnnotationChar = 22;
	public static readonly EOF = Token.EOF;
	public static readonly ANNOTATION_MODE = 1;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
                                                             "TokenChar", 
                                                             "NL", "Space", 
                                                             "Char", "AnnotationQuotation", 
                                                             "AnnotationChar" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "ANNOTATION_MODE", ];

	public static readonly ruleNames: string[] = [
		"Rect", "Circle", "X", "Y", "W", "H", "Angle", "Color", "Text", "Alpha", 
		"BorderWidth", "BorderColor", "BorderAlpha", "Comma", "Semicolon", "Quotation", 
		"TokenChar", "NL", "Space", "Char", "AnnotationQuotation", "AnnotationChar",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, RMGLLexer._ATN, RMGLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "RMGLLexer.g4"; }

	public get literalNames(): (string | null)[] { return RMGLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return RMGLLexer.symbolicNames; }
	public get ruleNames(): string[] { return RMGLLexer.ruleNames; }

	public get serializedATN(): number[] { return RMGLLexer._serializedATN; }

	public get channelNames(): string[] { return RMGLLexer.channelNames; }

	public get modeNames(): string[] { return RMGLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,22,152,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,1,0,1,0,1,0,1,0,
	1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
	1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
	1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,
	1,15,1,15,1,15,1,16,4,16,135,8,16,11,16,12,16,136,1,17,1,17,1,18,1,18,1,
	18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,0,0,22,2,1,4,2,6,3,8,4,
	10,5,12,6,14,7,16,8,18,9,20,10,22,11,24,12,26,13,28,14,30,15,32,16,34,17,
	36,18,38,19,40,20,42,21,44,22,2,0,1,3,5,0,48,57,65,90,95,95,97,122,19968,
	40869,2,0,10,10,13,13,2,0,9,9,32,32,151,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,
	0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,
	1,0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,28,1,0,0,
	0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,1,0,0,0,0,36,1,0,0,0,0,38,1,0,0,0,0,40,
	1,0,0,0,1,42,1,0,0,0,1,44,1,0,0,0,2,46,1,0,0,0,4,51,1,0,0,0,6,58,1,0,0,
	0,8,60,1,0,0,0,10,62,1,0,0,0,12,64,1,0,0,0,14,66,1,0,0,0,16,72,1,0,0,0,
	18,78,1,0,0,0,20,83,1,0,0,0,22,89,1,0,0,0,24,101,1,0,0,0,26,113,1,0,0,0,
	28,125,1,0,0,0,30,127,1,0,0,0,32,129,1,0,0,0,34,134,1,0,0,0,36,138,1,0,
	0,0,38,140,1,0,0,0,40,144,1,0,0,0,42,146,1,0,0,0,44,150,1,0,0,0,46,47,5,
	82,0,0,47,48,5,101,0,0,48,49,5,99,0,0,49,50,5,116,0,0,50,3,1,0,0,0,51,52,
	5,67,0,0,52,53,5,105,0,0,53,54,5,114,0,0,54,55,5,99,0,0,55,56,5,108,0,0,
	56,57,5,101,0,0,57,5,1,0,0,0,58,59,5,120,0,0,59,7,1,0,0,0,60,61,5,121,0,
	0,61,9,1,0,0,0,62,63,5,119,0,0,63,11,1,0,0,0,64,65,5,104,0,0,65,13,1,0,
	0,0,66,67,5,97,0,0,67,68,5,110,0,0,68,69,5,103,0,0,69,70,5,108,0,0,70,71,
	5,101,0,0,71,15,1,0,0,0,72,73,5,99,0,0,73,74,5,111,0,0,74,75,5,108,0,0,
	75,76,5,111,0,0,76,77,5,114,0,0,77,17,1,0,0,0,78,79,5,116,0,0,79,80,5,101,
	0,0,80,81,5,120,0,0,81,82,5,116,0,0,82,19,1,0,0,0,83,84,5,97,0,0,84,85,
	5,108,0,0,85,86,5,112,0,0,86,87,5,104,0,0,87,88,5,97,0,0,88,21,1,0,0,0,
	89,90,5,98,0,0,90,91,5,111,0,0,91,92,5,114,0,0,92,93,5,100,0,0,93,94,5,
	101,0,0,94,95,5,114,0,0,95,96,5,87,0,0,96,97,5,105,0,0,97,98,5,100,0,0,
	98,99,5,116,0,0,99,100,5,104,0,0,100,23,1,0,0,0,101,102,5,98,0,0,102,103,
	5,111,0,0,103,104,5,114,0,0,104,105,5,100,0,0,105,106,5,101,0,0,106,107,
	5,114,0,0,107,108,5,67,0,0,108,109,5,111,0,0,109,110,5,108,0,0,110,111,
	5,111,0,0,111,112,5,114,0,0,112,25,1,0,0,0,113,114,5,66,0,0,114,115,5,111,
	0,0,115,116,5,114,0,0,116,117,5,100,0,0,117,118,5,101,0,0,118,119,5,114,
	0,0,119,120,5,65,0,0,120,121,5,108,0,0,121,122,5,112,0,0,122,123,5,104,
	0,0,123,124,5,97,0,0,124,27,1,0,0,0,125,126,5,44,0,0,126,29,1,0,0,0,127,
	128,5,59,0,0,128,31,1,0,0,0,129,130,5,34,0,0,130,131,1,0,0,0,131,132,6,
	15,0,0,132,33,1,0,0,0,133,135,7,0,0,0,134,133,1,0,0,0,135,136,1,0,0,0,136,
	134,1,0,0,0,136,137,1,0,0,0,137,35,1,0,0,0,138,139,7,1,0,0,139,37,1,0,0,
	0,140,141,7,2,0,0,141,142,1,0,0,0,142,143,6,18,1,0,143,39,1,0,0,0,144,145,
	5,46,0,0,145,41,1,0,0,0,146,147,5,34,0,0,147,148,1,0,0,0,148,149,6,20,2,
	0,149,43,1,0,0,0,150,151,5,46,0,0,151,45,1,0,0,0,3,0,1,136,3,5,1,0,6,0,
	0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RMGLLexer.__ATN) {
			RMGLLexer.__ATN = new ATNDeserializer().deserialize(RMGLLexer._serializedATN);
		}

		return RMGLLexer.__ATN;
	}


	static DecisionsToDFA = RMGLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}