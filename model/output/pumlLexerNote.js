// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/pumlLexerNote.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010\u00f9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0006\u000f\u00b8\n\u000f\r\u000f\u000e",
    "\u000f\u00b9\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003",
    ",\u0003,\u0003-\u0003-\u0005-\u00f8\n-\u0002\u0002.\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0002!\u0002",
    "#\u0002%\u0002\'\u0002)\u0002+\u0002-\u0002/\u00021\u00023\u00025\u0002",
    "7\u00029\u0002;\u0002=\u0002?\u0002A\u0002C\u0002E\u0002G\u0002I\u0002",
    "K\u0002M\u0002O\u0002Q\u0002S\u0002U\u0002W\u0002Y\u0002\u0003\u0002",
    "!\u0004\u0002\u000b\u000b\"\"\u0004\u0002C\\c|\u0003\u00022;\u0005\u0002",
    "2;CHch\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002F",
    "Fff\u0004\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj",
    "\u0004\u0002KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004",
    "\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002",
    "SSss\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWw",
    "w\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004",
    "\u0002\\\\||\u0006\u0002#1<B]b}\u0080\u0002\u00dc\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0003[\u0003",
    "\u0002\u0002\u0002\u0005`\u0003\u0002\u0002\u0002\u0007f\u0003\u0002",
    "\u0002\u0002\tl\u0003\u0002\u0002\u0002\u000bq\u0003\u0002\u0002\u0002",
    "\rw\u0003\u0002\u0002\u0002\u000f|\u0003\u0002\u0002\u0002\u0011\u0084",
    "\u0003\u0002\u0002\u0002\u0013\u008d\u0003\u0002\u0002\u0002\u0015\u0096",
    "\u0003\u0002\u0002\u0002\u0017\u009f\u0003\u0002\u0002\u0002\u0019\u00a9",
    "\u0003\u0002\u0002\u0002\u001b\u00b3\u0003\u0002\u0002\u0002\u001d\u00b7",
    "\u0003\u0002\u0002\u0002\u001f\u00bb\u0003\u0002\u0002\u0002!\u00bd",
    "\u0003\u0002\u0002\u0002#\u00bf\u0003\u0002\u0002\u0002%\u00c1\u0003",
    "\u0002\u0002\u0002\'\u00c3\u0003\u0002\u0002\u0002)\u00c5\u0003\u0002",
    "\u0002\u0002+\u00c7\u0003\u0002\u0002\u0002-\u00c9\u0003\u0002\u0002",
    "\u0002/\u00cb\u0003\u0002\u0002\u00021\u00cd\u0003\u0002\u0002\u0002",
    "3\u00cf\u0003\u0002\u0002\u00025\u00d1\u0003\u0002\u0002\u00027\u00d3",
    "\u0003\u0002\u0002\u00029\u00d5\u0003\u0002\u0002\u0002;\u00d7\u0003",
    "\u0002\u0002\u0002=\u00d9\u0003\u0002\u0002\u0002?\u00db\u0003\u0002",
    "\u0002\u0002A\u00dd\u0003\u0002\u0002\u0002C\u00df\u0003\u0002\u0002",
    "\u0002E\u00e1\u0003\u0002\u0002\u0002G\u00e3\u0003\u0002\u0002\u0002",
    "I\u00e5\u0003\u0002\u0002\u0002K\u00e7\u0003\u0002\u0002\u0002M\u00e9",
    "\u0003\u0002\u0002\u0002O\u00eb\u0003\u0002\u0002\u0002Q\u00ed\u0003",
    "\u0002\u0002\u0002S\u00ef\u0003\u0002\u0002\u0002U\u00f1\u0003\u0002",
    "\u0002\u0002W\u00f3\u0003\u0002\u0002\u0002Y\u00f7\u0003\u0002\u0002",
    "\u0002[\\\u0005? \u0002\\]\u0005A!\u0002]^\u0005K&\u0002^_\u0005-\u0017",
    "\u0002_\u0004\u0003\u0002\u0002\u0002`a\u0005G$\u0002ab\u0005? \u0002",
    "bc\u0005A!\u0002cd\u0005K&\u0002de\u0005-\u0017\u0002e\u0006\u0003\u0002",
    "\u0002\u0002fg\u00053\u001a\u0002gh\u0005? \u0002hi\u0005A!\u0002ij",
    "\u0005K&\u0002jk\u0005-\u0017\u0002k\b\u0003\u0002\u0002\u0002lm\u0005",
    ";\u001e\u0002mn\u0005-\u0017\u0002no\u0005/\u0018\u0002op\u0005K&\u0002",
    "p\n\u0003\u0002\u0002\u0002qr\u0005G$\u0002rs\u00055\u001b\u0002st\u0005",
    "1\u0019\u0002tu\u00053\u001a\u0002uv\u0005K&\u0002v\f\u0003\u0002\u0002",
    "\u0002wx\u0005A!\u0002xy\u0005O(\u0002yz\u0005-\u0017\u0002z{\u0005",
    "G$\u0002{\u000e\u0003\u0002\u0002\u0002|}\u0005-\u0017\u0002}~\u0005",
    "? \u0002~\u007f\u0005+\u0016\u0002\u007f\u0080\u0005? \u0002\u0080\u0081",
    "\u0005A!\u0002\u0081\u0082\u0005K&\u0002\u0082\u0083\u0005-\u0017\u0002",
    "\u0083\u0010\u0003\u0002\u0002\u0002\u0084\u0085\u0005-\u0017\u0002",
    "\u0085\u0086\u0005? \u0002\u0086\u0087\u0005+\u0016\u0002\u0087\u0088",
    "\u0005G$\u0002\u0088\u0089\u0005? \u0002\u0089\u008a\u0005A!\u0002\u008a",
    "\u008b\u0005K&\u0002\u008b\u008c\u0005-\u0017\u0002\u008c\u0012\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0005-\u0017\u0002\u008e\u008f\u0005",
    "? \u0002\u008f\u0090\u0005+\u0016\u0002\u0090\u0091\u00053\u001a\u0002",
    "\u0091\u0092\u0005? \u0002\u0092\u0093\u0005A!\u0002\u0093\u0094\u0005",
    "K&\u0002\u0094\u0095\u0005-\u0017\u0002\u0095\u0014\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0005-\u0017\u0002\u0097\u0098\u0005? \u0002\u0098",
    "\u0099\u0005+\u0016\u0002\u0099\u009a\u0005\u001d\u000f\u0002\u009a",
    "\u009b\u0005? \u0002\u009b\u009c\u0005A!\u0002\u009c\u009d\u0005K&\u0002",
    "\u009d\u009e\u0005-\u0017\u0002\u009e\u0016\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0005-\u0017\u0002\u00a0\u00a1\u0005? \u0002\u00a1\u00a2",
    "\u0005+\u0016\u0002\u00a2\u00a3\u0005\u001d\u000f\u0002\u00a3\u00a4",
    "\u0005G$\u0002\u00a4\u00a5\u0005? \u0002\u00a5\u00a6\u0005A!\u0002\u00a6",
    "\u00a7\u0005K&\u0002\u00a7\u00a8\u0005-\u0017\u0002\u00a8\u0018\u0003",
    "\u0002\u0002\u0002\u00a9\u00aa\u0005-\u0017\u0002\u00aa\u00ab\u0005",
    "? \u0002\u00ab\u00ac\u0005+\u0016\u0002\u00ac\u00ad\u0005\u001d\u000f",
    "\u0002\u00ad\u00ae\u00053\u001a\u0002\u00ae\u00af\u0005? \u0002\u00af",
    "\u00b0\u0005A!\u0002\u00b0\u00b1\u0005K&\u0002\u00b1\u00b2\u0005-\u0017",
    "\u0002\u00b2\u001a\u0003\u0002\u0002\u0002\u00b3\u00b4\u0005A!\u0002",
    "\u00b4\u00b5\u0005/\u0018\u0002\u00b5\u001c\u0003\u0002\u0002\u0002",
    "\u00b6\u00b8\t\u0002\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002",
    "\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u001e\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\t\u0003\u0002\u0002\u00bc \u0003\u0002\u0002\u0002\u00bd",
    "\u00be\t\u0004\u0002\u0002\u00be\"\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\t\u0005\u0002\u0002\u00c0$\u0003\u0002\u0002\u0002\u00c1\u00c2\t\u0006",
    "\u0002\u0002\u00c2&\u0003\u0002\u0002\u0002\u00c3\u00c4\t\u0007\u0002",
    "\u0002\u00c4(\u0003\u0002\u0002\u0002\u00c5\u00c6\t\b\u0002\u0002\u00c6",
    "*\u0003\u0002\u0002\u0002\u00c7\u00c8\t\t\u0002\u0002\u00c8,\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\t\n\u0002\u0002\u00ca.\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\t\u000b\u0002\u0002\u00cc0\u0003\u0002\u0002\u0002\u00cd",
    "\u00ce\t\f\u0002\u0002\u00ce2\u0003\u0002\u0002\u0002\u00cf\u00d0\t",
    "\r\u0002\u0002\u00d04\u0003\u0002\u0002\u0002\u00d1\u00d2\t\u000e\u0002",
    "\u0002\u00d26\u0003\u0002\u0002\u0002\u00d3\u00d4\t\u000f\u0002\u0002",
    "\u00d48\u0003\u0002\u0002\u0002\u00d5\u00d6\t\u0010\u0002\u0002\u00d6",
    ":\u0003\u0002\u0002\u0002\u00d7\u00d8\t\u0011\u0002\u0002\u00d8<\u0003",
    "\u0002\u0002\u0002\u00d9\u00da\t\u0012\u0002\u0002\u00da>\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\t\u0013\u0002\u0002\u00dc@\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\t\u0014\u0002\u0002\u00deB\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\t\u0015\u0002\u0002\u00e0D\u0003\u0002\u0002\u0002\u00e1",
    "\u00e2\t\u0016\u0002\u0002\u00e2F\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\t\u0017\u0002\u0002\u00e4H\u0003\u0002\u0002\u0002\u00e5\u00e6\t\u0018",
    "\u0002\u0002\u00e6J\u0003\u0002\u0002\u0002\u00e7\u00e8\t\u0019\u0002",
    "\u0002\u00e8L\u0003\u0002\u0002\u0002\u00e9\u00ea\t\u001a\u0002\u0002",
    "\u00eaN\u0003\u0002\u0002\u0002\u00eb\u00ec\t\u001b\u0002\u0002\u00ec",
    "P\u0003\u0002\u0002\u0002\u00ed\u00ee\t\u001c\u0002\u0002\u00eeR\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\t\u001d\u0002\u0002\u00f0T\u0003\u0002",
    "\u0002\u0002\u00f1\u00f2\t\u001e\u0002\u0002\u00f2V\u0003\u0002\u0002",
    "\u0002\u00f3\u00f4\t\u001f\u0002\u0002\u00f4X\u0003\u0002\u0002\u0002",
    "\u00f5\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f8\t \u0002\u0002\u00f7",
    "\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8",
    "Z\u0003\u0002\u0002\u0002\u0005\u0002\u00b9\u00f7\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function pumlLexerNote(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

pumlLexerNote.prototype = Object.create(antlr4.Lexer.prototype);
pumlLexerNote.prototype.constructor = pumlLexerNote;

Object.defineProperty(pumlLexerNote.prototype, "atn", {
        get : function() {
                return atn;
        }
});

pumlLexerNote.EOF = antlr4.Token.EOF;
pumlLexerNote.NOTE = 1;
pumlLexerNote.RNOTE = 2;
pumlLexerNote.HNOTE = 3;
pumlLexerNote.LEFT = 4;
pumlLexerNote.RIGHT = 5;
pumlLexerNote.OVER = 6;
pumlLexerNote.ENDNOTE = 7;
pumlLexerNote.ENDRNOTE = 8;
pumlLexerNote.ENDHNOTE = 9;
pumlLexerNote.END_NOTE = 10;
pumlLexerNote.END_RNOTE = 11;
pumlLexerNote.END_HNOTE = 12;
pumlLexerNote.OF = 13;
pumlLexerNote.SPACE = 14;

pumlLexerNote.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pumlLexerNote.prototype.modeNames = [ "DEFAULT_MODE" ];

pumlLexerNote.prototype.literalNames = [  ];

pumlLexerNote.prototype.symbolicNames = [ null, "NOTE", "RNOTE", "HNOTE", 
                                          "LEFT", "RIGHT", "OVER", "ENDNOTE", 
                                          "ENDRNOTE", "ENDHNOTE", "END_NOTE", 
                                          "END_RNOTE", "END_HNOTE", "OF", 
                                          "SPACE" ];

pumlLexerNote.prototype.ruleNames = [ "NOTE", "RNOTE", "HNOTE", "LEFT", 
                                      "RIGHT", "OVER", "ENDNOTE", "ENDRNOTE", 
                                      "ENDHNOTE", "END_NOTE", "END_RNOTE", 
                                      "END_HNOTE", "OF", "SPACE", "LETTERS", 
                                      "DIGITS", "HEXDIGITS", "A", "B", "C", 
                                      "D", "E", "F", "G", "H", "I", "J", 
                                      "K", "L", "M", "N", "O", "P", "Q", 
                                      "R", "S", "T", "U", "V", "W", "X", 
                                      "Y", "Z", "SYMBOL" ];

pumlLexerNote.prototype.grammarFileName = "pumlLexerNote.g4";



exports.pumlLexerNote = pumlLexerNote;
