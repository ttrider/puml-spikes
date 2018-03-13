// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlListener = require('./pumlListener').pumlListener;
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003,\u01be\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0003\u0002\u0006\u0002^\n\u0002\r\u0002\u000e",
    "\u0002_\u0003\u0003\u0003\u0003\u0007\u0003d\n\u0003\f\u0003\u000e\u0003",
    "g\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003k\n\u0003\f\u0003\u000e",
    "\u0003n\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u0005t\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0007\u0006",
    "y\n\u0006\f\u0006\u000e\u0006|\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0082\n\u0007\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u008e",
    "\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u0095\n\u000b\u0003\u000b\u0005\u000b\u0098\n\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u009c\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a5\n\f\u0003\f\u0005\f",
    "\u00a8\n\f\u0003\f\u0003\f\u0005\f\u00ac\n\f\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b5\n\r\u0003\r\u0005\r\u00b8",
    "\n\r\u0003\r\u0003\r\u0005\r\u00bc\n\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c5\n\u000e",
    "\u0003\u000e\u0005\u000e\u00c8\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00cd\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00d7\n\u000f\u0003\u000f\u0005\u000f\u00da\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00df\n\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00e9\n\u0010\u0003\u0010\u0005\u0010\u00ec\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00f1\n\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00fc\n\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u0100\n\u0011\f\u0011\u000e\u0011\u0103\u000b\u0011",
    "\u0005\u0011\u0105\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u010d\n\u0011\u0003\u0011",
    "\u0003\u0011\u0007\u0011\u0111\n\u0011\f\u0011\u000e\u0011\u0114\u000b",
    "\u0011\u0005\u0011\u0116\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u011c\n\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u0120\n\u0011\f\u0011\u000e\u0011\u0123\u000b\u0011\u0005\u0011",
    "\u0125\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0007\u0015\u012e\n\u0015\f\u0015\u000e",
    "\u0015\u0131\u000b\u0015\u0003\u0016\u0007\u0016\u0134\n\u0016\f\u0016",
    "\u000e\u0016\u0137\u000b\u0016\u0003\u0017\u0007\u0017\u013a\n\u0017",
    "\f\u0017\u000e\u0017\u013d\u000b\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0146",
    "\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u014e\n\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u0152\n\u0018\u0003\u0018\u0005\u0018\u0155\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005 \u0173\n \u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0005\"\u017d\n",
    "\"\u0003#\u0003#\u0003#\u0005#\u0182\n#\u0003$\u0003$\u0003%\u0003%",
    "\u0003&\u0003&\u0005&\u018a\n&\u0003&\u0003&\u0005&\u018e\n&\u0003&",
    "\u0003&\u0005&\u0192\n&\u0003&\u0003&\u0005&\u0196\n&\u0003&\u0003&",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u019e\n\'\u0003(\u0003(\u0003",
    ")\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0007,\u01aa\n,\f",
    ",\u000e,\u01ad\u000b,\u0003-\u0003-\u0003-\u0007-\u01b2\n-\f-\u000e",
    "-\u01b5\u000b-\u0003-\u0003-\u0003.\u0006.\u01ba\n.\r.\u000e.\u01bb",
    "\u0003.\u0007z\u012f\u0135\u013b\u01bb\u0002/\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<>@BDFHJLNPRTVXZ\u0002\t\u0004\u0002\u0018\u0018\u001f\u001f\u0003",
    "\u0002\u001d\u001e\u0004\u0002\u0018\u0018\u001a\u001a\u0004\u0002&",
    "&))\u0003\u0002&+\u0005\u0002\u0018\u0018\u001a\u001a\u001f\u001f\u0003",
    "\u0002\u0016\u0016\u0002\u01d4\u0002]\u0003\u0002\u0002\u0002\u0004",
    "a\u0003\u0002\u0002\u0002\u0006o\u0003\u0002\u0002\u0002\bq\u0003\u0002",
    "\u0002\u0002\nz\u0003\u0002\u0002\u0002\f\u0081\u0003\u0002\u0002\u0002",
    "\u000e\u0083\u0003\u0002\u0002\u0002\u0010\u0085\u0003\u0002\u0002\u0002",
    "\u0012\u008d\u0003\u0002\u0002\u0002\u0014\u008f\u0003\u0002\u0002\u0002",
    "\u0016\u009f\u0003\u0002\u0002\u0002\u0018\u00af\u0003\u0002\u0002\u0002",
    "\u001a\u00bf\u0003\u0002\u0002\u0002\u001c\u00d1\u0003\u0002\u0002\u0002",
    "\u001e\u00e3\u0003\u0002\u0002\u0002 \u0124\u0003\u0002\u0002\u0002",
    "\"\u0126\u0003\u0002\u0002\u0002$\u0128\u0003\u0002\u0002\u0002&\u012a",
    "\u0003\u0002\u0002\u0002(\u012f\u0003\u0002\u0002\u0002*\u0135\u0003",
    "\u0002\u0002\u0002,\u013b\u0003\u0002\u0002\u0002.\u0145\u0003\u0002",
    "\u0002\u00020\u0158\u0003\u0002\u0002\u00022\u015a\u0003\u0002\u0002",
    "\u00024\u015c\u0003\u0002\u0002\u00026\u015e\u0003\u0002\u0002\u0002",
    "8\u0160\u0003\u0002\u0002\u0002:\u0162\u0003\u0002\u0002\u0002<\u0164",
    "\u0003\u0002\u0002\u0002>\u0172\u0003\u0002\u0002\u0002@\u0174\u0003",
    "\u0002\u0002\u0002B\u017c\u0003\u0002\u0002\u0002D\u0181\u0003\u0002",
    "\u0002\u0002F\u0183\u0003\u0002\u0002\u0002H\u0185\u0003\u0002\u0002",
    "\u0002J\u0187\u0003\u0002\u0002\u0002L\u019d\u0003\u0002\u0002\u0002",
    "N\u019f\u0003\u0002\u0002\u0002P\u01a1\u0003\u0002\u0002\u0002R\u01a3",
    "\u0003\u0002\u0002\u0002T\u01a5\u0003\u0002\u0002\u0002V\u01a7\u0003",
    "\u0002\u0002\u0002X\u01ae\u0003\u0002\u0002\u0002Z\u01b9\u0003\u0002",
    "\u0002\u0002\\^\u0005\u0004\u0003\u0002]\\\u0003\u0002\u0002\u0002^",
    "_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`\u0003\u0003\u0002\u0002\u0002ae\u0005\u0006\u0004\u0002bd\u0005",
    "\f\u0007\u0002cb\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002e",
    "c\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fh\u0003\u0002\u0002",
    "\u0002ge\u0003\u0002\u0002\u0002hl\u0005\b\u0005\u0002ik\u0007\u001a",
    "\u0002\u0002ji\u0003\u0002\u0002\u0002kn\u0003\u0002\u0002\u0002lj\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002m\u0005\u0003\u0002\u0002",
    "\u0002nl\u0003\u0002\u0002\u0002op\u0007\u0004\u0002\u0002p\u0007\u0003",
    "\u0002\u0002\u0002qs\u0007\u0005\u0002\u0002rt\u0007\u0018\u0002\u0002",
    "sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uv\u0007\u001a\u0002\u0002v\t\u0003\u0002\u0002\u0002wy\t\u0002",
    "\u0002\u0002xw\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002z{\u0003",
    "\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{\u000b\u0003\u0002\u0002",
    "\u0002|z\u0003\u0002\u0002\u0002}\u0082\u0005\u0010\t\u0002~\u0082\u0005",
    "\u0012\n\u0002\u007f\u0082\u0005.\u0018\u0002\u0080\u0082\u0005J&\u0002",
    "\u0081}\u0003\u0002\u0002\u0002\u0081~\u0003\u0002\u0002\u0002\u0081",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082",
    "\r\u0003\u0002\u0002\u0002\u0083\u0084\t\u0003\u0002\u0002\u0084\u000f",
    "\u0003\u0002\u0002\u0002\u0085\u0086\t\u0004\u0002\u0002\u0086\u0011",
    "\u0003\u0002\u0002\u0002\u0087\u008e\u0005\u0014\u000b\u0002\u0088\u008e",
    "\u0005\u0016\f\u0002\u0089\u008e\u0005\u0018\r\u0002\u008a\u008e\u0005",
    "\u001a\u000e\u0002\u008b\u008e\u0005\u001c\u000f\u0002\u008c\u008e\u0005",
    "\u001e\u0010\u0002\u008d\u0087\u0003\u0002\u0002\u0002\u008d\u0088\u0003",
    "\u0002\u0002\u0002\u008d\u0089\u0003\u0002\u0002\u0002\u008d\u008a\u0003",
    "\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u0013\u0003\u0002\u0002\u0002\u008f\u0090\u0007",
    " \u0002\u0002\u0090\u0091\u0007\u0018\u0002\u0002\u0091\u0094\u0005",
    " \u0011\u0002\u0092\u0093\u0007\u0018\u0002\u0002\u0093\u0095\u0005",
    "\u000e\b\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003",
    "\u0002\u0002\u0002\u0095\u0097\u0003\u0002\u0002\u0002\u0096\u0098\u0007",
    "\u0018\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097\u0098\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009b\u0007",
    "\u0014\u0002\u0002\u009a\u009c\u0005(\u0015\u0002\u009b\u009a\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0007\u001a\u0002\u0002\u009e\u0015\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0007!\u0002\u0002\u00a0\u00a1\u0007",
    "\u0018\u0002\u0002\u00a1\u00a4\u0005 \u0011\u0002\u00a2\u00a3\u0007",
    "\u0018\u0002\u0002\u00a3\u00a5\u0005\u000e\b\u0002\u00a4\u00a2\u0003",
    "\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0003",
    "\u0002\u0002\u0002\u00a6\u00a8\u0007\u0018\u0002\u0002\u00a7\u00a6\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003",
    "\u0002\u0002\u0002\u00a9\u00ab\u0007\u0014\u0002\u0002\u00aa\u00ac\u0005",
    "(\u0015\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007",
    "\u001a\u0002\u0002\u00ae\u0017\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "\"\u0002\u0002\u00b0\u00b1\u0007\u0018\u0002\u0002\u00b1\u00b4\u0005",
    " \u0011\u0002\u00b2\u00b3\u0007\u0018\u0002\u0002\u00b3\u00b5\u0005",
    "\u000e\b\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003",
    "\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002\u00b6\u00b8\u0007",
    "\u0018\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bb\u0007",
    "\u0014\u0002\u0002\u00ba\u00bc\u0005(\u0015\u0002\u00bb\u00ba\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007\u001a\u0002\u0002\u00be\u0019\u0003",
    "\u0002\u0002\u0002\u00bf\u00c0\u0007 \u0002\u0002\u00c0\u00c1\u0007",
    "\u0018\u0002\u0002\u00c1\u00c4\u0005 \u0011\u0002\u00c2\u00c3\u0007",
    "\u0018\u0002\u0002\u00c3\u00c5\u0005\u000e\b\u0002\u00c4\u00c2\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c7\u0003",
    "\u0002\u0002\u0002\u00c6\u00c8\u0007\u0018\u0002\u0002\u00c7\u00c6\u0003",
    "\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0007\u001a\u0002\u0002\u00ca\u00cc\u0005",
    "*\u0016\u0002\u00cb\u00cd\u0007\u001a\u0002\u0002\u00cc\u00cb\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\t\u0005\u0002\u0002\u00cf\u00d0\u0007",
    "\u001a\u0002\u0002\u00d0\u001b\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007",
    "!\u0002\u0002\u00d2\u00d3\u0007\u0018\u0002\u0002\u00d3\u00d6\u0005",
    " \u0011\u0002\u00d4\u00d5\u0007\u0018\u0002\u0002\u00d5\u00d7\u0005",
    "\u000e\b\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003",
    "\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002\u00d8\u00da\u0007",
    "\u0018\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00d9\u00da\u0003",
    "\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dc\u0007",
    "\u001a\u0002\u0002\u00dc\u00de\u0005*\u0016\u0002\u00dd\u00df\u0007",
    "\u001a\u0002\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00de\u00df\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\t",
    "\u0006\u0002\u0002\u00e1\u00e2\u0007\u001a\u0002\u0002\u00e2\u001d\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\u0007\"\u0002\u0002\u00e4\u00e5\u0007",
    "\u0018\u0002\u0002\u00e5\u00e8\u0005 \u0011\u0002\u00e6\u00e7\u0007",
    "\u0018\u0002\u0002\u00e7\u00e9\u0005\u000e\b\u0002\u00e8\u00e6\u0003",
    "\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00eb\u0003",
    "\u0002\u0002\u0002\u00ea\u00ec\u0007\u0018\u0002\u0002\u00eb\u00ea\u0003",
    "\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003",
    "\u0002\u0002\u0002\u00ed\u00ee\u0007\u001a\u0002\u0002\u00ee\u00f0\u0005",
    "*\u0016\u0002\u00ef\u00f1\u0007\u001a\u0002\u0002\u00f0\u00ef\u0003",
    "\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003",
    "\u0002\u0002\u0002\u00f2\u00f3\t\u0006\u0002\u0002\u00f3\u00f4\u0007",
    "\u001a\u0002\u0002\u00f4\u001f\u0003\u0002\u0002\u0002\u00f5\u0104\u0005",
    "\"\u0012\u0002\u00f6\u00f7\u0007\u0018\u0002\u0002\u00f7\u00f8\u0007",
    ",\u0002\u0002\u00f8\u00f9\u0007\u0018\u0002\u0002\u00f9\u0101\u0005",
    ",\u0017\u0002\u00fa\u00fc\u0007\u0018\u0002\u0002\u00fb\u00fa\u0003",
    "\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0007\u0015\u0002\u0002\u00fe\u0100\u0005",
    ",\u0017\u0002\u00ff\u00fb\u0003\u0002\u0002\u0002\u0100\u0103\u0003",
    "\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102\u0105\u0003\u0002\u0002\u0002\u0103\u0101\u0003",
    "\u0002\u0002\u0002\u0104\u00f6\u0003\u0002\u0002\u0002\u0104\u0105\u0003",
    "\u0002\u0002\u0002\u0105\u0125\u0003\u0002\u0002\u0002\u0106\u0115\u0005",
    "$\u0013\u0002\u0107\u0108\u0007\u0018\u0002\u0002\u0108\u0109\u0007",
    ",\u0002\u0002\u0109\u010a\u0007\u0018\u0002\u0002\u010a\u0112\u0005",
    ",\u0017\u0002\u010b\u010d\u0007\u0018\u0002\u0002\u010c\u010b\u0003",
    "\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0003",
    "\u0002\u0002\u0002\u010e\u010f\u0007\u0015\u0002\u0002\u010f\u0111\u0005",
    ",\u0017\u0002\u0110\u010c\u0003\u0002\u0002\u0002\u0111\u0114\u0003",
    "\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0113\u0003",
    "\u0002\u0002\u0002\u0113\u0116\u0003\u0002\u0002\u0002\u0114\u0112\u0003",
    "\u0002\u0002\u0002\u0115\u0107\u0003\u0002\u0002\u0002\u0115\u0116\u0003",
    "\u0002\u0002\u0002\u0116\u0125\u0003\u0002\u0002\u0002\u0117\u0118\u0005",
    "&\u0014\u0002\u0118\u0119\u0007\u0018\u0002\u0002\u0119\u0121\u0005",
    ",\u0017\u0002\u011a\u011c\u0007\u0018\u0002\u0002\u011b\u011a\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u0007\u0015\u0002\u0002\u011e\u0120\u0005",
    ",\u0017\u0002\u011f\u011b\u0003\u0002\u0002\u0002\u0120\u0123\u0003",
    "\u0002\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0122\u0003",
    "\u0002\u0002\u0002\u0122\u0125\u0003\u0002\u0002\u0002\u0123\u0121\u0003",
    "\u0002\u0002\u0002\u0124\u00f5\u0003\u0002\u0002\u0002\u0124\u0106\u0003",
    "\u0002\u0002\u0002\u0124\u0117\u0003\u0002\u0002\u0002\u0125!\u0003",
    "\u0002\u0002\u0002\u0126\u0127\u0007$\u0002\u0002\u0127#\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0007#\u0002\u0002\u0129%\u0003\u0002\u0002",
    "\u0002\u012a\u012b\u0007%\u0002\u0002\u012b\'\u0003\u0002\u0002\u0002",
    "\u012c\u012e\t\u0002\u0002\u0002\u012d\u012c\u0003\u0002\u0002\u0002",
    "\u012e\u0131\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002",
    "\u012f\u012d\u0003\u0002\u0002\u0002\u0130)\u0003\u0002\u0002\u0002",
    "\u0131\u012f\u0003\u0002\u0002\u0002\u0132\u0134\t\u0007\u0002\u0002",
    "\u0133\u0132\u0003\u0002\u0002\u0002\u0134\u0137\u0003\u0002\u0002\u0002",
    "\u0135\u0136\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002",
    "\u0136+\u0003\u0002\u0002\u0002\u0137\u0135\u0003\u0002\u0002\u0002",
    "\u0138\u013a\t\u0002\u0002\u0002\u0139\u0138\u0003\u0002\u0002\u0002",
    "\u013a\u013d\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002",
    "\u013b\u0139\u0003\u0002\u0002\u0002\u013c-\u0003\u0002\u0002\u0002",
    "\u013d\u013b\u0003\u0002\u0002\u0002\u013e\u0146\u00050\u0019\u0002",
    "\u013f\u0146\u00052\u001a\u0002\u0140\u0146\u00054\u001b\u0002\u0141",
    "\u0146\u00056\u001c\u0002\u0142\u0146\u00058\u001d\u0002\u0143\u0146",
    "\u0005:\u001e\u0002\u0144\u0146\u0005<\u001f\u0002\u0145\u013e\u0003",
    "\u0002\u0002\u0002\u0145\u013f\u0003\u0002\u0002\u0002\u0145\u0140\u0003",
    "\u0002\u0002\u0002\u0145\u0141\u0003\u0002\u0002\u0002\u0145\u0142\u0003",
    "\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0145\u0144\u0003",
    "\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0148\u0007",
    "\u0018\u0002\u0002\u0148\u014d\u0005D#\u0002\u0149\u014a\u0007\u0018",
    "\u0002\u0002\u014a\u014b\u0007\u000e\u0002\u0002\u014b\u014c\u0007\u0018",
    "\u0002\u0002\u014c\u014e\u0005F$\u0002\u014d\u0149\u0003\u0002\u0002",
    "\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e\u0151\u0003\u0002\u0002",
    "\u0002\u014f\u0150\u0007\u0018\u0002\u0002\u0150\u0152\u0005\u000e\b",
    "\u0002\u0151\u014f\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002",
    "\u0002\u0152\u0154\u0003\u0002\u0002\u0002\u0153\u0155\u0007\u0018\u0002",
    "\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002",
    "\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0157\u0007\u001a\u0002",
    "\u0002\u0157/\u0003\u0002\u0002\u0002\u0158\u0159\u0007\u0006\u0002",
    "\u0002\u01591\u0003\u0002\u0002\u0002\u015a\u015b\u0007\u0007\u0002",
    "\u0002\u015b3\u0003\u0002\u0002\u0002\u015c\u015d\u0007\b\u0002\u0002",
    "\u015d5\u0003\u0002\u0002\u0002\u015e\u015f\u0007\t\u0002\u0002\u015f",
    "7\u0003\u0002\u0002\u0002\u0160\u0161\u0007\n\u0002\u0002\u01619\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u0007\u000b\u0002\u0002\u0163;\u0003",
    "\u0002\u0002\u0002\u0164\u0165\u0007\f\u0002\u0002\u0165=\u0003\u0002",
    "\u0002\u0002\u0166\u0167\u0005X-\u0002\u0167\u0168\u0007\u0018\u0002",
    "\u0002\u0168\u0169\u0007\r\u0002\u0002\u0169\u016a\u0007\u0018\u0002",
    "\u0002\u016a\u016b\u0005V,\u0002\u016b\u0173\u0003\u0002\u0002\u0002",
    "\u016c\u016d\u0005V,\u0002\u016d\u016e\u0007\u0018\u0002\u0002\u016e",
    "\u016f\u0007\r\u0002\u0002\u016f\u0170\u0007\u0018\u0002\u0002\u0170",
    "\u0171\u0005V,\u0002\u0171\u0173\u0003\u0002\u0002\u0002\u0172\u0166",
    "\u0003\u0002\u0002\u0002\u0172\u016c\u0003\u0002\u0002\u0002\u0173?",
    "\u0003\u0002\u0002\u0002\u0174\u0175\u0005V,\u0002\u0175\u0176\u0007",
    "\u0018\u0002\u0002\u0176\u0177\u0007\r\u0002\u0002\u0177\u0178\u0007",
    "\u0018\u0002\u0002\u0178\u0179\u0005X-\u0002\u0179A\u0003\u0002\u0002",
    "\u0002\u017a\u017d\u0005V,\u0002\u017b\u017d\u0005X-\u0002\u017c\u017a",
    "\u0003\u0002\u0002\u0002\u017c\u017b\u0003\u0002\u0002\u0002\u017dC",
    "\u0003\u0002\u0002\u0002\u017e\u0182\u0005B\"\u0002\u017f\u0182\u0005",
    "> \u0002\u0180\u0182\u0005@!\u0002\u0181\u017e\u0003\u0002\u0002\u0002",
    "\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0180\u0003\u0002\u0002\u0002",
    "\u0182E\u0003\u0002\u0002\u0002\u0183\u0184\u0005V,\u0002\u0184G\u0003",
    "\u0002\u0002\u0002\u0185\u0186\u0005D#\u0002\u0186I\u0003\u0002\u0002",
    "\u0002\u0187\u0189\u0005H%\u0002\u0188\u018a\u0007\u0018\u0002\u0002",
    "\u0189\u0188\u0003\u0002\u0002\u0002\u0189\u018a\u0003\u0002\u0002\u0002",
    "\u018a\u018b\u0003\u0002\u0002\u0002\u018b\u018d\u0005L\'\u0002\u018c",
    "\u018e\u0007\u0018\u0002\u0002\u018d\u018c\u0003\u0002\u0002\u0002\u018d",
    "\u018e\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018f",
    "\u0191\u0005H%\u0002\u0190\u0192\u0007\u0018\u0002\u0002\u0191\u0190",
    "\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0195",
    "\u0003\u0002\u0002\u0002\u0193\u0194\u0007\u0014\u0002\u0002\u0194\u0196",
    "\u0005Z.\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0195\u0196\u0003",
    "\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197\u0198\u0007",
    "\u001a\u0002\u0002\u0198K\u0003\u0002\u0002\u0002\u0199\u019e\u0005",
    "N(\u0002\u019a\u019e\u0005R*\u0002\u019b\u019e\u0005P)\u0002\u019c\u019e",
    "\u0005T+\u0002\u019d\u0199\u0003\u0002\u0002\u0002\u019d\u019a\u0003",
    "\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019d\u019c\u0003",
    "\u0002\u0002\u0002\u019eM\u0003\u0002\u0002\u0002\u019f\u01a0\u0007",
    "\u000f\u0002\u0002\u01a0O\u0003\u0002\u0002\u0002\u01a1\u01a2\u0007",
    "\u0010\u0002\u0002\u01a2Q\u0003\u0002\u0002\u0002\u01a3\u01a4\u0007",
    "\u0011\u0002\u0002\u01a4S\u0003\u0002\u0002\u0002\u01a5\u01a6\u0007",
    "\u0012\u0002\u0002\u01a6U\u0003\u0002\u0002\u0002\u01a7\u01ab\n\b\u0002",
    "\u0002\u01a8\u01aa\n\u0004\u0002\u0002\u01a9\u01a8\u0003\u0002\u0002",
    "\u0002\u01aa\u01ad\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002",
    "\u0002\u01ab\u01ac\u0003\u0002\u0002\u0002\u01acW\u0003\u0002\u0002",
    "\u0002\u01ad\u01ab\u0003\u0002\u0002\u0002\u01ae\u01b3\u0007\u0016\u0002",
    "\u0002\u01af\u01b2\n\b\u0002\u0002\u01b0\u01b2\u0007\u0017\u0002\u0002",
    "\u01b1\u01af\u0003\u0002\u0002\u0002\u01b1\u01b0\u0003\u0002\u0002\u0002",
    "\u01b2\u01b5\u0003\u0002\u0002\u0002\u01b3\u01b1\u0003\u0002\u0002\u0002",
    "\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4\u01b6\u0003\u0002\u0002\u0002",
    "\u01b5\u01b3\u0003\u0002\u0002\u0002\u01b6\u01b7\u0007\u0016\u0002\u0002",
    "\u01b7Y\u0003\u0002\u0002\u0002\u01b8\u01ba\t\u0002\u0002\u0002\u01b9",
    "\u01b8\u0003\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb",
    "\u01bc\u0003\u0002\u0002\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002\u01bc",
    "[\u0003\u0002\u0002\u00027_elsz\u0081\u008d\u0094\u0097\u009b\u00a4",
    "\u00a7\u00ab\u00b4\u00b7\u00bb\u00c4\u00c7\u00cc\u00d6\u00d9\u00de\u00e8",
    "\u00eb\u00f0\u00fb\u0101\u0104\u010c\u0112\u0115\u011b\u0121\u0124\u012f",
    "\u0135\u013b\u0145\u014d\u0151\u0154\u0172\u017c\u0181\u0189\u018d\u0191",
    "\u0195\u019d\u01ab\u01b1\u01b3\u01bb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", null, "'@enduml'", null, null, 
                     null, null, null, null, null, null, null, "'->'", "'<-'", 
                     "'-->'", "'<--'", "';'", "':'", "','", "'\"'", "'\\\"'" ];

var symbolicNames = [ null, "STARTUML", "STARTUMLLINE", "ENDUML", "PARTICIPANT", 
                      "ACTOR", "BOUNDARY", "CONTROL", "ENTITY", "DATABASE", 
                      "COLLECTIONS", "AS", "ORDER", "CONNECTOR_SINGLE_LEFT", 
                      "CONNECTOR_SINGLE_RIGHT", "CONNECTOR_DOUBLE_LEFT", 
                      "CONNECTOR_DOUBLE_RIGHT", "SEMICOLON", "COLON", "COMMA", 
                      "DBLQUOTE", "ESC_DBLQUOTE", "SPACE", "WS", "CR", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "HEX_COLORS", "NAMED_COLORS", 
                      "ANY", "NOTE", "RNOTE", "HNOTE", "LEFT", "RIGHT", 
                      "OVER", "ENDNOTE", "ENDRNOTE", "ENDHNOTE", "END_NOTE", 
                      "END_RNOTE", "END_HNOTE", "OF" ];

var ruleNames =  [ "document", "diagram", "startUml", "endUml", "digramName", 
                   "diagramItem", "color", "emptyLine", "note", "singleLineNote", 
                   "singleLineRNote", "singleLineHNote", "multiLineNote", 
                   "multiLineRNote", "multiLineHNote", "noteLocation", "noteLocationRight", 
                   "noteLocationLeft", "noteLocationOver", "noteTextLine", 
                   "noteTextLines", "noteAnchor", "declareParticipant", 
                   "declareDefaultParticipant", "declareActor", "declareBoundary", 
                   "declareControl", "declareEntity", "declareDatabase", 
                   "declareCollections", "declareTitleAsId", "declareIdAsTitle", 
                   "declareId", "declareParticipantIdAndTitle", "declareOrder", 
                   "sequenceMessageParticipant", "sequenceMessage", "connector", 
                   "connectorSolid", "connectorSolidReverse", "connectorDotted", 
                   "connectorDottedReverse", "identifier", "quotedIdentifier", 
                   "messageText" ];

function puml (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

puml.prototype = Object.create(antlr4.Parser.prototype);
puml.prototype.constructor = puml;

Object.defineProperty(puml.prototype, "atn", {
	get : function() {
		return atn;
	}
});

puml.EOF = antlr4.Token.EOF;
puml.STARTUML = 1;
puml.STARTUMLLINE = 2;
puml.ENDUML = 3;
puml.PARTICIPANT = 4;
puml.ACTOR = 5;
puml.BOUNDARY = 6;
puml.CONTROL = 7;
puml.ENTITY = 8;
puml.DATABASE = 9;
puml.COLLECTIONS = 10;
puml.AS = 11;
puml.ORDER = 12;
puml.CONNECTOR_SINGLE_LEFT = 13;
puml.CONNECTOR_SINGLE_RIGHT = 14;
puml.CONNECTOR_DOUBLE_LEFT = 15;
puml.CONNECTOR_DOUBLE_RIGHT = 16;
puml.SEMICOLON = 17;
puml.COLON = 18;
puml.COMMA = 19;
puml.DBLQUOTE = 20;
puml.ESC_DBLQUOTE = 21;
puml.SPACE = 22;
puml.WS = 23;
puml.CR = 24;
puml.SINGLE_LINE_COMMENT = 25;
puml.MULTI_LINE_COMMENT = 26;
puml.HEX_COLORS = 27;
puml.NAMED_COLORS = 28;
puml.ANY = 29;
puml.NOTE = 30;
puml.RNOTE = 31;
puml.HNOTE = 32;
puml.LEFT = 33;
puml.RIGHT = 34;
puml.OVER = 35;
puml.ENDNOTE = 36;
puml.ENDRNOTE = 37;
puml.ENDHNOTE = 38;
puml.END_NOTE = 39;
puml.END_RNOTE = 40;
puml.END_HNOTE = 41;
puml.OF = 42;

puml.RULE_document = 0;
puml.RULE_diagram = 1;
puml.RULE_startUml = 2;
puml.RULE_endUml = 3;
puml.RULE_digramName = 4;
puml.RULE_diagramItem = 5;
puml.RULE_color = 6;
puml.RULE_emptyLine = 7;
puml.RULE_note = 8;
puml.RULE_singleLineNote = 9;
puml.RULE_singleLineRNote = 10;
puml.RULE_singleLineHNote = 11;
puml.RULE_multiLineNote = 12;
puml.RULE_multiLineRNote = 13;
puml.RULE_multiLineHNote = 14;
puml.RULE_noteLocation = 15;
puml.RULE_noteLocationRight = 16;
puml.RULE_noteLocationLeft = 17;
puml.RULE_noteLocationOver = 18;
puml.RULE_noteTextLine = 19;
puml.RULE_noteTextLines = 20;
puml.RULE_noteAnchor = 21;
puml.RULE_declareParticipant = 22;
puml.RULE_declareDefaultParticipant = 23;
puml.RULE_declareActor = 24;
puml.RULE_declareBoundary = 25;
puml.RULE_declareControl = 26;
puml.RULE_declareEntity = 27;
puml.RULE_declareDatabase = 28;
puml.RULE_declareCollections = 29;
puml.RULE_declareTitleAsId = 30;
puml.RULE_declareIdAsTitle = 31;
puml.RULE_declareId = 32;
puml.RULE_declareParticipantIdAndTitle = 33;
puml.RULE_declareOrder = 34;
puml.RULE_sequenceMessageParticipant = 35;
puml.RULE_sequenceMessage = 36;
puml.RULE_connector = 37;
puml.RULE_connectorSolid = 38;
puml.RULE_connectorSolidReverse = 39;
puml.RULE_connectorDotted = 40;
puml.RULE_connectorDottedReverse = 41;
puml.RULE_identifier = 42;
puml.RULE_quotedIdentifier = 43;
puml.RULE_messageText = 44;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.diagram = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DiagramContext);
    } else {
        return this.getTypedRuleContext(DiagramContext,i);
    }
};

DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDocument(this);
	}
};

DocumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDocument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DocumentContext = DocumentContext;

puml.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, puml.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 90;
            this.diagram();
            this.state = 93; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===puml.STARTUMLLINE);
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
};

function DiagramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_diagram;
    return this;
}

DiagramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiagramContext.prototype.constructor = DiagramContext;

DiagramContext.prototype.startUml = function() {
    return this.getTypedRuleContext(StartUmlContext,0);
};

DiagramContext.prototype.endUml = function() {
    return this.getTypedRuleContext(EndUmlContext,0);
};

DiagramContext.prototype.diagramItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DiagramItemContext);
    } else {
        return this.getTypedRuleContext(DiagramItemContext,i);
    }
};

DiagramContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CR);
    } else {
        return this.getToken(puml.CR, i);
    }
};


DiagramContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDiagram(this);
	}
};

DiagramContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDiagram(this);
	}
};

DiagramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDiagram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DiagramContext = DiagramContext;

puml.prototype.diagram = function() {

    var localctx = new DiagramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, puml.RULE_diagram);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.startUml();
        this.state = 99;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 96;
                this.diagramItem(); 
            }
            this.state = 101;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 102;
        this.endUml();
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===puml.CR) {
            this.state = 103;
            this.match(puml.CR);
            this.state = 108;
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
};

function StartUmlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_startUml;
    return this;
}

StartUmlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartUmlContext.prototype.constructor = StartUmlContext;

StartUmlContext.prototype.STARTUMLLINE = function() {
    return this.getToken(puml.STARTUMLLINE, 0);
};

StartUmlContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterStartUml(this);
	}
};

StartUmlContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitStartUml(this);
	}
};

StartUmlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitStartUml(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.StartUmlContext = StartUmlContext;

puml.prototype.startUml = function() {

    var localctx = new StartUmlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, puml.RULE_startUml);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(puml.STARTUMLLINE);
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
};

function EndUmlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_endUml;
    return this;
}

EndUmlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndUmlContext.prototype.constructor = EndUmlContext;

EndUmlContext.prototype.ENDUML = function() {
    return this.getToken(puml.ENDUML, 0);
};

EndUmlContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

EndUmlContext.prototype.SPACE = function() {
    return this.getToken(puml.SPACE, 0);
};

EndUmlContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterEndUml(this);
	}
};

EndUmlContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitEndUml(this);
	}
};

EndUmlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitEndUml(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.EndUmlContext = EndUmlContext;

puml.prototype.endUml = function() {

    var localctx = new EndUmlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, puml.RULE_endUml);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(puml.ENDUML);
        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 112;
            this.match(puml.SPACE);
        }

        this.state = 115;
        this.match(puml.CR);
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
};

function DigramNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_digramName;
    return this;
}

DigramNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigramNameContext.prototype.constructor = DigramNameContext;

DigramNameContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.ANY);
    } else {
        return this.getToken(puml.ANY, i);
    }
};


DigramNameContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


DigramNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDigramName(this);
	}
};

DigramNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDigramName(this);
	}
};

DigramNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDigramName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DigramNameContext = DigramNameContext;

puml.prototype.digramName = function() {

    var localctx = new DigramNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, puml.RULE_digramName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 117;
                _la = this._input.LA(1);
                if(!(_la===puml.SPACE || _la===puml.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 122;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
};

function DiagramItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_diagramItem;
    return this;
}

DiagramItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiagramItemContext.prototype.constructor = DiagramItemContext;

DiagramItemContext.prototype.emptyLine = function() {
    return this.getTypedRuleContext(EmptyLineContext,0);
};

DiagramItemContext.prototype.note = function() {
    return this.getTypedRuleContext(NoteContext,0);
};

DiagramItemContext.prototype.declareParticipant = function() {
    return this.getTypedRuleContext(DeclareParticipantContext,0);
};

DiagramItemContext.prototype.sequenceMessage = function() {
    return this.getTypedRuleContext(SequenceMessageContext,0);
};

DiagramItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDiagramItem(this);
	}
};

DiagramItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDiagramItem(this);
	}
};

DiagramItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDiagramItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DiagramItemContext = DiagramItemContext;

puml.prototype.diagramItem = function() {

    var localctx = new DiagramItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, puml.RULE_diagramItem);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.emptyLine();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.note();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 125;
            this.declareParticipant();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 126;
            this.sequenceMessage();
            break;

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
};

function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.NAMED_COLORS = function() {
    return this.getToken(puml.NAMED_COLORS, 0);
};

ColorContext.prototype.HEX_COLORS = function() {
    return this.getToken(puml.HEX_COLORS, 0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.ColorContext = ColorContext;

puml.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, puml.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        _la = this._input.LA(1);
        if(!(_la===puml.HEX_COLORS || _la===puml.NAMED_COLORS)) {
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
};

function EmptyLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_emptyLine;
    return this;
}

EmptyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyLineContext.prototype.constructor = EmptyLineContext;

EmptyLineContext.prototype.SPACE = function() {
    return this.getToken(puml.SPACE, 0);
};

EmptyLineContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

EmptyLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterEmptyLine(this);
	}
};

EmptyLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitEmptyLine(this);
	}
};

EmptyLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitEmptyLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.EmptyLineContext = EmptyLineContext;

puml.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, puml.RULE_emptyLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        _la = this._input.LA(1);
        if(!(_la===puml.SPACE || _la===puml.CR)) {
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
};

function NoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_note;
    return this;
}

NoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteContext.prototype.constructor = NoteContext;

NoteContext.prototype.singleLineNote = function() {
    return this.getTypedRuleContext(SingleLineNoteContext,0);
};

NoteContext.prototype.singleLineRNote = function() {
    return this.getTypedRuleContext(SingleLineRNoteContext,0);
};

NoteContext.prototype.singleLineHNote = function() {
    return this.getTypedRuleContext(SingleLineHNoteContext,0);
};

NoteContext.prototype.multiLineNote = function() {
    return this.getTypedRuleContext(MultiLineNoteContext,0);
};

NoteContext.prototype.multiLineRNote = function() {
    return this.getTypedRuleContext(MultiLineRNoteContext,0);
};

NoteContext.prototype.multiLineHNote = function() {
    return this.getTypedRuleContext(MultiLineHNoteContext,0);
};

NoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNote(this);
	}
};

NoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNote(this);
	}
};

NoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteContext = NoteContext;

puml.prototype.note = function() {

    var localctx = new NoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, puml.RULE_note);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.singleLineNote();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.singleLineRNote();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
            this.singleLineHNote();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 136;
            this.multiLineNote();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 137;
            this.multiLineRNote();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 138;
            this.multiLineHNote();
            break;

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
};

function SingleLineNoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_singleLineNote;
    return this;
}

SingleLineNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleLineNoteContext.prototype.constructor = SingleLineNoteContext;

SingleLineNoteContext.prototype.NOTE = function() {
    return this.getToken(puml.NOTE, 0);
};

SingleLineNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


SingleLineNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

SingleLineNoteContext.prototype.COLON = function() {
    return this.getToken(puml.COLON, 0);
};

SingleLineNoteContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

SingleLineNoteContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

SingleLineNoteContext.prototype.noteTextLine = function() {
    return this.getTypedRuleContext(NoteTextLineContext,0);
};

SingleLineNoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterSingleLineNote(this);
	}
};

SingleLineNoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitSingleLineNote(this);
	}
};

SingleLineNoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitSingleLineNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.SingleLineNoteContext = SingleLineNoteContext;

puml.prototype.singleLineNote = function() {

    var localctx = new SingleLineNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, puml.RULE_singleLineNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(puml.NOTE);
        this.state = 142;
        this.match(puml.SPACE);
        this.state = 143;
        this.noteLocation();
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 144;
            this.match(puml.SPACE);
            this.state = 145;
            this.color();

        }
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 148;
            this.match(puml.SPACE);
        }

        this.state = 151;
        this.match(puml.COLON);
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 152;
            this.noteTextLine();

        }
        this.state = 155;
        this.match(puml.CR);
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
};

function SingleLineRNoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_singleLineRNote;
    return this;
}

SingleLineRNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleLineRNoteContext.prototype.constructor = SingleLineRNoteContext;

SingleLineRNoteContext.prototype.RNOTE = function() {
    return this.getToken(puml.RNOTE, 0);
};

SingleLineRNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


SingleLineRNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

SingleLineRNoteContext.prototype.COLON = function() {
    return this.getToken(puml.COLON, 0);
};

SingleLineRNoteContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

SingleLineRNoteContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

SingleLineRNoteContext.prototype.noteTextLine = function() {
    return this.getTypedRuleContext(NoteTextLineContext,0);
};

SingleLineRNoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterSingleLineRNote(this);
	}
};

SingleLineRNoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitSingleLineRNote(this);
	}
};

SingleLineRNoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitSingleLineRNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.SingleLineRNoteContext = SingleLineRNoteContext;

puml.prototype.singleLineRNote = function() {

    var localctx = new SingleLineRNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, puml.RULE_singleLineRNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(puml.RNOTE);
        this.state = 158;
        this.match(puml.SPACE);
        this.state = 159;
        this.noteLocation();
        this.state = 162;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 160;
            this.match(puml.SPACE);
            this.state = 161;
            this.color();

        }
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 164;
            this.match(puml.SPACE);
        }

        this.state = 167;
        this.match(puml.COLON);
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 168;
            this.noteTextLine();

        }
        this.state = 171;
        this.match(puml.CR);
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
};

function SingleLineHNoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_singleLineHNote;
    return this;
}

SingleLineHNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleLineHNoteContext.prototype.constructor = SingleLineHNoteContext;

SingleLineHNoteContext.prototype.HNOTE = function() {
    return this.getToken(puml.HNOTE, 0);
};

SingleLineHNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


SingleLineHNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

SingleLineHNoteContext.prototype.COLON = function() {
    return this.getToken(puml.COLON, 0);
};

SingleLineHNoteContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

SingleLineHNoteContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

SingleLineHNoteContext.prototype.noteTextLine = function() {
    return this.getTypedRuleContext(NoteTextLineContext,0);
};

SingleLineHNoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterSingleLineHNote(this);
	}
};

SingleLineHNoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitSingleLineHNote(this);
	}
};

SingleLineHNoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitSingleLineHNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.SingleLineHNoteContext = SingleLineHNoteContext;

puml.prototype.singleLineHNote = function() {

    var localctx = new SingleLineHNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, puml.RULE_singleLineHNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(puml.HNOTE);
        this.state = 174;
        this.match(puml.SPACE);
        this.state = 175;
        this.noteLocation();
        this.state = 178;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 176;
            this.match(puml.SPACE);
            this.state = 177;
            this.color();

        }
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 180;
            this.match(puml.SPACE);
        }

        this.state = 183;
        this.match(puml.COLON);
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 184;
            this.noteTextLine();

        }
        this.state = 187;
        this.match(puml.CR);
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
};

function MultiLineNoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_multiLineNote;
    return this;
}

MultiLineNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiLineNoteContext.prototype.constructor = MultiLineNoteContext;

MultiLineNoteContext.prototype.NOTE = function() {
    return this.getToken(puml.NOTE, 0);
};

MultiLineNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


MultiLineNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

MultiLineNoteContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CR);
    } else {
        return this.getToken(puml.CR, i);
    }
};


MultiLineNoteContext.prototype.noteTextLines = function() {
    return this.getTypedRuleContext(NoteTextLinesContext,0);
};

MultiLineNoteContext.prototype.ENDNOTE = function() {
    return this.getToken(puml.ENDNOTE, 0);
};

MultiLineNoteContext.prototype.END_NOTE = function() {
    return this.getToken(puml.END_NOTE, 0);
};

MultiLineNoteContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

MultiLineNoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterMultiLineNote(this);
	}
};

MultiLineNoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitMultiLineNote(this);
	}
};

MultiLineNoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitMultiLineNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.MultiLineNoteContext = MultiLineNoteContext;

puml.prototype.multiLineNote = function() {

    var localctx = new MultiLineNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, puml.RULE_multiLineNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(puml.NOTE);
        this.state = 190;
        this.match(puml.SPACE);
        this.state = 191;
        this.noteLocation();
        this.state = 194;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 192;
            this.match(puml.SPACE);
            this.state = 193;
            this.color();

        }
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 196;
            this.match(puml.SPACE);
        }

        this.state = 199;
        this.match(puml.CR);
        this.state = 200;
        this.noteTextLines();
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.CR) {
            this.state = 201;
            this.match(puml.CR);
        }

        this.state = 204;
        _la = this._input.LA(1);
        if(!(_la===puml.ENDNOTE || _la===puml.END_NOTE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 205;
        this.match(puml.CR);
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
};

function MultiLineRNoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_multiLineRNote;
    return this;
}

MultiLineRNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiLineRNoteContext.prototype.constructor = MultiLineRNoteContext;

MultiLineRNoteContext.prototype.RNOTE = function() {
    return this.getToken(puml.RNOTE, 0);
};

MultiLineRNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


MultiLineRNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

MultiLineRNoteContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CR);
    } else {
        return this.getToken(puml.CR, i);
    }
};


MultiLineRNoteContext.prototype.noteTextLines = function() {
    return this.getTypedRuleContext(NoteTextLinesContext,0);
};

MultiLineRNoteContext.prototype.ENDNOTE = function() {
    return this.getToken(puml.ENDNOTE, 0);
};

MultiLineRNoteContext.prototype.END_NOTE = function() {
    return this.getToken(puml.END_NOTE, 0);
};

MultiLineRNoteContext.prototype.ENDRNOTE = function() {
    return this.getToken(puml.ENDRNOTE, 0);
};

MultiLineRNoteContext.prototype.END_RNOTE = function() {
    return this.getToken(puml.END_RNOTE, 0);
};

MultiLineRNoteContext.prototype.ENDHNOTE = function() {
    return this.getToken(puml.ENDHNOTE, 0);
};

MultiLineRNoteContext.prototype.END_HNOTE = function() {
    return this.getToken(puml.END_HNOTE, 0);
};

MultiLineRNoteContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

MultiLineRNoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterMultiLineRNote(this);
	}
};

MultiLineRNoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitMultiLineRNote(this);
	}
};

MultiLineRNoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitMultiLineRNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.MultiLineRNoteContext = MultiLineRNoteContext;

puml.prototype.multiLineRNote = function() {

    var localctx = new MultiLineRNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, puml.RULE_multiLineRNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(puml.RNOTE);
        this.state = 208;
        this.match(puml.SPACE);
        this.state = 209;
        this.noteLocation();
        this.state = 212;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 210;
            this.match(puml.SPACE);
            this.state = 211;
            this.color();

        }
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 214;
            this.match(puml.SPACE);
        }

        this.state = 217;
        this.match(puml.CR);
        this.state = 218;
        this.noteTextLines();
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.CR) {
            this.state = 219;
            this.match(puml.CR);
        }

        this.state = 222;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (puml.ENDNOTE - 36)) | (1 << (puml.ENDRNOTE - 36)) | (1 << (puml.ENDHNOTE - 36)) | (1 << (puml.END_NOTE - 36)) | (1 << (puml.END_RNOTE - 36)) | (1 << (puml.END_HNOTE - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 223;
        this.match(puml.CR);
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
};

function MultiLineHNoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_multiLineHNote;
    return this;
}

MultiLineHNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiLineHNoteContext.prototype.constructor = MultiLineHNoteContext;

MultiLineHNoteContext.prototype.HNOTE = function() {
    return this.getToken(puml.HNOTE, 0);
};

MultiLineHNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


MultiLineHNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

MultiLineHNoteContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CR);
    } else {
        return this.getToken(puml.CR, i);
    }
};


MultiLineHNoteContext.prototype.noteTextLines = function() {
    return this.getTypedRuleContext(NoteTextLinesContext,0);
};

MultiLineHNoteContext.prototype.ENDNOTE = function() {
    return this.getToken(puml.ENDNOTE, 0);
};

MultiLineHNoteContext.prototype.END_NOTE = function() {
    return this.getToken(puml.END_NOTE, 0);
};

MultiLineHNoteContext.prototype.ENDRNOTE = function() {
    return this.getToken(puml.ENDRNOTE, 0);
};

MultiLineHNoteContext.prototype.END_RNOTE = function() {
    return this.getToken(puml.END_RNOTE, 0);
};

MultiLineHNoteContext.prototype.ENDHNOTE = function() {
    return this.getToken(puml.ENDHNOTE, 0);
};

MultiLineHNoteContext.prototype.END_HNOTE = function() {
    return this.getToken(puml.END_HNOTE, 0);
};

MultiLineHNoteContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

MultiLineHNoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterMultiLineHNote(this);
	}
};

MultiLineHNoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitMultiLineHNote(this);
	}
};

MultiLineHNoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitMultiLineHNote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.MultiLineHNoteContext = MultiLineHNoteContext;

puml.prototype.multiLineHNote = function() {

    var localctx = new MultiLineHNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, puml.RULE_multiLineHNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(puml.HNOTE);
        this.state = 226;
        this.match(puml.SPACE);
        this.state = 227;
        this.noteLocation();
        this.state = 230;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 228;
            this.match(puml.SPACE);
            this.state = 229;
            this.color();

        }
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 232;
            this.match(puml.SPACE);
        }

        this.state = 235;
        this.match(puml.CR);
        this.state = 236;
        this.noteTextLines();
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.CR) {
            this.state = 237;
            this.match(puml.CR);
        }

        this.state = 240;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (puml.ENDNOTE - 36)) | (1 << (puml.ENDRNOTE - 36)) | (1 << (puml.ENDHNOTE - 36)) | (1 << (puml.END_NOTE - 36)) | (1 << (puml.END_RNOTE - 36)) | (1 << (puml.END_HNOTE - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 241;
        this.match(puml.CR);
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
};

function NoteLocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteLocation;
    return this;
}

NoteLocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationContext.prototype.constructor = NoteLocationContext;

NoteLocationContext.prototype.noteLocationRight = function() {
    return this.getTypedRuleContext(NoteLocationRightContext,0);
};

NoteLocationContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


NoteLocationContext.prototype.OF = function() {
    return this.getToken(puml.OF, 0);
};

NoteLocationContext.prototype.noteAnchor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoteAnchorContext);
    } else {
        return this.getTypedRuleContext(NoteAnchorContext,i);
    }
};

NoteLocationContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.COMMA);
    } else {
        return this.getToken(puml.COMMA, i);
    }
};


NoteLocationContext.prototype.noteLocationLeft = function() {
    return this.getTypedRuleContext(NoteLocationLeftContext,0);
};

NoteLocationContext.prototype.noteLocationOver = function() {
    return this.getTypedRuleContext(NoteLocationOverContext,0);
};

NoteLocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteLocation(this);
	}
};

NoteLocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteLocation(this);
	}
};

NoteLocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteLocation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteLocationContext = NoteLocationContext;

puml.prototype.noteLocation = function() {

    var localctx = new NoteLocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, puml.RULE_noteLocation);
    var _la = 0; // Token type
    try {
        this.state = 290;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.RIGHT:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.noteLocationRight();
            this.state = 258;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
            if(la_===1) {
                this.state = 244;
                this.match(puml.SPACE);
                this.state = 245;
                this.match(puml.OF);
                this.state = 246;
                this.match(puml.SPACE);
                this.state = 247;
                this.noteAnchor();
                this.state = 255;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===puml.SPACE) {
                            this.state = 248;
                            this.match(puml.SPACE);
                        }

                        this.state = 251;
                        this.match(puml.COMMA);
                        this.state = 252;
                        this.noteAnchor(); 
                    }
                    this.state = 257;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
                }


            }
            break;
        case puml.LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 260;
            this.noteLocationLeft();
            this.state = 275;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 261;
                this.match(puml.SPACE);
                this.state = 262;
                this.match(puml.OF);
                this.state = 263;
                this.match(puml.SPACE);
                this.state = 264;
                this.noteAnchor();
                this.state = 272;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===puml.SPACE) {
                            this.state = 265;
                            this.match(puml.SPACE);
                        }

                        this.state = 268;
                        this.match(puml.COMMA);
                        this.state = 269;
                        this.noteAnchor(); 
                    }
                    this.state = 274;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
                }


            }
            break;
        case puml.OVER:
            this.enterOuterAlt(localctx, 3);
            this.state = 277;
            this.noteLocationOver();

            this.state = 278;
            this.match(puml.SPACE);
            this.state = 279;
            this.noteAnchor();
            this.state = 287;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 281;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===puml.SPACE) {
                        this.state = 280;
                        this.match(puml.SPACE);
                    }

                    this.state = 283;
                    this.match(puml.COMMA);
                    this.state = 284;
                    this.noteAnchor(); 
                }
                this.state = 289;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};

function NoteLocationRightContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteLocationRight;
    return this;
}

NoteLocationRightContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationRightContext.prototype.constructor = NoteLocationRightContext;

NoteLocationRightContext.prototype.RIGHT = function() {
    return this.getToken(puml.RIGHT, 0);
};

NoteLocationRightContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteLocationRight(this);
	}
};

NoteLocationRightContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteLocationRight(this);
	}
};

NoteLocationRightContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteLocationRight(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteLocationRightContext = NoteLocationRightContext;

puml.prototype.noteLocationRight = function() {

    var localctx = new NoteLocationRightContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, puml.RULE_noteLocationRight);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(puml.RIGHT);
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
};

function NoteLocationLeftContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteLocationLeft;
    return this;
}

NoteLocationLeftContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationLeftContext.prototype.constructor = NoteLocationLeftContext;

NoteLocationLeftContext.prototype.LEFT = function() {
    return this.getToken(puml.LEFT, 0);
};

NoteLocationLeftContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteLocationLeft(this);
	}
};

NoteLocationLeftContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteLocationLeft(this);
	}
};

NoteLocationLeftContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteLocationLeft(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteLocationLeftContext = NoteLocationLeftContext;

puml.prototype.noteLocationLeft = function() {

    var localctx = new NoteLocationLeftContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, puml.RULE_noteLocationLeft);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.match(puml.LEFT);
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
};

function NoteLocationOverContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteLocationOver;
    return this;
}

NoteLocationOverContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationOverContext.prototype.constructor = NoteLocationOverContext;

NoteLocationOverContext.prototype.OVER = function() {
    return this.getToken(puml.OVER, 0);
};

NoteLocationOverContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteLocationOver(this);
	}
};

NoteLocationOverContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteLocationOver(this);
	}
};

NoteLocationOverContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteLocationOver(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteLocationOverContext = NoteLocationOverContext;

puml.prototype.noteLocationOver = function() {

    var localctx = new NoteLocationOverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, puml.RULE_noteLocationOver);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(puml.OVER);
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
};

function NoteTextLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteTextLine;
    return this;
}

NoteTextLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteTextLineContext.prototype.constructor = NoteTextLineContext;

NoteTextLineContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.ANY);
    } else {
        return this.getToken(puml.ANY, i);
    }
};


NoteTextLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


NoteTextLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteTextLine(this);
	}
};

NoteTextLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteTextLine(this);
	}
};

NoteTextLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteTextLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteTextLineContext = NoteTextLineContext;

puml.prototype.noteTextLine = function() {

    var localctx = new NoteTextLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, puml.RULE_noteTextLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 298;
                _la = this._input.LA(1);
                if(!(_la===puml.SPACE || _la===puml.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 303;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
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
};

function NoteTextLinesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteTextLines;
    return this;
}

NoteTextLinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteTextLinesContext.prototype.constructor = NoteTextLinesContext;

NoteTextLinesContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.ANY);
    } else {
        return this.getToken(puml.ANY, i);
    }
};


NoteTextLinesContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


NoteTextLinesContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CR);
    } else {
        return this.getToken(puml.CR, i);
    }
};


NoteTextLinesContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteTextLines(this);
	}
};

NoteTextLinesContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteTextLines(this);
	}
};

NoteTextLinesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteTextLines(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteTextLinesContext = NoteTextLinesContext;

puml.prototype.noteTextLines = function() {

    var localctx = new NoteTextLinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, puml.RULE_noteTextLines);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 304;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << puml.SPACE) | (1 << puml.CR) | (1 << puml.ANY))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 309;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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
};

function NoteAnchorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_noteAnchor;
    return this;
}

NoteAnchorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteAnchorContext.prototype.constructor = NoteAnchorContext;

NoteAnchorContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.ANY);
    } else {
        return this.getToken(puml.ANY, i);
    }
};


NoteAnchorContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


NoteAnchorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterNoteAnchor(this);
	}
};

NoteAnchorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitNoteAnchor(this);
	}
};

NoteAnchorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNoteAnchor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NoteAnchorContext = NoteAnchorContext;

puml.prototype.noteAnchor = function() {

    var localctx = new NoteAnchorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, puml.RULE_noteAnchor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 310;
                _la = this._input.LA(1);
                if(!(_la===puml.SPACE || _la===puml.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 315;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
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
};

function DeclareParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareParticipant;
    return this;
}

DeclareParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareParticipantContext.prototype.constructor = DeclareParticipantContext;

DeclareParticipantContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


DeclareParticipantContext.prototype.declareParticipantIdAndTitle = function() {
    return this.getTypedRuleContext(DeclareParticipantIdAndTitleContext,0);
};

DeclareParticipantContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

DeclareParticipantContext.prototype.declareDefaultParticipant = function() {
    return this.getTypedRuleContext(DeclareDefaultParticipantContext,0);
};

DeclareParticipantContext.prototype.declareActor = function() {
    return this.getTypedRuleContext(DeclareActorContext,0);
};

DeclareParticipantContext.prototype.declareBoundary = function() {
    return this.getTypedRuleContext(DeclareBoundaryContext,0);
};

DeclareParticipantContext.prototype.declareControl = function() {
    return this.getTypedRuleContext(DeclareControlContext,0);
};

DeclareParticipantContext.prototype.declareEntity = function() {
    return this.getTypedRuleContext(DeclareEntityContext,0);
};

DeclareParticipantContext.prototype.declareDatabase = function() {
    return this.getTypedRuleContext(DeclareDatabaseContext,0);
};

DeclareParticipantContext.prototype.declareCollections = function() {
    return this.getTypedRuleContext(DeclareCollectionsContext,0);
};

DeclareParticipantContext.prototype.ORDER = function() {
    return this.getToken(puml.ORDER, 0);
};

DeclareParticipantContext.prototype.declareOrder = function() {
    return this.getTypedRuleContext(DeclareOrderContext,0);
};

DeclareParticipantContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

DeclareParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareParticipant(this);
	}
};

DeclareParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareParticipant(this);
	}
};

DeclareParticipantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareParticipant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareParticipantContext = DeclareParticipantContext;

puml.prototype.declareParticipant = function() {

    var localctx = new DeclareParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, puml.RULE_declareParticipant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.PARTICIPANT:
            this.state = 316;
            this.declareDefaultParticipant();
            break;
        case puml.ACTOR:
            this.state = 317;
            this.declareActor();
            break;
        case puml.BOUNDARY:
            this.state = 318;
            this.declareBoundary();
            break;
        case puml.CONTROL:
            this.state = 319;
            this.declareControl();
            break;
        case puml.ENTITY:
            this.state = 320;
            this.declareEntity();
            break;
        case puml.DATABASE:
            this.state = 321;
            this.declareDatabase();
            break;
        case puml.COLLECTIONS:
            this.state = 322;
            this.declareCollections();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 325;
        this.match(puml.SPACE);
        this.state = 326;
        this.declareParticipantIdAndTitle();
        this.state = 331;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 327;
            this.match(puml.SPACE);
            this.state = 328;
            this.match(puml.ORDER);
            this.state = 329;
            this.match(puml.SPACE);
            this.state = 330;
            this.declareOrder();

        }
        this.state = 335;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        if(la_===1) {
            this.state = 333;
            this.match(puml.SPACE);
            this.state = 334;
            this.color();

        }
        this.state = 338;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 337;
            this.match(puml.SPACE);
        }

        this.state = 340;
        this.match(puml.CR);
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
};

function DeclareDefaultParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareDefaultParticipant;
    return this;
}

DeclareDefaultParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareDefaultParticipantContext.prototype.constructor = DeclareDefaultParticipantContext;

DeclareDefaultParticipantContext.prototype.PARTICIPANT = function() {
    return this.getToken(puml.PARTICIPANT, 0);
};

DeclareDefaultParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareDefaultParticipant(this);
	}
};

DeclareDefaultParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareDefaultParticipant(this);
	}
};

DeclareDefaultParticipantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareDefaultParticipant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareDefaultParticipantContext = DeclareDefaultParticipantContext;

puml.prototype.declareDefaultParticipant = function() {

    var localctx = new DeclareDefaultParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, puml.RULE_declareDefaultParticipant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(puml.PARTICIPANT);
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
};

function DeclareActorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareActor;
    return this;
}

DeclareActorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareActorContext.prototype.constructor = DeclareActorContext;

DeclareActorContext.prototype.ACTOR = function() {
    return this.getToken(puml.ACTOR, 0);
};

DeclareActorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareActor(this);
	}
};

DeclareActorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareActor(this);
	}
};

DeclareActorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareActor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareActorContext = DeclareActorContext;

puml.prototype.declareActor = function() {

    var localctx = new DeclareActorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, puml.RULE_declareActor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(puml.ACTOR);
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
};

function DeclareBoundaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareBoundary;
    return this;
}

DeclareBoundaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareBoundaryContext.prototype.constructor = DeclareBoundaryContext;

DeclareBoundaryContext.prototype.BOUNDARY = function() {
    return this.getToken(puml.BOUNDARY, 0);
};

DeclareBoundaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareBoundary(this);
	}
};

DeclareBoundaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareBoundary(this);
	}
};

DeclareBoundaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareBoundary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareBoundaryContext = DeclareBoundaryContext;

puml.prototype.declareBoundary = function() {

    var localctx = new DeclareBoundaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, puml.RULE_declareBoundary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(puml.BOUNDARY);
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
};

function DeclareControlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareControl;
    return this;
}

DeclareControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareControlContext.prototype.constructor = DeclareControlContext;

DeclareControlContext.prototype.CONTROL = function() {
    return this.getToken(puml.CONTROL, 0);
};

DeclareControlContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareControl(this);
	}
};

DeclareControlContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareControl(this);
	}
};

DeclareControlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareControl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareControlContext = DeclareControlContext;

puml.prototype.declareControl = function() {

    var localctx = new DeclareControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, puml.RULE_declareControl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(puml.CONTROL);
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
};

function DeclareEntityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareEntity;
    return this;
}

DeclareEntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareEntityContext.prototype.constructor = DeclareEntityContext;

DeclareEntityContext.prototype.ENTITY = function() {
    return this.getToken(puml.ENTITY, 0);
};

DeclareEntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareEntity(this);
	}
};

DeclareEntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareEntity(this);
	}
};

DeclareEntityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareEntity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareEntityContext = DeclareEntityContext;

puml.prototype.declareEntity = function() {

    var localctx = new DeclareEntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, puml.RULE_declareEntity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(puml.ENTITY);
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
};

function DeclareDatabaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareDatabase;
    return this;
}

DeclareDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareDatabaseContext.prototype.constructor = DeclareDatabaseContext;

DeclareDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(puml.DATABASE, 0);
};

DeclareDatabaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareDatabase(this);
	}
};

DeclareDatabaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareDatabase(this);
	}
};

DeclareDatabaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareDatabase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareDatabaseContext = DeclareDatabaseContext;

puml.prototype.declareDatabase = function() {

    var localctx = new DeclareDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, puml.RULE_declareDatabase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(puml.DATABASE);
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
};

function DeclareCollectionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareCollections;
    return this;
}

DeclareCollectionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareCollectionsContext.prototype.constructor = DeclareCollectionsContext;

DeclareCollectionsContext.prototype.COLLECTIONS = function() {
    return this.getToken(puml.COLLECTIONS, 0);
};

DeclareCollectionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareCollections(this);
	}
};

DeclareCollectionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareCollections(this);
	}
};

DeclareCollectionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareCollections(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareCollectionsContext = DeclareCollectionsContext;

puml.prototype.declareCollections = function() {

    var localctx = new DeclareCollectionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, puml.RULE_declareCollections);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.match(puml.COLLECTIONS);
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
};

function DeclareTitleAsIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareTitleAsId;
    return this;
}

DeclareTitleAsIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareTitleAsIdContext.prototype.constructor = DeclareTitleAsIdContext;

DeclareTitleAsIdContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

DeclareTitleAsIdContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


DeclareTitleAsIdContext.prototype.AS = function() {
    return this.getToken(puml.AS, 0);
};

DeclareTitleAsIdContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

DeclareTitleAsIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareTitleAsId(this);
	}
};

DeclareTitleAsIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareTitleAsId(this);
	}
};

DeclareTitleAsIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareTitleAsId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareTitleAsIdContext = DeclareTitleAsIdContext;

puml.prototype.declareTitleAsId = function() {

    var localctx = new DeclareTitleAsIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, puml.RULE_declareTitleAsId);
    try {
        this.state = 368;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.DBLQUOTE:
            this.enterOuterAlt(localctx, 1);
            this.state = 356;
            this.quotedIdentifier();
            this.state = 357;
            this.match(puml.SPACE);
            this.state = 358;
            this.match(puml.AS);
            this.state = 359;
            this.match(puml.SPACE);
            this.state = 360;
            this.identifier();
            break;
        case puml.STARTUML:
        case puml.STARTUMLLINE:
        case puml.ENDUML:
        case puml.PARTICIPANT:
        case puml.ACTOR:
        case puml.BOUNDARY:
        case puml.CONTROL:
        case puml.ENTITY:
        case puml.DATABASE:
        case puml.COLLECTIONS:
        case puml.AS:
        case puml.ORDER:
        case puml.CONNECTOR_SINGLE_LEFT:
        case puml.CONNECTOR_SINGLE_RIGHT:
        case puml.CONNECTOR_DOUBLE_LEFT:
        case puml.CONNECTOR_DOUBLE_RIGHT:
        case puml.SEMICOLON:
        case puml.COLON:
        case puml.COMMA:
        case puml.ESC_DBLQUOTE:
        case puml.SPACE:
        case puml.WS:
        case puml.CR:
        case puml.SINGLE_LINE_COMMENT:
        case puml.MULTI_LINE_COMMENT:
        case puml.HEX_COLORS:
        case puml.NAMED_COLORS:
        case puml.ANY:
        case puml.NOTE:
        case puml.RNOTE:
        case puml.HNOTE:
        case puml.LEFT:
        case puml.RIGHT:
        case puml.OVER:
        case puml.ENDNOTE:
        case puml.ENDRNOTE:
        case puml.ENDHNOTE:
        case puml.END_NOTE:
        case puml.END_RNOTE:
        case puml.END_HNOTE:
        case puml.OF:
            this.enterOuterAlt(localctx, 2);
            this.state = 362;
            this.identifier();
            this.state = 363;
            this.match(puml.SPACE);
            this.state = 364;
            this.match(puml.AS);
            this.state = 365;
            this.match(puml.SPACE);
            this.state = 366;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};

function DeclareIdAsTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareIdAsTitle;
    return this;
}

DeclareIdAsTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareIdAsTitleContext.prototype.constructor = DeclareIdAsTitleContext;

DeclareIdAsTitleContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

DeclareIdAsTitleContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


DeclareIdAsTitleContext.prototype.AS = function() {
    return this.getToken(puml.AS, 0);
};

DeclareIdAsTitleContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

DeclareIdAsTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareIdAsTitle(this);
	}
};

DeclareIdAsTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareIdAsTitle(this);
	}
};

DeclareIdAsTitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareIdAsTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareIdAsTitleContext = DeclareIdAsTitleContext;

puml.prototype.declareIdAsTitle = function() {

    var localctx = new DeclareIdAsTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, puml.RULE_declareIdAsTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        this.identifier();
        this.state = 371;
        this.match(puml.SPACE);
        this.state = 372;
        this.match(puml.AS);
        this.state = 373;
        this.match(puml.SPACE);
        this.state = 374;
        this.quotedIdentifier();
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
};

function DeclareIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareId;
    return this;
}

DeclareIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareIdContext.prototype.constructor = DeclareIdContext;

DeclareIdContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

DeclareIdContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

DeclareIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareId(this);
	}
};

DeclareIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareId(this);
	}
};

DeclareIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareIdContext = DeclareIdContext;

puml.prototype.declareId = function() {

    var localctx = new DeclareIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, puml.RULE_declareId);
    try {
        this.state = 378;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.STARTUML:
        case puml.STARTUMLLINE:
        case puml.ENDUML:
        case puml.PARTICIPANT:
        case puml.ACTOR:
        case puml.BOUNDARY:
        case puml.CONTROL:
        case puml.ENTITY:
        case puml.DATABASE:
        case puml.COLLECTIONS:
        case puml.AS:
        case puml.ORDER:
        case puml.CONNECTOR_SINGLE_LEFT:
        case puml.CONNECTOR_SINGLE_RIGHT:
        case puml.CONNECTOR_DOUBLE_LEFT:
        case puml.CONNECTOR_DOUBLE_RIGHT:
        case puml.SEMICOLON:
        case puml.COLON:
        case puml.COMMA:
        case puml.ESC_DBLQUOTE:
        case puml.SPACE:
        case puml.WS:
        case puml.CR:
        case puml.SINGLE_LINE_COMMENT:
        case puml.MULTI_LINE_COMMENT:
        case puml.HEX_COLORS:
        case puml.NAMED_COLORS:
        case puml.ANY:
        case puml.NOTE:
        case puml.RNOTE:
        case puml.HNOTE:
        case puml.LEFT:
        case puml.RIGHT:
        case puml.OVER:
        case puml.ENDNOTE:
        case puml.ENDRNOTE:
        case puml.ENDHNOTE:
        case puml.END_NOTE:
        case puml.END_RNOTE:
        case puml.END_HNOTE:
        case puml.OF:
            this.enterOuterAlt(localctx, 1);
            this.state = 376;
            this.identifier();
            break;
        case puml.DBLQUOTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 377;
            this.quotedIdentifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};

function DeclareParticipantIdAndTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareParticipantIdAndTitle;
    return this;
}

DeclareParticipantIdAndTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareParticipantIdAndTitleContext.prototype.constructor = DeclareParticipantIdAndTitleContext;

DeclareParticipantIdAndTitleContext.prototype.declareId = function() {
    return this.getTypedRuleContext(DeclareIdContext,0);
};

DeclareParticipantIdAndTitleContext.prototype.declareTitleAsId = function() {
    return this.getTypedRuleContext(DeclareTitleAsIdContext,0);
};

DeclareParticipantIdAndTitleContext.prototype.declareIdAsTitle = function() {
    return this.getTypedRuleContext(DeclareIdAsTitleContext,0);
};

DeclareParticipantIdAndTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareParticipantIdAndTitle(this);
	}
};

DeclareParticipantIdAndTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareParticipantIdAndTitle(this);
	}
};

DeclareParticipantIdAndTitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareParticipantIdAndTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareParticipantIdAndTitleContext = DeclareParticipantIdAndTitleContext;

puml.prototype.declareParticipantIdAndTitle = function() {

    var localctx = new DeclareParticipantIdAndTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, puml.RULE_declareParticipantIdAndTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.state = 380;
            this.declareId();
            break;

        case 2:
            this.state = 381;
            this.declareTitleAsId();
            break;

        case 3:
            this.state = 382;
            this.declareIdAsTitle();
            break;

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
};

function DeclareOrderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_declareOrder;
    return this;
}

DeclareOrderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareOrderContext.prototype.constructor = DeclareOrderContext;

DeclareOrderContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

DeclareOrderContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterDeclareOrder(this);
	}
};

DeclareOrderContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitDeclareOrder(this);
	}
};

DeclareOrderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitDeclareOrder(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.DeclareOrderContext = DeclareOrderContext;

puml.prototype.declareOrder = function() {

    var localctx = new DeclareOrderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, puml.RULE_declareOrder);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.identifier();
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
};

function SequenceMessageParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_sequenceMessageParticipant;
    return this;
}

SequenceMessageParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceMessageParticipantContext.prototype.constructor = SequenceMessageParticipantContext;

SequenceMessageParticipantContext.prototype.declareParticipantIdAndTitle = function() {
    return this.getTypedRuleContext(DeclareParticipantIdAndTitleContext,0);
};

SequenceMessageParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterSequenceMessageParticipant(this);
	}
};

SequenceMessageParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitSequenceMessageParticipant(this);
	}
};

SequenceMessageParticipantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitSequenceMessageParticipant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.SequenceMessageParticipantContext = SequenceMessageParticipantContext;

puml.prototype.sequenceMessageParticipant = function() {

    var localctx = new SequenceMessageParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, puml.RULE_sequenceMessageParticipant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        this.declareParticipantIdAndTitle();
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
};

function SequenceMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_sequenceMessage;
    return this;
}

SequenceMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceMessageContext.prototype.constructor = SequenceMessageContext;

SequenceMessageContext.prototype.sequenceMessageParticipant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceMessageParticipantContext);
    } else {
        return this.getTypedRuleContext(SequenceMessageParticipantContext,i);
    }
};

SequenceMessageContext.prototype.connector = function() {
    return this.getTypedRuleContext(ConnectorContext,0);
};

SequenceMessageContext.prototype.CR = function() {
    return this.getToken(puml.CR, 0);
};

SequenceMessageContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


SequenceMessageContext.prototype.COLON = function() {
    return this.getToken(puml.COLON, 0);
};

SequenceMessageContext.prototype.messageText = function() {
    return this.getTypedRuleContext(MessageTextContext,0);
};

SequenceMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterSequenceMessage(this);
	}
};

SequenceMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitSequenceMessage(this);
	}
};

SequenceMessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitSequenceMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.SequenceMessageContext = SequenceMessageContext;

puml.prototype.sequenceMessage = function() {

    var localctx = new SequenceMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, puml.RULE_sequenceMessage);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
        this.sequenceMessageParticipant();
        this.state = 391;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 390;
            this.match(puml.SPACE);
        }

        this.state = 393;
        this.connector();
        this.state = 395;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        if(la_===1) {
            this.state = 394;
            this.match(puml.SPACE);

        }
        this.state = 397;
        this.sequenceMessageParticipant();
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.SPACE) {
            this.state = 398;
            this.match(puml.SPACE);
        }

        this.state = 403;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.COLON) {
            this.state = 401;
            this.match(puml.COLON);
            this.state = 402;
            this.messageText();
        }

        this.state = 405;
        this.match(puml.CR);
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
};

function ConnectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_connector;
    return this;
}

ConnectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorContext.prototype.constructor = ConnectorContext;

ConnectorContext.prototype.connectorSolid = function() {
    return this.getTypedRuleContext(ConnectorSolidContext,0);
};

ConnectorContext.prototype.connectorDotted = function() {
    return this.getTypedRuleContext(ConnectorDottedContext,0);
};

ConnectorContext.prototype.connectorSolidReverse = function() {
    return this.getTypedRuleContext(ConnectorSolidReverseContext,0);
};

ConnectorContext.prototype.connectorDottedReverse = function() {
    return this.getTypedRuleContext(ConnectorDottedReverseContext,0);
};

ConnectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterConnector(this);
	}
};

ConnectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitConnector(this);
	}
};

ConnectorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitConnector(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.ConnectorContext = ConnectorContext;

puml.prototype.connector = function() {

    var localctx = new ConnectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, puml.RULE_connector);
    try {
        this.state = 411;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.CONNECTOR_SINGLE_LEFT:
            this.enterOuterAlt(localctx, 1);
            this.state = 407;
            this.connectorSolid();
            break;
        case puml.CONNECTOR_DOUBLE_LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 408;
            this.connectorDotted();
            break;
        case puml.CONNECTOR_SINGLE_RIGHT:
            this.enterOuterAlt(localctx, 3);
            this.state = 409;
            this.connectorSolidReverse();
            break;
        case puml.CONNECTOR_DOUBLE_RIGHT:
            this.enterOuterAlt(localctx, 4);
            this.state = 410;
            this.connectorDottedReverse();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};

function ConnectorSolidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_connectorSolid;
    return this;
}

ConnectorSolidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorSolidContext.prototype.constructor = ConnectorSolidContext;

ConnectorSolidContext.prototype.CONNECTOR_SINGLE_LEFT = function() {
    return this.getToken(puml.CONNECTOR_SINGLE_LEFT, 0);
};

ConnectorSolidContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterConnectorSolid(this);
	}
};

ConnectorSolidContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitConnectorSolid(this);
	}
};

ConnectorSolidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitConnectorSolid(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.ConnectorSolidContext = ConnectorSolidContext;

puml.prototype.connectorSolid = function() {

    var localctx = new ConnectorSolidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, puml.RULE_connectorSolid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.match(puml.CONNECTOR_SINGLE_LEFT);
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
};

function ConnectorSolidReverseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_connectorSolidReverse;
    return this;
}

ConnectorSolidReverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorSolidReverseContext.prototype.constructor = ConnectorSolidReverseContext;

ConnectorSolidReverseContext.prototype.CONNECTOR_SINGLE_RIGHT = function() {
    return this.getToken(puml.CONNECTOR_SINGLE_RIGHT, 0);
};

ConnectorSolidReverseContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterConnectorSolidReverse(this);
	}
};

ConnectorSolidReverseContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitConnectorSolidReverse(this);
	}
};

ConnectorSolidReverseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitConnectorSolidReverse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.ConnectorSolidReverseContext = ConnectorSolidReverseContext;

puml.prototype.connectorSolidReverse = function() {

    var localctx = new ConnectorSolidReverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, puml.RULE_connectorSolidReverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.match(puml.CONNECTOR_SINGLE_RIGHT);
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
};

function ConnectorDottedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_connectorDotted;
    return this;
}

ConnectorDottedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorDottedContext.prototype.constructor = ConnectorDottedContext;

ConnectorDottedContext.prototype.CONNECTOR_DOUBLE_LEFT = function() {
    return this.getToken(puml.CONNECTOR_DOUBLE_LEFT, 0);
};

ConnectorDottedContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterConnectorDotted(this);
	}
};

ConnectorDottedContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitConnectorDotted(this);
	}
};

ConnectorDottedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitConnectorDotted(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.ConnectorDottedContext = ConnectorDottedContext;

puml.prototype.connectorDotted = function() {

    var localctx = new ConnectorDottedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, puml.RULE_connectorDotted);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(puml.CONNECTOR_DOUBLE_LEFT);
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
};

function ConnectorDottedReverseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_connectorDottedReverse;
    return this;
}

ConnectorDottedReverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorDottedReverseContext.prototype.constructor = ConnectorDottedReverseContext;

ConnectorDottedReverseContext.prototype.CONNECTOR_DOUBLE_RIGHT = function() {
    return this.getToken(puml.CONNECTOR_DOUBLE_RIGHT, 0);
};

ConnectorDottedReverseContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterConnectorDottedReverse(this);
	}
};

ConnectorDottedReverseContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitConnectorDottedReverse(this);
	}
};

ConnectorDottedReverseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitConnectorDottedReverse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.ConnectorDottedReverseContext = ConnectorDottedReverseContext;

puml.prototype.connectorDottedReverse = function() {

    var localctx = new ConnectorDottedReverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, puml.RULE_connectorDottedReverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this.match(puml.CONNECTOR_DOUBLE_RIGHT);
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
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.DBLQUOTE = function() {
    return this.getToken(puml.DBLQUOTE, 0);
};

IdentifierContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


IdentifierContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CR);
    } else {
        return this.getToken(puml.CR, i);
    }
};


IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.IdentifierContext = IdentifierContext;

puml.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, puml.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 421;
        _la = this._input.LA(1);
        if(_la<=0 || _la===puml.DBLQUOTE) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 425;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 422;
                _la = this._input.LA(1);
                if(_la<=0 || _la===puml.SPACE || _la===puml.CR) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 427;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
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
};

function QuotedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.DBLQUOTE);
    } else {
        return this.getToken(puml.DBLQUOTE, i);
    }
};


QuotedIdentifierContext.prototype.ESC_DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.ESC_DBLQUOTE);
    } else {
        return this.getToken(puml.ESC_DBLQUOTE, i);
    }
};


QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitQuotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.QuotedIdentifierContext = QuotedIdentifierContext;

puml.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, puml.RULE_quotedIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(puml.DBLQUOTE);
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << puml.STARTUML) | (1 << puml.STARTUMLLINE) | (1 << puml.ENDUML) | (1 << puml.PARTICIPANT) | (1 << puml.ACTOR) | (1 << puml.BOUNDARY) | (1 << puml.CONTROL) | (1 << puml.ENTITY) | (1 << puml.DATABASE) | (1 << puml.COLLECTIONS) | (1 << puml.AS) | (1 << puml.ORDER) | (1 << puml.CONNECTOR_SINGLE_LEFT) | (1 << puml.CONNECTOR_SINGLE_RIGHT) | (1 << puml.CONNECTOR_DOUBLE_LEFT) | (1 << puml.CONNECTOR_DOUBLE_RIGHT) | (1 << puml.SEMICOLON) | (1 << puml.COLON) | (1 << puml.COMMA) | (1 << puml.ESC_DBLQUOTE) | (1 << puml.SPACE) | (1 << puml.WS) | (1 << puml.CR) | (1 << puml.SINGLE_LINE_COMMENT) | (1 << puml.MULTI_LINE_COMMENT) | (1 << puml.HEX_COLORS) | (1 << puml.NAMED_COLORS) | (1 << puml.ANY) | (1 << puml.NOTE) | (1 << puml.RNOTE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (puml.HNOTE - 32)) | (1 << (puml.LEFT - 32)) | (1 << (puml.RIGHT - 32)) | (1 << (puml.OVER - 32)) | (1 << (puml.ENDNOTE - 32)) | (1 << (puml.ENDRNOTE - 32)) | (1 << (puml.ENDHNOTE - 32)) | (1 << (puml.END_NOTE - 32)) | (1 << (puml.END_RNOTE - 32)) | (1 << (puml.END_HNOTE - 32)) | (1 << (puml.OF - 32)))) !== 0)) {
            this.state = 431;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
            switch(la_) {
            case 1:
                this.state = 429;
                _la = this._input.LA(1);
                if(_la<=0 || _la===puml.DBLQUOTE) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                break;

            case 2:
                this.state = 430;
                this.match(puml.ESC_DBLQUOTE);
                break;

            }
            this.state = 435;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 436;
        this.match(puml.DBLQUOTE);
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
};

function MessageTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_messageText;
    return this;
}

MessageTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageTextContext.prototype.constructor = MessageTextContext;

MessageTextContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.ANY);
    } else {
        return this.getToken(puml.ANY, i);
    }
};


MessageTextContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.SPACE);
    } else {
        return this.getToken(puml.SPACE, i);
    }
};


MessageTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterMessageText(this);
	}
};

MessageTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitMessageText(this);
	}
};

MessageTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitMessageText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.MessageTextContext = MessageTextContext;

puml.prototype.messageText = function() {

    var localctx = new MessageTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, puml.RULE_messageText);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 438;
        		_la = this._input.LA(1);
        		if(!(_la===puml.SPACE || _la===puml.ANY)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 441; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,52, this._ctx);
        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};


exports.puml = puml;
