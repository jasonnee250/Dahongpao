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
	public static readonly ANNOTATION_MODE = 1;
	public static readonly LINE_ANNOTATION_MODE = 2;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "ANNOTATION_MODE", 
                                                "LINE_ANNOTATION_MODE", ];

	public static readonly ruleNames: string[] = [
		"Rect", "Circle", "X", "Y", "W", "H", "Angle", "Color", "Text", "Alpha", 
		"BorderWidth", "BorderColor", "BorderAlpha", "FontSize", "FontColor", 
		"Comma", "Semicolon", "Quotation", "Slash", "TokenChar", "NL", "Space", 
		"Char", "AnnotationQuotation", "AnnotationChar", "LineAnnotationNL", "LineAnnotationChar",
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

	public static readonly _serializedATN: number[] = [4,0,27,193,6,-1,6,-1,
	6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,
	8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,
	15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,
	2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,
	1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,
	1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,4,19,170,8,19,11,19,12,
	19,171,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,1,24,
	1,24,1,25,1,25,1,25,1,25,1,26,1,26,0,0,27,3,1,5,2,7,3,9,4,11,5,13,6,15,
	7,17,8,19,9,21,10,23,11,25,12,27,13,29,14,31,15,33,16,35,17,37,18,39,19,
	41,20,43,21,45,22,47,23,49,24,51,25,53,26,55,27,3,0,1,2,3,6,0,45,46,48,
	57,65,90,95,95,97,122,19968,40869,2,0,10,10,13,13,2,0,9,9,32,32,191,0,3,
	1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
	15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,
	0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
	37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,
	0,0,1,49,1,0,0,0,1,51,1,0,0,0,2,53,1,0,0,0,2,55,1,0,0,0,3,57,1,0,0,0,5,
	62,1,0,0,0,7,69,1,0,0,0,9,71,1,0,0,0,11,73,1,0,0,0,13,75,1,0,0,0,15,77,
	1,0,0,0,17,83,1,0,0,0,19,89,1,0,0,0,21,94,1,0,0,0,23,100,1,0,0,0,25,112,
	1,0,0,0,27,124,1,0,0,0,29,136,1,0,0,0,31,145,1,0,0,0,33,155,1,0,0,0,35,
	157,1,0,0,0,37,159,1,0,0,0,39,163,1,0,0,0,41,169,1,0,0,0,43,173,1,0,0,0,
	45,175,1,0,0,0,47,179,1,0,0,0,49,181,1,0,0,0,51,185,1,0,0,0,53,187,1,0,
	0,0,55,191,1,0,0,0,57,58,5,82,0,0,58,59,5,101,0,0,59,60,5,99,0,0,60,61,
	5,116,0,0,61,4,1,0,0,0,62,63,5,67,0,0,63,64,5,105,0,0,64,65,5,114,0,0,65,
	66,5,99,0,0,66,67,5,108,0,0,67,68,5,101,0,0,68,6,1,0,0,0,69,70,5,120,0,
	0,70,8,1,0,0,0,71,72,5,121,0,0,72,10,1,0,0,0,73,74,5,119,0,0,74,12,1,0,
	0,0,75,76,5,104,0,0,76,14,1,0,0,0,77,78,5,97,0,0,78,79,5,110,0,0,79,80,
	5,103,0,0,80,81,5,108,0,0,81,82,5,101,0,0,82,16,1,0,0,0,83,84,5,99,0,0,
	84,85,5,111,0,0,85,86,5,108,0,0,86,87,5,111,0,0,87,88,5,114,0,0,88,18,1,
	0,0,0,89,90,5,116,0,0,90,91,5,101,0,0,91,92,5,120,0,0,92,93,5,116,0,0,93,
	20,1,0,0,0,94,95,5,97,0,0,95,96,5,108,0,0,96,97,5,112,0,0,97,98,5,104,0,
	0,98,99,5,97,0,0,99,22,1,0,0,0,100,101,5,98,0,0,101,102,5,111,0,0,102,103,
	5,114,0,0,103,104,5,100,0,0,104,105,5,101,0,0,105,106,5,114,0,0,106,107,
	5,87,0,0,107,108,5,105,0,0,108,109,5,100,0,0,109,110,5,116,0,0,110,111,
	5,104,0,0,111,24,1,0,0,0,112,113,5,98,0,0,113,114,5,111,0,0,114,115,5,114,
	0,0,115,116,5,100,0,0,116,117,5,101,0,0,117,118,5,114,0,0,118,119,5,67,
	0,0,119,120,5,111,0,0,120,121,5,108,0,0,121,122,5,111,0,0,122,123,5,114,
	0,0,123,26,1,0,0,0,124,125,5,98,0,0,125,126,5,111,0,0,126,127,5,114,0,0,
	127,128,5,100,0,0,128,129,5,101,0,0,129,130,5,114,0,0,130,131,5,65,0,0,
	131,132,5,108,0,0,132,133,5,112,0,0,133,134,5,104,0,0,134,135,5,97,0,0,
	135,28,1,0,0,0,136,137,5,102,0,0,137,138,5,111,0,0,138,139,5,110,0,0,139,
	140,5,116,0,0,140,141,5,83,0,0,141,142,5,105,0,0,142,143,5,122,0,0,143,
	144,5,101,0,0,144,30,1,0,0,0,145,146,5,102,0,0,146,147,5,111,0,0,147,148,
	5,110,0,0,148,149,5,116,0,0,149,150,5,67,0,0,150,151,5,111,0,0,151,152,
	5,108,0,0,152,153,5,111,0,0,153,154,5,114,0,0,154,32,1,0,0,0,155,156,5,
	44,0,0,156,34,1,0,0,0,157,158,5,59,0,0,158,36,1,0,0,0,159,160,5,34,0,0,
	160,161,1,0,0,0,161,162,6,17,0,0,162,38,1,0,0,0,163,164,5,47,0,0,164,165,
	5,47,0,0,165,166,1,0,0,0,166,167,6,18,1,0,167,40,1,0,0,0,168,170,7,0,0,
	0,169,168,1,0,0,0,170,171,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,42,
	1,0,0,0,173,174,7,1,0,0,174,44,1,0,0,0,175,176,7,2,0,0,176,177,1,0,0,0,
	177,178,6,21,2,0,178,46,1,0,0,0,179,180,9,0,0,0,180,48,1,0,0,0,181,182,
	5,34,0,0,182,183,1,0,0,0,183,184,6,23,3,0,184,50,1,0,0,0,185,186,9,0,0,
	0,186,52,1,0,0,0,187,188,7,1,0,0,188,189,1,0,0,0,189,190,6,25,3,0,190,54,
	1,0,0,0,191,192,9,0,0,0,192,56,1,0,0,0,5,0,1,2,169,171,4,5,1,0,5,2,0,6,
	0,0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RMGLLexer.__ATN) {
			RMGLLexer.__ATN = new ATNDeserializer().deserialize(RMGLLexer._serializedATN);
		}

		return RMGLLexer.__ATN;
	}


	static DecisionsToDFA = RMGLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}