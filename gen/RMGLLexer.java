// Generated from /Users/nijiaxin/Codes/Dahongpao/src/grammar/g4/RMGLLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class RMGLLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Rect=1, Circle=2, X=3, Y=4, W=5, H=6, Angle=7, Color=8, Text=9, Alpha=10, 
		BorderWidth=11, BorderColor=12, BorderAlpha=13, Comma=14, Semicolon=15, 
		Quotation=16, TokenChar=17, NL=18, Space=19, Char=20, AnnotationQuotation=21, 
		AnnotationChar=22;
	public static final int
		ANNOTATION_MODE=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "ANNOTATION_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"Rect", "Circle", "X", "Y", "W", "H", "Angle", "Color", "Text", "Alpha", 
			"BorderWidth", "BorderColor", "BorderAlpha", "Comma", "Semicolon", "Quotation", 
			"TokenChar", "NL", "Space", "Char", "AnnotationQuotation", "AnnotationChar"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Rect'", "'Circle'", "'x'", "'y'", "'w'", "'h'", "'angle'", "'color'", 
			"'text'", "'alpha'", "'borderWidth'", "'borderColor'", "'borderAlpha'", 
			"','", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Rect", "Circle", "X", "Y", "W", "H", "Angle", "Color", "Text", 
			"Alpha", "BorderWidth", "BorderColor", "BorderAlpha", "Comma", "Semicolon", 
			"Quotation", "TokenChar", "NL", "Space", "Char", "AnnotationQuotation", 
			"AnnotationChar"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public RMGLLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "RMGLLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0016\u0098\u0006\uffff\uffff\u0006\uffff\uffff\u0002\u0000"+
		"\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003"+
		"\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006"+
		"\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002"+
		"\n\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002"+
		"\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002"+
		"\u0011\u0007\u0011\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002"+
		"\u0014\u0007\u0014\u0002\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0004\u0010\u0087\b\u0010\u000b\u0010\f\u0010\u0088\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0015\u0001\u0015\u0000\u0000\u0016\u0002\u0001\u0004\u0002\u0006\u0003"+
		"\b\u0004\n\u0005\f\u0006\u000e\u0007\u0010\b\u0012\t\u0014\n\u0016\u000b"+
		"\u0018\f\u001a\r\u001c\u000e\u001e\u000f \u0010\"\u0011$\u0012&\u0013"+
		"(\u0014*\u0015,\u0016\u0002\u0000\u0001\u0003\u0005\u000009AZ__az\u4e00"+
		"\u8000\u9fa5\u0002\u0000\n\n\r\r\u0002\u0000\t\t  \u0097\u0000\u0002\u0001"+
		"\u0000\u0000\u0000\u0000\u0004\u0001\u0000\u0000\u0000\u0000\u0006\u0001"+
		"\u0000\u0000\u0000\u0000\b\u0001\u0000\u0000\u0000\u0000\n\u0001\u0000"+
		"\u0000\u0000\u0000\f\u0001\u0000\u0000\u0000\u0000\u000e\u0001\u0000\u0000"+
		"\u0000\u0000\u0010\u0001\u0000\u0000\u0000\u0000\u0012\u0001\u0000\u0000"+
		"\u0000\u0000\u0014\u0001\u0000\u0000\u0000\u0000\u0016\u0001\u0000\u0000"+
		"\u0000\u0000\u0018\u0001\u0000\u0000\u0000\u0000\u001a\u0001\u0000\u0000"+
		"\u0000\u0000\u001c\u0001\u0000\u0000\u0000\u0000\u001e\u0001\u0000\u0000"+
		"\u0000\u0000 \u0001\u0000\u0000\u0000\u0000\"\u0001\u0000\u0000\u0000"+
		"\u0000$\u0001\u0000\u0000\u0000\u0000&\u0001\u0000\u0000\u0000\u0000("+
		"\u0001\u0000\u0000\u0000\u0001*\u0001\u0000\u0000\u0000\u0001,\u0001\u0000"+
		"\u0000\u0000\u0002.\u0001\u0000\u0000\u0000\u00043\u0001\u0000\u0000\u0000"+
		"\u0006:\u0001\u0000\u0000\u0000\b<\u0001\u0000\u0000\u0000\n>\u0001\u0000"+
		"\u0000\u0000\f@\u0001\u0000\u0000\u0000\u000eB\u0001\u0000\u0000\u0000"+
		"\u0010H\u0001\u0000\u0000\u0000\u0012N\u0001\u0000\u0000\u0000\u0014S"+
		"\u0001\u0000\u0000\u0000\u0016Y\u0001\u0000\u0000\u0000\u0018e\u0001\u0000"+
		"\u0000\u0000\u001aq\u0001\u0000\u0000\u0000\u001c}\u0001\u0000\u0000\u0000"+
		"\u001e\u007f\u0001\u0000\u0000\u0000 \u0081\u0001\u0000\u0000\u0000\""+
		"\u0086\u0001\u0000\u0000\u0000$\u008a\u0001\u0000\u0000\u0000&\u008c\u0001"+
		"\u0000\u0000\u0000(\u0090\u0001\u0000\u0000\u0000*\u0092\u0001\u0000\u0000"+
		"\u0000,\u0096\u0001\u0000\u0000\u0000./\u0005R\u0000\u0000/0\u0005e\u0000"+
		"\u000001\u0005c\u0000\u000012\u0005t\u0000\u00002\u0003\u0001\u0000\u0000"+
		"\u000034\u0005C\u0000\u000045\u0005i\u0000\u000056\u0005r\u0000\u0000"+
		"67\u0005c\u0000\u000078\u0005l\u0000\u000089\u0005e\u0000\u00009\u0005"+
		"\u0001\u0000\u0000\u0000:;\u0005x\u0000\u0000;\u0007\u0001\u0000\u0000"+
		"\u0000<=\u0005y\u0000\u0000=\t\u0001\u0000\u0000\u0000>?\u0005w\u0000"+
		"\u0000?\u000b\u0001\u0000\u0000\u0000@A\u0005h\u0000\u0000A\r\u0001\u0000"+
		"\u0000\u0000BC\u0005a\u0000\u0000CD\u0005n\u0000\u0000DE\u0005g\u0000"+
		"\u0000EF\u0005l\u0000\u0000FG\u0005e\u0000\u0000G\u000f\u0001\u0000\u0000"+
		"\u0000HI\u0005c\u0000\u0000IJ\u0005o\u0000\u0000JK\u0005l\u0000\u0000"+
		"KL\u0005o\u0000\u0000LM\u0005r\u0000\u0000M\u0011\u0001\u0000\u0000\u0000"+
		"NO\u0005t\u0000\u0000OP\u0005e\u0000\u0000PQ\u0005x\u0000\u0000QR\u0005"+
		"t\u0000\u0000R\u0013\u0001\u0000\u0000\u0000ST\u0005a\u0000\u0000TU\u0005"+
		"l\u0000\u0000UV\u0005p\u0000\u0000VW\u0005h\u0000\u0000WX\u0005a\u0000"+
		"\u0000X\u0015\u0001\u0000\u0000\u0000YZ\u0005b\u0000\u0000Z[\u0005o\u0000"+
		"\u0000[\\\u0005r\u0000\u0000\\]\u0005d\u0000\u0000]^\u0005e\u0000\u0000"+
		"^_\u0005r\u0000\u0000_`\u0005W\u0000\u0000`a\u0005i\u0000\u0000ab\u0005"+
		"d\u0000\u0000bc\u0005t\u0000\u0000cd\u0005h\u0000\u0000d\u0017\u0001\u0000"+
		"\u0000\u0000ef\u0005b\u0000\u0000fg\u0005o\u0000\u0000gh\u0005r\u0000"+
		"\u0000hi\u0005d\u0000\u0000ij\u0005e\u0000\u0000jk\u0005r\u0000\u0000"+
		"kl\u0005C\u0000\u0000lm\u0005o\u0000\u0000mn\u0005l\u0000\u0000no\u0005"+
		"o\u0000\u0000op\u0005r\u0000\u0000p\u0019\u0001\u0000\u0000\u0000qr\u0005"+
		"b\u0000\u0000rs\u0005o\u0000\u0000st\u0005r\u0000\u0000tu\u0005d\u0000"+
		"\u0000uv\u0005e\u0000\u0000vw\u0005r\u0000\u0000wx\u0005A\u0000\u0000"+
		"xy\u0005l\u0000\u0000yz\u0005p\u0000\u0000z{\u0005h\u0000\u0000{|\u0005"+
		"a\u0000\u0000|\u001b\u0001\u0000\u0000\u0000}~\u0005,\u0000\u0000~\u001d"+
		"\u0001\u0000\u0000\u0000\u007f\u0080\u0005;\u0000\u0000\u0080\u001f\u0001"+
		"\u0000\u0000\u0000\u0081\u0082\u0005\"\u0000\u0000\u0082\u0083\u0001\u0000"+
		"\u0000\u0000\u0083\u0084\u0006\u000f\u0000\u0000\u0084!\u0001\u0000\u0000"+
		"\u0000\u0085\u0087\u0007\u0000\u0000\u0000\u0086\u0085\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000"+
		"\u0000\u0088\u0089\u0001\u0000\u0000\u0000\u0089#\u0001\u0000\u0000\u0000"+
		"\u008a\u008b\u0007\u0001\u0000\u0000\u008b%\u0001\u0000\u0000\u0000\u008c"+
		"\u008d\u0007\u0002\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e"+
		"\u008f\u0006\u0012\u0001\u0000\u008f\'\u0001\u0000\u0000\u0000\u0090\u0091"+
		"\u0005.\u0000\u0000\u0091)\u0001\u0000\u0000\u0000\u0092\u0093\u0005\""+
		"\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0095\u0006\u0014"+
		"\u0002\u0000\u0095+\u0001\u0000\u0000\u0000\u0096\u0097\u0005.\u0000\u0000"+
		"\u0097-\u0001\u0000\u0000\u0000\u0003\u0000\u0001\u0088\u0003\u0005\u0001"+
		"\u0000\u0006\u0000\u0000\u0004\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}