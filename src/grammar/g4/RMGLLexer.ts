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
	public static readonly ANNOTATION_MODE = 1;
	public static readonly LINE_ANNOTATION_MODE = 2;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "ANNOTATION_MODE", 
                                                "LINE_ANNOTATION_MODE", ];

	public static readonly ruleNames: string[] = [
		"Rect", "Circle", "Diamond", "Parallelogram", "Trapezoid", "Triangle", 
		"Line", "SimpleLine", "PolyLine", "CurveLine", "LArrow", "RArrow", "X", 
		"Y", "W", "H", "Angle", "Color", "Text", "Alpha", "BorderWidth", "BorderColor", 
		"BorderAlpha", "FontSize", "FontColor", "Comma", "Semicolon", "Quotation", 
		"Slash", "TokenChar", "NL", "Space", "Char", "AnnotationQuotation", "AnnotationChar", 
		"LineAnnotationNL", "LineAnnotationChar",
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

	public static readonly _serializedATN: number[] = [4,0,37,283,6,-1,6,-1,
	6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,
	8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,
	15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,
	2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,
	30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,1,0,
	1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,
	1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,
	15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,
	1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,
	20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
	1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
	22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,
	1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,
	27,1,28,1,28,1,28,1,28,1,28,1,29,4,29,260,8,29,11,29,12,29,261,1,30,1,30,
	1,31,1,31,1,31,1,31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,
	35,1,35,1,36,1,36,0,0,37,3,1,5,2,7,3,9,4,11,5,13,6,15,7,17,8,19,9,21,10,
	23,11,25,12,27,13,29,14,31,15,33,16,35,17,37,18,39,19,41,20,43,21,45,22,
	47,23,49,24,51,25,53,26,55,27,57,28,59,29,61,30,63,31,65,32,67,33,69,34,
	71,35,73,36,75,37,3,0,1,2,3,6,0,45,46,48,57,65,90,95,95,97,122,19968,40869,
	2,0,10,10,13,13,2,0,9,9,32,32,281,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
	9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
	0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,
	31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,
	0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
	53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,
	0,0,0,65,1,0,0,0,0,67,1,0,0,0,1,69,1,0,0,0,1,71,1,0,0,0,2,73,1,0,0,0,2,
	75,1,0,0,0,3,77,1,0,0,0,5,82,1,0,0,0,7,89,1,0,0,0,9,97,1,0,0,0,11,111,1,
	0,0,0,13,121,1,0,0,0,15,130,1,0,0,0,17,133,1,0,0,0,19,140,1,0,0,0,21,147,
	1,0,0,0,23,155,1,0,0,0,25,157,1,0,0,0,27,159,1,0,0,0,29,161,1,0,0,0,31,
	163,1,0,0,0,33,165,1,0,0,0,35,167,1,0,0,0,37,173,1,0,0,0,39,179,1,0,0,0,
	41,184,1,0,0,0,43,190,1,0,0,0,45,202,1,0,0,0,47,214,1,0,0,0,49,226,1,0,
	0,0,51,235,1,0,0,0,53,245,1,0,0,0,55,247,1,0,0,0,57,249,1,0,0,0,59,253,
	1,0,0,0,61,259,1,0,0,0,63,263,1,0,0,0,65,265,1,0,0,0,67,269,1,0,0,0,69,
	271,1,0,0,0,71,275,1,0,0,0,73,277,1,0,0,0,75,281,1,0,0,0,77,78,5,82,0,0,
	78,79,5,101,0,0,79,80,5,99,0,0,80,81,5,116,0,0,81,4,1,0,0,0,82,83,5,67,
	0,0,83,84,5,105,0,0,84,85,5,114,0,0,85,86,5,99,0,0,86,87,5,108,0,0,87,88,
	5,101,0,0,88,6,1,0,0,0,89,90,5,68,0,0,90,91,5,105,0,0,91,92,5,97,0,0,92,
	93,5,109,0,0,93,94,5,111,0,0,94,95,5,110,0,0,95,96,5,100,0,0,96,8,1,0,0,
	0,97,98,5,80,0,0,98,99,5,97,0,0,99,100,5,114,0,0,100,101,5,97,0,0,101,102,
	5,108,0,0,102,103,5,108,0,0,103,104,5,101,0,0,104,105,5,108,0,0,105,106,
	5,111,0,0,106,107,5,103,0,0,107,108,5,114,0,0,108,109,5,97,0,0,109,110,
	5,109,0,0,110,10,1,0,0,0,111,112,5,84,0,0,112,113,5,114,0,0,113,114,5,97,
	0,0,114,115,5,112,0,0,115,116,5,101,0,0,116,117,5,122,0,0,117,118,5,111,
	0,0,118,119,5,105,0,0,119,120,5,100,0,0,120,12,1,0,0,0,121,122,5,84,0,0,
	122,123,5,114,0,0,123,124,5,105,0,0,124,125,5,97,0,0,125,126,5,110,0,0,
	126,127,5,103,0,0,127,128,5,108,0,0,128,129,5,101,0,0,129,14,1,0,0,0,130,
	131,5,45,0,0,131,132,5,45,0,0,132,16,1,0,0,0,133,134,5,45,0,0,134,135,5,
	108,0,0,135,136,5,105,0,0,136,137,5,110,0,0,137,138,5,101,0,0,138,139,5,
	45,0,0,139,18,1,0,0,0,140,141,5,45,0,0,141,142,5,112,0,0,142,143,5,111,
	0,0,143,144,5,108,0,0,144,145,5,121,0,0,145,146,5,45,0,0,146,20,1,0,0,0,
	147,148,5,45,0,0,148,149,5,99,0,0,149,150,5,117,0,0,150,151,5,114,0,0,151,
	152,5,118,0,0,152,153,5,101,0,0,153,154,5,45,0,0,154,22,1,0,0,0,155,156,
	5,60,0,0,156,24,1,0,0,0,157,158,5,62,0,0,158,26,1,0,0,0,159,160,5,120,0,
	0,160,28,1,0,0,0,161,162,5,121,0,0,162,30,1,0,0,0,163,164,5,119,0,0,164,
	32,1,0,0,0,165,166,5,104,0,0,166,34,1,0,0,0,167,168,5,97,0,0,168,169,5,
	110,0,0,169,170,5,103,0,0,170,171,5,108,0,0,171,172,5,101,0,0,172,36,1,
	0,0,0,173,174,5,99,0,0,174,175,5,111,0,0,175,176,5,108,0,0,176,177,5,111,
	0,0,177,178,5,114,0,0,178,38,1,0,0,0,179,180,5,116,0,0,180,181,5,101,0,
	0,181,182,5,120,0,0,182,183,5,116,0,0,183,40,1,0,0,0,184,185,5,97,0,0,185,
	186,5,108,0,0,186,187,5,112,0,0,187,188,5,104,0,0,188,189,5,97,0,0,189,
	42,1,0,0,0,190,191,5,98,0,0,191,192,5,111,0,0,192,193,5,114,0,0,193,194,
	5,100,0,0,194,195,5,101,0,0,195,196,5,114,0,0,196,197,5,87,0,0,197,198,
	5,105,0,0,198,199,5,100,0,0,199,200,5,116,0,0,200,201,5,104,0,0,201,44,
	1,0,0,0,202,203,5,98,0,0,203,204,5,111,0,0,204,205,5,114,0,0,205,206,5,
	100,0,0,206,207,5,101,0,0,207,208,5,114,0,0,208,209,5,67,0,0,209,210,5,
	111,0,0,210,211,5,108,0,0,211,212,5,111,0,0,212,213,5,114,0,0,213,46,1,
	0,0,0,214,215,5,98,0,0,215,216,5,111,0,0,216,217,5,114,0,0,217,218,5,100,
	0,0,218,219,5,101,0,0,219,220,5,114,0,0,220,221,5,65,0,0,221,222,5,108,
	0,0,222,223,5,112,0,0,223,224,5,104,0,0,224,225,5,97,0,0,225,48,1,0,0,0,
	226,227,5,102,0,0,227,228,5,111,0,0,228,229,5,110,0,0,229,230,5,116,0,0,
	230,231,5,83,0,0,231,232,5,105,0,0,232,233,5,122,0,0,233,234,5,101,0,0,
	234,50,1,0,0,0,235,236,5,102,0,0,236,237,5,111,0,0,237,238,5,110,0,0,238,
	239,5,116,0,0,239,240,5,67,0,0,240,241,5,111,0,0,241,242,5,108,0,0,242,
	243,5,111,0,0,243,244,5,114,0,0,244,52,1,0,0,0,245,246,5,44,0,0,246,54,
	1,0,0,0,247,248,5,59,0,0,248,56,1,0,0,0,249,250,5,34,0,0,250,251,1,0,0,
	0,251,252,6,27,0,0,252,58,1,0,0,0,253,254,5,47,0,0,254,255,5,47,0,0,255,
	256,1,0,0,0,256,257,6,28,1,0,257,60,1,0,0,0,258,260,7,0,0,0,259,258,1,0,
	0,0,260,261,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,62,1,0,0,0,263,
	264,7,1,0,0,264,64,1,0,0,0,265,266,7,2,0,0,266,267,1,0,0,0,267,268,6,31,
	2,0,268,66,1,0,0,0,269,270,9,0,0,0,270,68,1,0,0,0,271,272,5,34,0,0,272,
	273,1,0,0,0,273,274,6,33,3,0,274,70,1,0,0,0,275,276,9,0,0,0,276,72,1,0,
	0,0,277,278,7,1,0,0,278,279,1,0,0,0,279,280,6,35,3,0,280,74,1,0,0,0,281,
	282,9,0,0,0,282,76,1,0,0,0,5,0,1,2,259,261,4,5,1,0,5,2,0,6,0,0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RMGLLexer.__ATN) {
			RMGLLexer.__ATN = new ATNDeserializer().deserialize(RMGLLexer._serializedATN);
		}

		return RMGLLexer.__ATN;
	}


	static DecisionsToDFA = RMGLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}