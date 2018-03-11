// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlListener = require('./pumlListener').pumlListener;
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+\u01a8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0003\u0002\u0006\u0002Z\n\u0002\r\u0002\u000e\u0002[\u0003\u0003",
    "\u0003\u0003\u0007\u0003`\n\u0003\f\u0003\u000e\u0003c\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003g\n\u0003\f\u0003\u000e\u0003j\u000b\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u0005p\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0007\u0006u\n\u0006\f\u0006\u000e",
    "\u0006x\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007~\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u008a\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0091\n\u000b",
    "\u0003\u000b\u0005\u000b\u0094\n\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u0098\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0005\f\u00a1\n\f\u0003\f\u0005\f\u00a4\n\f\u0003\f",
    "\u0003\f\u0005\f\u00a8\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00b1\n\r\u0003\r\u0005\r\u00b4\n\r\u0003\r\u0003",
    "\r\u0005\r\u00b8\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u00c1\n\u000e\u0003\u000e\u0005",
    "\u000e\u00c4\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u00c9\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00d3\n\u000f",
    "\u0003\u000f\u0005\u000f\u00d6\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00db\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00e5\n\u0010\u0003\u0010\u0005\u0010\u00e8\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00ed\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00f8\n\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00fc\n\u0011\f\u0011\u000e\u0011\u00ff\u000b\u0011\u0005\u0011",
    "\u0101\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0109\n\u0011\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u010d\n\u0011\f\u0011\u000e\u0011\u0110\u000b\u0011\u0005",
    "\u0011\u0112\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u0118\n\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u011c",
    "\n\u0011\f\u0011\u000e\u0011\u011f\u000b\u0011\u0005\u0011\u0121\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0007\u0015\u012a\n\u0015\f\u0015\u000e\u0015\u012d\u000b",
    "\u0015\u0003\u0016\u0007\u0016\u0130\n\u0016\f\u0016\u000e\u0016\u0133",
    "\u000b\u0016\u0003\u0017\u0007\u0017\u0136\n\u0017\f\u0017\u000e\u0017",
    "\u0139\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0142\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0148\n\u0018\u0003",
    "\u0018\u0005\u0018\u014b\n\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0005 \u0165\n \u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0005",
    "\"\u016d\n\"\u0003#\u0003#\u0005#\u0171\n#\u0003#\u0003#\u0005#\u0175",
    "\n#\u0003#\u0003#\u0005#\u0179\n#\u0003#\u0003#\u0005#\u017d\n#\u0003",
    "#\u0003#\u0003$\u0003$\u0003$\u0003$\u0005$\u0185\n$\u0003%\u0003%\u0003",
    "&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0005)\u0191\n",
    ")\u0003*\u0007*\u0194\n*\f*\u000e*\u0197\u000b*\u0003+\u0003+\u0003",
    "+\u0007+\u019c\n+\f+\u000e+\u019f\u000b+\u0003+\u0003+\u0003,\u0006",
    ",\u01a4\n,\r,\u000e,\u01a5\u0003,\u0007v\u012b\u0131\u0137\u01a5\u0002",
    "-\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTV\u0002\t\u0004\u0002$$++\u0003",
    "\u0002)*\u0004\u0002$$&&\u0004\u0002\u0013\u0013\u0016\u0016\u0003\u0002",
    "\u0013\u0018\u0005\u0002$$&&++\u0003\u0002\"\"\u0002\u01be\u0002Y\u0003",
    "\u0002\u0002\u0002\u0004]\u0003\u0002\u0002\u0002\u0006k\u0003\u0002",
    "\u0002\u0002\bm\u0003\u0002\u0002\u0002\nv\u0003\u0002\u0002\u0002\f",
    "}\u0003\u0002\u0002\u0002\u000e\u007f\u0003\u0002\u0002\u0002\u0010",
    "\u0081\u0003\u0002\u0002\u0002\u0012\u0089\u0003\u0002\u0002\u0002\u0014",
    "\u008b\u0003\u0002\u0002\u0002\u0016\u009b\u0003\u0002\u0002\u0002\u0018",
    "\u00ab\u0003\u0002\u0002\u0002\u001a\u00bb\u0003\u0002\u0002\u0002\u001c",
    "\u00cd\u0003\u0002\u0002\u0002\u001e\u00df\u0003\u0002\u0002\u0002 ",
    "\u0120\u0003\u0002\u0002\u0002\"\u0122\u0003\u0002\u0002\u0002$\u0124",
    "\u0003\u0002\u0002\u0002&\u0126\u0003\u0002\u0002\u0002(\u012b\u0003",
    "\u0002\u0002\u0002*\u0131\u0003\u0002\u0002\u0002,\u0137\u0003\u0002",
    "\u0002\u0002.\u0141\u0003\u0002\u0002\u00020\u014e\u0003\u0002\u0002",
    "\u00022\u0150\u0003\u0002\u0002\u00024\u0152\u0003\u0002\u0002\u0002",
    "6\u0154\u0003\u0002\u0002\u00028\u0156\u0003\u0002\u0002\u0002:\u0158",
    "\u0003\u0002\u0002\u0002<\u015a\u0003\u0002\u0002\u0002>\u0164\u0003",
    "\u0002\u0002\u0002@\u0166\u0003\u0002\u0002\u0002B\u016c\u0003\u0002",
    "\u0002\u0002D\u016e\u0003\u0002\u0002\u0002F\u0184\u0003\u0002\u0002",
    "\u0002H\u0186\u0003\u0002\u0002\u0002J\u0188\u0003\u0002\u0002\u0002",
    "L\u018a\u0003\u0002\u0002\u0002N\u018c\u0003\u0002\u0002\u0002P\u0190",
    "\u0003\u0002\u0002\u0002R\u0195\u0003\u0002\u0002\u0002T\u0198\u0003",
    "\u0002\u0002\u0002V\u01a3\u0003\u0002\u0002\u0002XZ\u0005\u0004\u0003",
    "\u0002YX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[Y\u0003\u0002",
    "\u0002\u0002[\\\u0003\u0002\u0002\u0002\\\u0003\u0003\u0002\u0002\u0002",
    "]a\u0005\u0006\u0004\u0002^`\u0005\f\u0007\u0002_^\u0003\u0002\u0002",
    "\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002",
    "\u0002\u0002bd\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002dh\u0005",
    "\b\u0005\u0002eg\u0007&\u0002\u0002fe\u0003\u0002\u0002\u0002gj\u0003",
    "\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002",
    "i\u0005\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002kl\u0007\u0004",
    "\u0002\u0002l\u0007\u0003\u0002\u0002\u0002mo\u0007\u0005\u0002\u0002",
    "np\u0007$\u0002\u0002on\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
    "\u0002pq\u0003\u0002\u0002\u0002qr\u0007&\u0002\u0002r\t\u0003\u0002",
    "\u0002\u0002su\t\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002ux\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002",
    "w\u000b\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002y~\u0005\u0010",
    "\t\u0002z~\u0005\u0012\n\u0002{~\u0005.\u0018\u0002|~\u0005D#\u0002",
    "}y\u0003\u0002\u0002\u0002}z\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002",
    "\u0002}|\u0003\u0002\u0002\u0002~\r\u0003\u0002\u0002\u0002\u007f\u0080",
    "\t\u0003\u0002\u0002\u0080\u000f\u0003\u0002\u0002\u0002\u0081\u0082",
    "\t\u0004\u0002\u0002\u0082\u0011\u0003\u0002\u0002\u0002\u0083\u008a",
    "\u0005\u0014\u000b\u0002\u0084\u008a\u0005\u0016\f\u0002\u0085\u008a",
    "\u0005\u0018\r\u0002\u0086\u008a\u0005\u001a\u000e\u0002\u0087\u008a",
    "\u0005\u001c\u000f\u0002\u0088\u008a\u0005\u001e\u0010\u0002\u0089\u0083",
    "\u0003\u0002\u0002\u0002\u0089\u0084\u0003\u0002\u0002\u0002\u0089\u0085",
    "\u0003\u0002\u0002\u0002\u0089\u0086\u0003\u0002\u0002\u0002\u0089\u0087",
    "\u0003\u0002\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u0013",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0007\r\u0002\u0002\u008c\u008d",
    "\u0007$\u0002\u0002\u008d\u0090\u0005 \u0011\u0002\u008e\u008f\u0007",
    "$\u0002\u0002\u008f\u0091\u0005\u000e\b\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093\u0003\u0002",
    "\u0002\u0002\u0092\u0094\u0007$\u0002\u0002\u0093\u0092\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u0097\u0007 \u0002\u0002\u0096\u0098\u0005(\u0015",
    "\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0007&\u0002",
    "\u0002\u009a\u0015\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u000e\u0002",
    "\u0002\u009c\u009d\u0007$\u0002\u0002\u009d\u00a0\u0005 \u0011\u0002",
    "\u009e\u009f\u0007$\u0002\u0002\u009f\u00a1\u0005\u000e\b\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1",
    "\u00a3\u0003\u0002\u0002\u0002\u00a2\u00a4\u0007$\u0002\u0002\u00a3",
    "\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0007 \u0002\u0002\u00a6",
    "\u00a8\u0005(\u0015\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\u0007&\u0002\u0002\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0007\u000f\u0002\u0002\u00ac\u00ad\u0007$\u0002\u0002\u00ad",
    "\u00b0\u0005 \u0011\u0002\u00ae\u00af\u0007$\u0002\u0002\u00af\u00b1",
    "\u0005\u000e\b\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1",
    "\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b4",
    "\u0007$\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b7",
    "\u0007 \u0002\u0002\u00b6\u00b8\u0005(\u0015\u0002\u00b7\u00b6\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003",
    "\u0002\u0002\u0002\u00b9\u00ba\u0007&\u0002\u0002\u00ba\u0019\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0007\r\u0002\u0002\u00bc\u00bd\u0007",
    "$\u0002\u0002\u00bd\u00c0\u0005 \u0011\u0002\u00be\u00bf\u0007$\u0002",
    "\u0002\u00bf\u00c1\u0005\u000e\b\u0002\u00c0\u00be\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002",
    "\u0002\u00c2\u00c4\u0007$\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002",
    "\u0002\u00c5\u00c6\u0007&\u0002\u0002\u00c6\u00c8\u0005*\u0016\u0002",
    "\u00c7\u00c9\u0007&\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\t\u0005\u0002\u0002\u00cb\u00cc\u0007&\u0002\u0002\u00cc",
    "\u001b\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007\u000e\u0002\u0002\u00ce",
    "\u00cf\u0007$\u0002\u0002\u00cf\u00d2\u0005 \u0011\u0002\u00d0\u00d1",
    "\u0007$\u0002\u0002\u00d1\u00d3\u0005\u000e\b\u0002\u00d2\u00d0\u0003",
    "\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d5\u0003",
    "\u0002\u0002\u0002\u00d4\u00d6\u0007$\u0002\u0002\u00d5\u00d4\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003",
    "\u0002\u0002\u0002\u00d7\u00d8\u0007&\u0002\u0002\u00d8\u00da\u0005",
    "*\u0016\u0002\u00d9\u00db\u0007&\u0002\u0002\u00da\u00d9\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\t\u0006\u0002\u0002\u00dd\u00de\u0007&\u0002",
    "\u0002\u00de\u001d\u0003\u0002\u0002\u0002\u00df\u00e0\u0007\u000f\u0002",
    "\u0002\u00e0\u00e1\u0007$\u0002\u0002\u00e1\u00e4\u0005 \u0011\u0002",
    "\u00e2\u00e3\u0007$\u0002\u0002\u00e3\u00e5\u0005\u000e\b\u0002\u00e4",
    "\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5",
    "\u00e7\u0003\u0002\u0002\u0002\u00e6\u00e8\u0007$\u0002\u0002\u00e7",
    "\u00e6\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007&\u0002\u0002\u00ea",
    "\u00ec\u0005*\u0016\u0002\u00eb\u00ed\u0007&\u0002\u0002\u00ec\u00eb",
    "\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0003\u0002\u0002\u0002\u00ee\u00ef\t\u0006\u0002\u0002\u00ef\u00f0",
    "\u0007&\u0002\u0002\u00f0\u001f\u0003\u0002\u0002\u0002\u00f1\u0100",
    "\u0005\"\u0012\u0002\u00f2\u00f3\u0007$\u0002\u0002\u00f3\u00f4\u0007",
    "\u0019\u0002\u0002\u00f4\u00f5\u0007$\u0002\u0002\u00f5\u00fd\u0005",
    ",\u0017\u0002\u00f6\u00f8\u0007$\u0002\u0002\u00f7\u00f6\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002",
    "\u0002\u0002\u00f9\u00fa\u0007!\u0002\u0002\u00fa\u00fc\u0005,\u0017",
    "\u0002\u00fb\u00f7\u0003\u0002\u0002\u0002\u00fc\u00ff\u0003\u0002\u0002",
    "\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002",
    "\u0002\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002",
    "\u0002\u0100\u00f2\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002",
    "\u0002\u0101\u0121\u0003\u0002\u0002\u0002\u0102\u0111\u0005$\u0013",
    "\u0002\u0103\u0104\u0007$\u0002\u0002\u0104\u0105\u0007\u0019\u0002",
    "\u0002\u0105\u0106\u0007$\u0002\u0002\u0106\u010e\u0005,\u0017\u0002",
    "\u0107\u0109\u0007$\u0002\u0002\u0108\u0107\u0003\u0002\u0002\u0002",
    "\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002",
    "\u010a\u010b\u0007!\u0002\u0002\u010b\u010d\u0005,\u0017\u0002\u010c",
    "\u0108\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002\u010e",
    "\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f",
    "\u0112\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0111",
    "\u0103\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "\u0121\u0003\u0002\u0002\u0002\u0113\u0114\u0005&\u0014\u0002\u0114",
    "\u0115\u0007$\u0002\u0002\u0115\u011d\u0005,\u0017\u0002\u0116\u0118",
    "\u0007$\u0002\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0117\u0118",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0007!\u0002\u0002\u011a\u011c\u0005,\u0017\u0002\u011b\u0117\u0003",
    "\u0002\u0002\u0002\u011c\u011f\u0003\u0002\u0002\u0002\u011d\u011b\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002\u011e\u0121\u0003",
    "\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002\u0120\u00f1\u0003",
    "\u0002\u0002\u0002\u0120\u0102\u0003\u0002\u0002\u0002\u0120\u0113\u0003",
    "\u0002\u0002\u0002\u0121!\u0003\u0002\u0002\u0002\u0122\u0123\u0007",
    "\u0011\u0002\u0002\u0123#\u0003\u0002\u0002\u0002\u0124\u0125\u0007",
    "\u0010\u0002\u0002\u0125%\u0003\u0002\u0002\u0002\u0126\u0127\u0007",
    "\u0012\u0002\u0002\u0127\'\u0003\u0002\u0002\u0002\u0128\u012a\t\u0002",
    "\u0002\u0002\u0129\u0128\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002",
    "\u0002\u0002\u012c)\u0003\u0002\u0002\u0002\u012d\u012b\u0003\u0002",
    "\u0002\u0002\u012e\u0130\t\u0007\u0002\u0002\u012f\u012e\u0003\u0002",
    "\u0002\u0002\u0130\u0133\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002",
    "\u0002\u0002\u0131\u012f\u0003\u0002\u0002\u0002\u0132+\u0003\u0002",
    "\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002\u0134\u0136\t\u0002",
    "\u0002\u0002\u0135\u0134\u0003\u0002\u0002\u0002\u0136\u0139\u0003\u0002",
    "\u0002\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0137\u0135\u0003\u0002",
    "\u0002\u0002\u0138-\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002",
    "\u0002\u0002\u013a\u0142\u00050\u0019\u0002\u013b\u0142\u00052\u001a",
    "\u0002\u013c\u0142\u00054\u001b\u0002\u013d\u0142\u00056\u001c\u0002",
    "\u013e\u0142\u00058\u001d\u0002\u013f\u0142\u0005:\u001e\u0002\u0140",
    "\u0142\u0005<\u001f\u0002\u0141\u013a\u0003\u0002\u0002\u0002\u0141",
    "\u013b\u0003\u0002\u0002\u0002\u0141\u013c\u0003\u0002\u0002\u0002\u0141",
    "\u013d\u0003\u0002\u0002\u0002\u0141\u013e\u0003\u0002\u0002\u0002\u0141",
    "\u013f\u0003\u0002\u0002\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0142",
    "\u0143\u0003\u0002\u0002\u0002\u0143\u0144\u0007$\u0002\u0002\u0144",
    "\u0147\u0005B\"\u0002\u0145\u0146\u0007$\u0002\u0002\u0146\u0148\u0005",
    "\u000e\b\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003",
    "\u0002\u0002\u0002\u0148\u014a\u0003\u0002\u0002\u0002\u0149\u014b\u0007",
    "$\u0002\u0002\u014a\u0149\u0003\u0002\u0002\u0002\u014a\u014b\u0003",
    "\u0002\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014d\u0007",
    "&\u0002\u0002\u014d/\u0003\u0002\u0002\u0002\u014e\u014f\u0007\u0006",
    "\u0002\u0002\u014f1\u0003\u0002\u0002\u0002\u0150\u0151\u0007\u0007",
    "\u0002\u0002\u01513\u0003\u0002\u0002\u0002\u0152\u0153\u0007\b\u0002",
    "\u0002\u01535\u0003\u0002\u0002\u0002\u0154\u0155\u0007\t\u0002\u0002",
    "\u01557\u0003\u0002\u0002\u0002\u0156\u0157\u0007\n\u0002\u0002\u0157",
    "9\u0003\u0002\u0002\u0002\u0158\u0159\u0007\u000b\u0002\u0002\u0159",
    ";\u0003\u0002\u0002\u0002\u015a\u015b\u0007\f\u0002\u0002\u015b=\u0003",
    "\u0002\u0002\u0002\u015c\u015d\u0005T+\u0002\u015d\u015e\u0007\u001a",
    "\u0002\u0002\u015e\u015f\u0005R*\u0002\u015f\u0165\u0003\u0002\u0002",
    "\u0002\u0160\u0161\u0005R*\u0002\u0161\u0162\u0007\u001a\u0002\u0002",
    "\u0162\u0163\u0005R*\u0002\u0163\u0165\u0003\u0002\u0002\u0002\u0164",
    "\u015c\u0003\u0002\u0002\u0002\u0164\u0160\u0003\u0002\u0002\u0002\u0165",
    "?\u0003\u0002\u0002\u0002\u0166\u0167\u0005R*\u0002\u0167\u0168\u0007",
    "\u001a\u0002\u0002\u0168\u0169\u0005T+\u0002\u0169A\u0003\u0002\u0002",
    "\u0002\u016a\u016d\u0005R*\u0002\u016b\u016d\u0005T+\u0002\u016c\u016a",
    "\u0003\u0002\u0002\u0002\u016c\u016b\u0003\u0002\u0002\u0002\u016dC",
    "\u0003\u0002\u0002\u0002\u016e\u0170\u0005P)\u0002\u016f\u0171\u0007",
    "$\u0002\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0170\u0171\u0003",
    "\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002\u0002\u0172\u0174\u0005",
    "F$\u0002\u0173\u0175\u0007$\u0002\u0002\u0174\u0173\u0003\u0002\u0002",
    "\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002",
    "\u0002\u0176\u0178\u0005P)\u0002\u0177\u0179\u0007$\u0002\u0002\u0178",
    "\u0177\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179",
    "\u017c\u0003\u0002\u0002\u0002\u017a\u017b\u0007 \u0002\u0002\u017b",
    "\u017d\u0005V,\u0002\u017c\u017a\u0003\u0002\u0002\u0002\u017c\u017d",
    "\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e\u017f",
    "\u0007&\u0002\u0002\u017fE\u0003\u0002\u0002\u0002\u0180\u0185\u0005",
    "H%\u0002\u0181\u0185\u0005L\'\u0002\u0182\u0185\u0005J&\u0002\u0183",
    "\u0185\u0005N(\u0002\u0184\u0180\u0003\u0002\u0002\u0002\u0184\u0181",
    "\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184\u0183",
    "\u0003\u0002\u0002\u0002\u0185G\u0003\u0002\u0002\u0002\u0186\u0187",
    "\u0007\u001b\u0002\u0002\u0187I\u0003\u0002\u0002\u0002\u0188\u0189",
    "\u0007\u001c\u0002\u0002\u0189K\u0003\u0002\u0002\u0002\u018a\u018b",
    "\u0007\u001d\u0002\u0002\u018bM\u0003\u0002\u0002\u0002\u018c\u018d",
    "\u0007\u001e\u0002\u0002\u018dO\u0003\u0002\u0002\u0002\u018e\u0191",
    "\u0005R*\u0002\u018f\u0191\u0005T+\u0002\u0190\u018e\u0003\u0002\u0002",
    "\u0002\u0190\u018f\u0003\u0002\u0002\u0002\u0191Q\u0003\u0002\u0002",
    "\u0002\u0192\u0194\n\u0004\u0002\u0002\u0193\u0192\u0003\u0002\u0002",
    "\u0002\u0194\u0197\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002",
    "\u0002\u0195\u0196\u0003\u0002\u0002\u0002\u0196S\u0003\u0002\u0002",
    "\u0002\u0197\u0195\u0003\u0002\u0002\u0002\u0198\u019d\u0007\"\u0002",
    "\u0002\u0199\u019c\n\b\u0002\u0002\u019a\u019c\u0007#\u0002\u0002\u019b",
    "\u0199\u0003\u0002\u0002\u0002\u019b\u019a\u0003\u0002\u0002\u0002\u019c",
    "\u019f\u0003\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019d",
    "\u019e\u0003\u0002\u0002\u0002\u019e\u01a0\u0003\u0002\u0002\u0002\u019f",
    "\u019d\u0003\u0002\u0002\u0002\u01a0\u01a1\u0007\"\u0002\u0002\u01a1",
    "U\u0003\u0002\u0002\u0002\u01a2\u01a4\t\u0002\u0002\u0002\u01a3\u01a2",
    "\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003\u0002\u0002\u0002\u01a5\u01a6",
    "\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a6W",
    "\u0003\u0002\u0002\u00026[ahov}\u0089\u0090\u0093\u0097\u00a0\u00a3",
    "\u00a7\u00b0\u00b3\u00b7\u00c0\u00c3\u00c8\u00d2\u00d5\u00da\u00e4\u00e7",
    "\u00ec\u00f7\u00fd\u0100\u0108\u010e\u0111\u0117\u011d\u0120\u012b\u0131",
    "\u0137\u0141\u0147\u014a\u0164\u016c\u0170\u0174\u0178\u017c\u0184\u0190",
    "\u0195\u019b\u019d\u01a5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", null, "'@enduml'", null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, "'->'", "'<-'", "'-->'", "'<--'", "';'", "':'", 
                     "','", "'\"'", "'\\\"'" ];

var symbolicNames = [ null, "STARTUML", "STARTUMLLINE", "ENDUML", "PARTICIPANT", 
                      "ACTOR", "BOUNDARY", "CONTROL", "ENTITY", "DATABASE", 
                      "COLLECTIONS", "NOTE", "RNOTE", "HNOTE", "LEFT", "RIGHT", 
                      "OVER", "ENDNOTE", "ENDRNOTE", "ENDHNOTE", "END_NOTE", 
                      "END_RNOTE", "END_HNOTE", "OF", "AS", "CONNECTOR_SINGLE_LEFT", 
                      "CONNECTOR_SINGLE_RIGHT", "CONNECTOR_DOUBLE_LEFT", 
                      "CONNECTOR_DOUBLE_RIGHT", "SEMICOLON", "COLON", "COMMA", 
                      "DBLQUOTE", "ESC_DBLQUOTE", "SPACE", "WS", "CR", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "HEX_COLORS", "NAMED_COLORS", 
                      "ANY" ];

var ruleNames =  [ "document", "diagram", "startUml", "endUml", "digramName", 
                   "diagramItem", "color", "emptyLine", "note", "singleLineNote", 
                   "singleLineRNote", "singleLineHNote", "multiLineNote", 
                   "multiLineRNote", "multiLineHNote", "noteLocation", "noteLocationRight", 
                   "noteLocationLeft", "noteLocationOver", "noteTextLine", 
                   "noteTextLines", "noteAnchor", "declareParticipant", 
                   "declareDefaultParticipant", "declareActor", "declareBoundary", 
                   "declareControl", "declareEntity", "declareDatabase", 
                   "declareCollections", "declareTitleAsId", "declareIdAsTitle", 
                   "declareId", "sequenceMessage", "connector", "connectorSolid", 
                   "connectorSolidReverse", "connectorDotted", "connectorDottedReverse", 
                   "participant", "identifier", "quotedIdentifier", "messageText" ];

function pumlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

pumlParser.prototype = Object.create(antlr4.Parser.prototype);
pumlParser.prototype.constructor = pumlParser;

Object.defineProperty(pumlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

pumlParser.EOF = antlr4.Token.EOF;
pumlParser.STARTUML = 1;
pumlParser.STARTUMLLINE = 2;
pumlParser.ENDUML = 3;
pumlParser.PARTICIPANT = 4;
pumlParser.ACTOR = 5;
pumlParser.BOUNDARY = 6;
pumlParser.CONTROL = 7;
pumlParser.ENTITY = 8;
pumlParser.DATABASE = 9;
pumlParser.COLLECTIONS = 10;
pumlParser.NOTE = 11;
pumlParser.RNOTE = 12;
pumlParser.HNOTE = 13;
pumlParser.LEFT = 14;
pumlParser.RIGHT = 15;
pumlParser.OVER = 16;
pumlParser.ENDNOTE = 17;
pumlParser.ENDRNOTE = 18;
pumlParser.ENDHNOTE = 19;
pumlParser.END_NOTE = 20;
pumlParser.END_RNOTE = 21;
pumlParser.END_HNOTE = 22;
pumlParser.OF = 23;
pumlParser.AS = 24;
pumlParser.CONNECTOR_SINGLE_LEFT = 25;
pumlParser.CONNECTOR_SINGLE_RIGHT = 26;
pumlParser.CONNECTOR_DOUBLE_LEFT = 27;
pumlParser.CONNECTOR_DOUBLE_RIGHT = 28;
pumlParser.SEMICOLON = 29;
pumlParser.COLON = 30;
pumlParser.COMMA = 31;
pumlParser.DBLQUOTE = 32;
pumlParser.ESC_DBLQUOTE = 33;
pumlParser.SPACE = 34;
pumlParser.WS = 35;
pumlParser.CR = 36;
pumlParser.SINGLE_LINE_COMMENT = 37;
pumlParser.MULTI_LINE_COMMENT = 38;
pumlParser.HEX_COLORS = 39;
pumlParser.NAMED_COLORS = 40;
pumlParser.ANY = 41;

pumlParser.RULE_document = 0;
pumlParser.RULE_diagram = 1;
pumlParser.RULE_startUml = 2;
pumlParser.RULE_endUml = 3;
pumlParser.RULE_digramName = 4;
pumlParser.RULE_diagramItem = 5;
pumlParser.RULE_color = 6;
pumlParser.RULE_emptyLine = 7;
pumlParser.RULE_note = 8;
pumlParser.RULE_singleLineNote = 9;
pumlParser.RULE_singleLineRNote = 10;
pumlParser.RULE_singleLineHNote = 11;
pumlParser.RULE_multiLineNote = 12;
pumlParser.RULE_multiLineRNote = 13;
pumlParser.RULE_multiLineHNote = 14;
pumlParser.RULE_noteLocation = 15;
pumlParser.RULE_noteLocationRight = 16;
pumlParser.RULE_noteLocationLeft = 17;
pumlParser.RULE_noteLocationOver = 18;
pumlParser.RULE_noteTextLine = 19;
pumlParser.RULE_noteTextLines = 20;
pumlParser.RULE_noteAnchor = 21;
pumlParser.RULE_declareParticipant = 22;
pumlParser.RULE_declareDefaultParticipant = 23;
pumlParser.RULE_declareActor = 24;
pumlParser.RULE_declareBoundary = 25;
pumlParser.RULE_declareControl = 26;
pumlParser.RULE_declareEntity = 27;
pumlParser.RULE_declareDatabase = 28;
pumlParser.RULE_declareCollections = 29;
pumlParser.RULE_declareTitleAsId = 30;
pumlParser.RULE_declareIdAsTitle = 31;
pumlParser.RULE_declareId = 32;
pumlParser.RULE_sequenceMessage = 33;
pumlParser.RULE_connector = 34;
pumlParser.RULE_connectorSolid = 35;
pumlParser.RULE_connectorSolidReverse = 36;
pumlParser.RULE_connectorDotted = 37;
pumlParser.RULE_connectorDottedReverse = 38;
pumlParser.RULE_participant = 39;
pumlParser.RULE_identifier = 40;
pumlParser.RULE_quotedIdentifier = 41;
pumlParser.RULE_messageText = 42;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParser.RULE_document;
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




pumlParser.DocumentContext = DocumentContext;

pumlParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, pumlParser.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 86;
            this.diagram();
            this.state = 89; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===pumlParser.STARTUMLLINE);
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
    this.ruleIndex = pumlParser.RULE_diagram;
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
        return this.getTokens(pumlParser.CR);
    } else {
        return this.getToken(pumlParser.CR, i);
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




pumlParser.DiagramContext = DiagramContext;

pumlParser.prototype.diagram = function() {

    var localctx = new DiagramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, pumlParser.RULE_diagram);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.startUml();
        this.state = 95;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92;
                this.diagramItem(); 
            }
            this.state = 97;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 98;
        this.endUml();
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pumlParser.CR) {
            this.state = 99;
            this.match(pumlParser.CR);
            this.state = 104;
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
    this.ruleIndex = pumlParser.RULE_startUml;
    return this;
}

StartUmlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartUmlContext.prototype.constructor = StartUmlContext;

StartUmlContext.prototype.STARTUMLLINE = function() {
    return this.getToken(pumlParser.STARTUMLLINE, 0);
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




pumlParser.StartUmlContext = StartUmlContext;

pumlParser.prototype.startUml = function() {

    var localctx = new StartUmlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, pumlParser.RULE_startUml);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(pumlParser.STARTUMLLINE);
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
    this.ruleIndex = pumlParser.RULE_endUml;
    return this;
}

EndUmlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndUmlContext.prototype.constructor = EndUmlContext;

EndUmlContext.prototype.ENDUML = function() {
    return this.getToken(pumlParser.ENDUML, 0);
};

EndUmlContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
};

EndUmlContext.prototype.SPACE = function() {
    return this.getToken(pumlParser.SPACE, 0);
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




pumlParser.EndUmlContext = EndUmlContext;

pumlParser.prototype.endUml = function() {

    var localctx = new EndUmlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, pumlParser.RULE_endUml);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(pumlParser.ENDUML);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 108;
            this.match(pumlParser.SPACE);
        }

        this.state = 111;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_digramName;
    return this;
}

DigramNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigramNameContext.prototype.constructor = DigramNameContext;

DigramNameContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ANY);
    } else {
        return this.getToken(pumlParser.ANY, i);
    }
};


DigramNameContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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




pumlParser.DigramNameContext = DigramNameContext;

pumlParser.prototype.digramName = function() {

    var localctx = new DigramNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pumlParser.RULE_digramName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 113;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 118;
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
    this.ruleIndex = pumlParser.RULE_diagramItem;
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




pumlParser.DiagramItemContext = DiagramItemContext;

pumlParser.prototype.diagramItem = function() {

    var localctx = new DiagramItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, pumlParser.RULE_diagramItem);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 119;
            this.emptyLine();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 120;
            this.note();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 121;
            this.declareParticipant();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 122;
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
    this.ruleIndex = pumlParser.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.NAMED_COLORS = function() {
    return this.getToken(pumlParser.NAMED_COLORS, 0);
};

ColorContext.prototype.HEX_COLORS = function() {
    return this.getToken(pumlParser.HEX_COLORS, 0);
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




pumlParser.ColorContext = ColorContext;

pumlParser.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, pumlParser.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        _la = this._input.LA(1);
        if(!(_la===pumlParser.HEX_COLORS || _la===pumlParser.NAMED_COLORS)) {
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
    this.ruleIndex = pumlParser.RULE_emptyLine;
    return this;
}

EmptyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyLineContext.prototype.constructor = EmptyLineContext;

EmptyLineContext.prototype.SPACE = function() {
    return this.getToken(pumlParser.SPACE, 0);
};

EmptyLineContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
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




pumlParser.EmptyLineContext = EmptyLineContext;

pumlParser.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, pumlParser.RULE_emptyLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        _la = this._input.LA(1);
        if(!(_la===pumlParser.SPACE || _la===pumlParser.CR)) {
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
    this.ruleIndex = pumlParser.RULE_note;
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




pumlParser.NoteContext = NoteContext;

pumlParser.prototype.note = function() {

    var localctx = new NoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, pumlParser.RULE_note);
    try {
        this.state = 135;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.singleLineNote();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.singleLineRNote();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 131;
            this.singleLineHNote();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 132;
            this.multiLineNote();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 133;
            this.multiLineRNote();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 134;
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
    this.ruleIndex = pumlParser.RULE_singleLineNote;
    return this;
}

SingleLineNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleLineNoteContext.prototype.constructor = SingleLineNoteContext;

SingleLineNoteContext.prototype.NOTE = function() {
    return this.getToken(pumlParser.NOTE, 0);
};

SingleLineNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


SingleLineNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

SingleLineNoteContext.prototype.COLON = function() {
    return this.getToken(pumlParser.COLON, 0);
};

SingleLineNoteContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
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




pumlParser.SingleLineNoteContext = SingleLineNoteContext;

pumlParser.prototype.singleLineNote = function() {

    var localctx = new SingleLineNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, pumlParser.RULE_singleLineNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(pumlParser.NOTE);
        this.state = 138;
        this.match(pumlParser.SPACE);
        this.state = 139;
        this.noteLocation();
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 140;
            this.match(pumlParser.SPACE);
            this.state = 141;
            this.color();

        }
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 144;
            this.match(pumlParser.SPACE);
        }

        this.state = 147;
        this.match(pumlParser.COLON);
        this.state = 149;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 148;
            this.noteTextLine();

        }
        this.state = 151;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_singleLineRNote;
    return this;
}

SingleLineRNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleLineRNoteContext.prototype.constructor = SingleLineRNoteContext;

SingleLineRNoteContext.prototype.RNOTE = function() {
    return this.getToken(pumlParser.RNOTE, 0);
};

SingleLineRNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


SingleLineRNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

SingleLineRNoteContext.prototype.COLON = function() {
    return this.getToken(pumlParser.COLON, 0);
};

SingleLineRNoteContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
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




pumlParser.SingleLineRNoteContext = SingleLineRNoteContext;

pumlParser.prototype.singleLineRNote = function() {

    var localctx = new SingleLineRNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, pumlParser.RULE_singleLineRNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(pumlParser.RNOTE);
        this.state = 154;
        this.match(pumlParser.SPACE);
        this.state = 155;
        this.noteLocation();
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 156;
            this.match(pumlParser.SPACE);
            this.state = 157;
            this.color();

        }
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 160;
            this.match(pumlParser.SPACE);
        }

        this.state = 163;
        this.match(pumlParser.COLON);
        this.state = 165;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 164;
            this.noteTextLine();

        }
        this.state = 167;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_singleLineHNote;
    return this;
}

SingleLineHNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleLineHNoteContext.prototype.constructor = SingleLineHNoteContext;

SingleLineHNoteContext.prototype.HNOTE = function() {
    return this.getToken(pumlParser.HNOTE, 0);
};

SingleLineHNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


SingleLineHNoteContext.prototype.noteLocation = function() {
    return this.getTypedRuleContext(NoteLocationContext,0);
};

SingleLineHNoteContext.prototype.COLON = function() {
    return this.getToken(pumlParser.COLON, 0);
};

SingleLineHNoteContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
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




pumlParser.SingleLineHNoteContext = SingleLineHNoteContext;

pumlParser.prototype.singleLineHNote = function() {

    var localctx = new SingleLineHNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, pumlParser.RULE_singleLineHNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(pumlParser.HNOTE);
        this.state = 170;
        this.match(pumlParser.SPACE);
        this.state = 171;
        this.noteLocation();
        this.state = 174;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 172;
            this.match(pumlParser.SPACE);
            this.state = 173;
            this.color();

        }
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 176;
            this.match(pumlParser.SPACE);
        }

        this.state = 179;
        this.match(pumlParser.COLON);
        this.state = 181;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 180;
            this.noteTextLine();

        }
        this.state = 183;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_multiLineNote;
    return this;
}

MultiLineNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiLineNoteContext.prototype.constructor = MultiLineNoteContext;

MultiLineNoteContext.prototype.NOTE = function() {
    return this.getToken(pumlParser.NOTE, 0);
};

MultiLineNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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
        return this.getTokens(pumlParser.CR);
    } else {
        return this.getToken(pumlParser.CR, i);
    }
};


MultiLineNoteContext.prototype.noteTextLines = function() {
    return this.getTypedRuleContext(NoteTextLinesContext,0);
};

MultiLineNoteContext.prototype.ENDNOTE = function() {
    return this.getToken(pumlParser.ENDNOTE, 0);
};

MultiLineNoteContext.prototype.END_NOTE = function() {
    return this.getToken(pumlParser.END_NOTE, 0);
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




pumlParser.MultiLineNoteContext = MultiLineNoteContext;

pumlParser.prototype.multiLineNote = function() {

    var localctx = new MultiLineNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, pumlParser.RULE_multiLineNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(pumlParser.NOTE);
        this.state = 186;
        this.match(pumlParser.SPACE);
        this.state = 187;
        this.noteLocation();
        this.state = 190;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 188;
            this.match(pumlParser.SPACE);
            this.state = 189;
            this.color();

        }
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 192;
            this.match(pumlParser.SPACE);
        }

        this.state = 195;
        this.match(pumlParser.CR);
        this.state = 196;
        this.noteTextLines();
        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 197;
            this.match(pumlParser.CR);
        }

        this.state = 200;
        _la = this._input.LA(1);
        if(!(_la===pumlParser.ENDNOTE || _la===pumlParser.END_NOTE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 201;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_multiLineRNote;
    return this;
}

MultiLineRNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiLineRNoteContext.prototype.constructor = MultiLineRNoteContext;

MultiLineRNoteContext.prototype.RNOTE = function() {
    return this.getToken(pumlParser.RNOTE, 0);
};

MultiLineRNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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
        return this.getTokens(pumlParser.CR);
    } else {
        return this.getToken(pumlParser.CR, i);
    }
};


MultiLineRNoteContext.prototype.noteTextLines = function() {
    return this.getTypedRuleContext(NoteTextLinesContext,0);
};

MultiLineRNoteContext.prototype.ENDNOTE = function() {
    return this.getToken(pumlParser.ENDNOTE, 0);
};

MultiLineRNoteContext.prototype.END_NOTE = function() {
    return this.getToken(pumlParser.END_NOTE, 0);
};

MultiLineRNoteContext.prototype.ENDRNOTE = function() {
    return this.getToken(pumlParser.ENDRNOTE, 0);
};

MultiLineRNoteContext.prototype.END_RNOTE = function() {
    return this.getToken(pumlParser.END_RNOTE, 0);
};

MultiLineRNoteContext.prototype.ENDHNOTE = function() {
    return this.getToken(pumlParser.ENDHNOTE, 0);
};

MultiLineRNoteContext.prototype.END_HNOTE = function() {
    return this.getToken(pumlParser.END_HNOTE, 0);
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




pumlParser.MultiLineRNoteContext = MultiLineRNoteContext;

pumlParser.prototype.multiLineRNote = function() {

    var localctx = new MultiLineRNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, pumlParser.RULE_multiLineRNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(pumlParser.RNOTE);
        this.state = 204;
        this.match(pumlParser.SPACE);
        this.state = 205;
        this.noteLocation();
        this.state = 208;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 206;
            this.match(pumlParser.SPACE);
            this.state = 207;
            this.color();

        }
        this.state = 211;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 210;
            this.match(pumlParser.SPACE);
        }

        this.state = 213;
        this.match(pumlParser.CR);
        this.state = 214;
        this.noteTextLines();
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 215;
            this.match(pumlParser.CR);
        }

        this.state = 218;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.ENDNOTE) | (1 << pumlParser.ENDRNOTE) | (1 << pumlParser.ENDHNOTE) | (1 << pumlParser.END_NOTE) | (1 << pumlParser.END_RNOTE) | (1 << pumlParser.END_HNOTE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 219;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_multiLineHNote;
    return this;
}

MultiLineHNoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiLineHNoteContext.prototype.constructor = MultiLineHNoteContext;

MultiLineHNoteContext.prototype.HNOTE = function() {
    return this.getToken(pumlParser.HNOTE, 0);
};

MultiLineHNoteContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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
        return this.getTokens(pumlParser.CR);
    } else {
        return this.getToken(pumlParser.CR, i);
    }
};


MultiLineHNoteContext.prototype.noteTextLines = function() {
    return this.getTypedRuleContext(NoteTextLinesContext,0);
};

MultiLineHNoteContext.prototype.ENDNOTE = function() {
    return this.getToken(pumlParser.ENDNOTE, 0);
};

MultiLineHNoteContext.prototype.END_NOTE = function() {
    return this.getToken(pumlParser.END_NOTE, 0);
};

MultiLineHNoteContext.prototype.ENDRNOTE = function() {
    return this.getToken(pumlParser.ENDRNOTE, 0);
};

MultiLineHNoteContext.prototype.END_RNOTE = function() {
    return this.getToken(pumlParser.END_RNOTE, 0);
};

MultiLineHNoteContext.prototype.ENDHNOTE = function() {
    return this.getToken(pumlParser.ENDHNOTE, 0);
};

MultiLineHNoteContext.prototype.END_HNOTE = function() {
    return this.getToken(pumlParser.END_HNOTE, 0);
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




pumlParser.MultiLineHNoteContext = MultiLineHNoteContext;

pumlParser.prototype.multiLineHNote = function() {

    var localctx = new MultiLineHNoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, pumlParser.RULE_multiLineHNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(pumlParser.HNOTE);
        this.state = 222;
        this.match(pumlParser.SPACE);
        this.state = 223;
        this.noteLocation();
        this.state = 226;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 224;
            this.match(pumlParser.SPACE);
            this.state = 225;
            this.color();

        }
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 228;
            this.match(pumlParser.SPACE);
        }

        this.state = 231;
        this.match(pumlParser.CR);
        this.state = 232;
        this.noteTextLines();
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 233;
            this.match(pumlParser.CR);
        }

        this.state = 236;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.ENDNOTE) | (1 << pumlParser.ENDRNOTE) | (1 << pumlParser.ENDHNOTE) | (1 << pumlParser.END_NOTE) | (1 << pumlParser.END_RNOTE) | (1 << pumlParser.END_HNOTE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 237;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_noteLocation;
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
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


NoteLocationContext.prototype.OF = function() {
    return this.getToken(pumlParser.OF, 0);
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
        return this.getTokens(pumlParser.COMMA);
    } else {
        return this.getToken(pumlParser.COMMA, i);
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




pumlParser.NoteLocationContext = NoteLocationContext;

pumlParser.prototype.noteLocation = function() {

    var localctx = new NoteLocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, pumlParser.RULE_noteLocation);
    var _la = 0; // Token type
    try {
        this.state = 286;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParser.RIGHT:
            this.enterOuterAlt(localctx, 1);
            this.state = 239;
            this.noteLocationRight();
            this.state = 254;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
            if(la_===1) {
                this.state = 240;
                this.match(pumlParser.SPACE);
                this.state = 241;
                this.match(pumlParser.OF);
                this.state = 242;
                this.match(pumlParser.SPACE);
                this.state = 243;
                this.noteAnchor();
                this.state = 251;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 245;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===pumlParser.SPACE) {
                            this.state = 244;
                            this.match(pumlParser.SPACE);
                        }

                        this.state = 247;
                        this.match(pumlParser.COMMA);
                        this.state = 248;
                        this.noteAnchor(); 
                    }
                    this.state = 253;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
                }


            }
            break;
        case pumlParser.LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            this.noteLocationLeft();
            this.state = 271;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 257;
                this.match(pumlParser.SPACE);
                this.state = 258;
                this.match(pumlParser.OF);
                this.state = 259;
                this.match(pumlParser.SPACE);
                this.state = 260;
                this.noteAnchor();
                this.state = 268;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===pumlParser.SPACE) {
                            this.state = 261;
                            this.match(pumlParser.SPACE);
                        }

                        this.state = 264;
                        this.match(pumlParser.COMMA);
                        this.state = 265;
                        this.noteAnchor(); 
                    }
                    this.state = 270;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
                }


            }
            break;
        case pumlParser.OVER:
            this.enterOuterAlt(localctx, 3);
            this.state = 273;
            this.noteLocationOver();

            this.state = 274;
            this.match(pumlParser.SPACE);
            this.state = 275;
            this.noteAnchor();
            this.state = 283;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 277;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===pumlParser.SPACE) {
                        this.state = 276;
                        this.match(pumlParser.SPACE);
                    }

                    this.state = 279;
                    this.match(pumlParser.COMMA);
                    this.state = 280;
                    this.noteAnchor(); 
                }
                this.state = 285;
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
    this.ruleIndex = pumlParser.RULE_noteLocationRight;
    return this;
}

NoteLocationRightContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationRightContext.prototype.constructor = NoteLocationRightContext;

NoteLocationRightContext.prototype.RIGHT = function() {
    return this.getToken(pumlParser.RIGHT, 0);
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




pumlParser.NoteLocationRightContext = NoteLocationRightContext;

pumlParser.prototype.noteLocationRight = function() {

    var localctx = new NoteLocationRightContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, pumlParser.RULE_noteLocationRight);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(pumlParser.RIGHT);
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
    this.ruleIndex = pumlParser.RULE_noteLocationLeft;
    return this;
}

NoteLocationLeftContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationLeftContext.prototype.constructor = NoteLocationLeftContext;

NoteLocationLeftContext.prototype.LEFT = function() {
    return this.getToken(pumlParser.LEFT, 0);
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




pumlParser.NoteLocationLeftContext = NoteLocationLeftContext;

pumlParser.prototype.noteLocationLeft = function() {

    var localctx = new NoteLocationLeftContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, pumlParser.RULE_noteLocationLeft);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(pumlParser.LEFT);
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
    this.ruleIndex = pumlParser.RULE_noteLocationOver;
    return this;
}

NoteLocationOverContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteLocationOverContext.prototype.constructor = NoteLocationOverContext;

NoteLocationOverContext.prototype.OVER = function() {
    return this.getToken(pumlParser.OVER, 0);
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




pumlParser.NoteLocationOverContext = NoteLocationOverContext;

pumlParser.prototype.noteLocationOver = function() {

    var localctx = new NoteLocationOverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, pumlParser.RULE_noteLocationOver);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(pumlParser.OVER);
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
    this.ruleIndex = pumlParser.RULE_noteTextLine;
    return this;
}

NoteTextLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteTextLineContext.prototype.constructor = NoteTextLineContext;

NoteTextLineContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ANY);
    } else {
        return this.getToken(pumlParser.ANY, i);
    }
};


NoteTextLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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




pumlParser.NoteTextLineContext = NoteTextLineContext;

pumlParser.prototype.noteTextLine = function() {

    var localctx = new NoteTextLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, pumlParser.RULE_noteTextLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 294;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 299;
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
    this.ruleIndex = pumlParser.RULE_noteTextLines;
    return this;
}

NoteTextLinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteTextLinesContext.prototype.constructor = NoteTextLinesContext;

NoteTextLinesContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ANY);
    } else {
        return this.getToken(pumlParser.ANY, i);
    }
};


NoteTextLinesContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


NoteTextLinesContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.CR);
    } else {
        return this.getToken(pumlParser.CR, i);
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




pumlParser.NoteTextLinesContext = NoteTextLinesContext;

pumlParser.prototype.noteTextLines = function() {

    var localctx = new NoteTextLinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, pumlParser.RULE_noteTextLines);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 300;
                _la = this._input.LA(1);
                if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (pumlParser.SPACE - 34)) | (1 << (pumlParser.CR - 34)) | (1 << (pumlParser.ANY - 34)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 305;
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
    this.ruleIndex = pumlParser.RULE_noteAnchor;
    return this;
}

NoteAnchorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteAnchorContext.prototype.constructor = NoteAnchorContext;

NoteAnchorContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ANY);
    } else {
        return this.getToken(pumlParser.ANY, i);
    }
};


NoteAnchorContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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




pumlParser.NoteAnchorContext = NoteAnchorContext;

pumlParser.prototype.noteAnchor = function() {

    var localctx = new NoteAnchorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, pumlParser.RULE_noteAnchor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 306;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 311;
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
    this.ruleIndex = pumlParser.RULE_declareParticipant;
    return this;
}

DeclareParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareParticipantContext.prototype.constructor = DeclareParticipantContext;

DeclareParticipantContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


DeclareParticipantContext.prototype.declareId = function() {
    return this.getTypedRuleContext(DeclareIdContext,0);
};

DeclareParticipantContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
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




pumlParser.DeclareParticipantContext = DeclareParticipantContext;

pumlParser.prototype.declareParticipant = function() {

    var localctx = new DeclareParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, pumlParser.RULE_declareParticipant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParser.PARTICIPANT:
            this.state = 312;
            this.declareDefaultParticipant();
            break;
        case pumlParser.ACTOR:
            this.state = 313;
            this.declareActor();
            break;
        case pumlParser.BOUNDARY:
            this.state = 314;
            this.declareBoundary();
            break;
        case pumlParser.CONTROL:
            this.state = 315;
            this.declareControl();
            break;
        case pumlParser.ENTITY:
            this.state = 316;
            this.declareEntity();
            break;
        case pumlParser.DATABASE:
            this.state = 317;
            this.declareDatabase();
            break;
        case pumlParser.COLLECTIONS:
            this.state = 318;
            this.declareCollections();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 321;
        this.match(pumlParser.SPACE);
        this.state = 322;
        this.declareId();
        this.state = 325;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 323;
            this.match(pumlParser.SPACE);
            this.state = 324;
            this.color();

        }
        this.state = 328;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 327;
            this.match(pumlParser.SPACE);
        }

        this.state = 330;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_declareDefaultParticipant;
    return this;
}

DeclareDefaultParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareDefaultParticipantContext.prototype.constructor = DeclareDefaultParticipantContext;

DeclareDefaultParticipantContext.prototype.PARTICIPANT = function() {
    return this.getToken(pumlParser.PARTICIPANT, 0);
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




pumlParser.DeclareDefaultParticipantContext = DeclareDefaultParticipantContext;

pumlParser.prototype.declareDefaultParticipant = function() {

    var localctx = new DeclareDefaultParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, pumlParser.RULE_declareDefaultParticipant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(pumlParser.PARTICIPANT);
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
    this.ruleIndex = pumlParser.RULE_declareActor;
    return this;
}

DeclareActorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareActorContext.prototype.constructor = DeclareActorContext;

DeclareActorContext.prototype.ACTOR = function() {
    return this.getToken(pumlParser.ACTOR, 0);
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




pumlParser.DeclareActorContext = DeclareActorContext;

pumlParser.prototype.declareActor = function() {

    var localctx = new DeclareActorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, pumlParser.RULE_declareActor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(pumlParser.ACTOR);
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
    this.ruleIndex = pumlParser.RULE_declareBoundary;
    return this;
}

DeclareBoundaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareBoundaryContext.prototype.constructor = DeclareBoundaryContext;

DeclareBoundaryContext.prototype.BOUNDARY = function() {
    return this.getToken(pumlParser.BOUNDARY, 0);
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




pumlParser.DeclareBoundaryContext = DeclareBoundaryContext;

pumlParser.prototype.declareBoundary = function() {

    var localctx = new DeclareBoundaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, pumlParser.RULE_declareBoundary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(pumlParser.BOUNDARY);
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
    this.ruleIndex = pumlParser.RULE_declareControl;
    return this;
}

DeclareControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareControlContext.prototype.constructor = DeclareControlContext;

DeclareControlContext.prototype.CONTROL = function() {
    return this.getToken(pumlParser.CONTROL, 0);
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




pumlParser.DeclareControlContext = DeclareControlContext;

pumlParser.prototype.declareControl = function() {

    var localctx = new DeclareControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, pumlParser.RULE_declareControl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(pumlParser.CONTROL);
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
    this.ruleIndex = pumlParser.RULE_declareEntity;
    return this;
}

DeclareEntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareEntityContext.prototype.constructor = DeclareEntityContext;

DeclareEntityContext.prototype.ENTITY = function() {
    return this.getToken(pumlParser.ENTITY, 0);
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




pumlParser.DeclareEntityContext = DeclareEntityContext;

pumlParser.prototype.declareEntity = function() {

    var localctx = new DeclareEntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, pumlParser.RULE_declareEntity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(pumlParser.ENTITY);
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
    this.ruleIndex = pumlParser.RULE_declareDatabase;
    return this;
}

DeclareDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareDatabaseContext.prototype.constructor = DeclareDatabaseContext;

DeclareDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(pumlParser.DATABASE, 0);
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




pumlParser.DeclareDatabaseContext = DeclareDatabaseContext;

pumlParser.prototype.declareDatabase = function() {

    var localctx = new DeclareDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, pumlParser.RULE_declareDatabase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(pumlParser.DATABASE);
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
    this.ruleIndex = pumlParser.RULE_declareCollections;
    return this;
}

DeclareCollectionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareCollectionsContext.prototype.constructor = DeclareCollectionsContext;

DeclareCollectionsContext.prototype.COLLECTIONS = function() {
    return this.getToken(pumlParser.COLLECTIONS, 0);
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




pumlParser.DeclareCollectionsContext = DeclareCollectionsContext;

pumlParser.prototype.declareCollections = function() {

    var localctx = new DeclareCollectionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, pumlParser.RULE_declareCollections);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(pumlParser.COLLECTIONS);
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
    this.ruleIndex = pumlParser.RULE_declareTitleAsId;
    return this;
}

DeclareTitleAsIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareTitleAsIdContext.prototype.constructor = DeclareTitleAsIdContext;

DeclareTitleAsIdContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

DeclareTitleAsIdContext.prototype.AS = function() {
    return this.getToken(pumlParser.AS, 0);
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




pumlParser.DeclareTitleAsIdContext = DeclareTitleAsIdContext;

pumlParser.prototype.declareTitleAsId = function() {

    var localctx = new DeclareTitleAsIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, pumlParser.RULE_declareTitleAsId);
    try {
        this.state = 354;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 346;
            this.quotedIdentifier();
            this.state = 347;
            this.match(pumlParser.AS);
            this.state = 348;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 350;
            this.identifier();
            this.state = 351;
            this.match(pumlParser.AS);
            this.state = 352;
            this.identifier();
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

function DeclareIdAsTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParser.RULE_declareIdAsTitle;
    return this;
}

DeclareIdAsTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareIdAsTitleContext.prototype.constructor = DeclareIdAsTitleContext;

DeclareIdAsTitleContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

DeclareIdAsTitleContext.prototype.AS = function() {
    return this.getToken(pumlParser.AS, 0);
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




pumlParser.DeclareIdAsTitleContext = DeclareIdAsTitleContext;

pumlParser.prototype.declareIdAsTitle = function() {

    var localctx = new DeclareIdAsTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, pumlParser.RULE_declareIdAsTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.identifier();
        this.state = 357;
        this.match(pumlParser.AS);
        this.state = 358;
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
    this.ruleIndex = pumlParser.RULE_declareId;
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




pumlParser.DeclareIdContext = DeclareIdContext;

pumlParser.prototype.declareId = function() {

    var localctx = new DeclareIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, pumlParser.RULE_declareId);
    try {
        this.state = 362;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 360;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 361;
            this.quotedIdentifier();
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

function SequenceMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParser.RULE_sequenceMessage;
    return this;
}

SequenceMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceMessageContext.prototype.constructor = SequenceMessageContext;

SequenceMessageContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

SequenceMessageContext.prototype.connector = function() {
    return this.getTypedRuleContext(ConnectorContext,0);
};

SequenceMessageContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
};

SequenceMessageContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


SequenceMessageContext.prototype.COLON = function() {
    return this.getToken(pumlParser.COLON, 0);
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




pumlParser.SequenceMessageContext = SequenceMessageContext;

pumlParser.prototype.sequenceMessage = function() {

    var localctx = new SequenceMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, pumlParser.RULE_sequenceMessage);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.participant();
        this.state = 366;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 365;
            this.match(pumlParser.SPACE);
        }

        this.state = 368;
        this.connector();
        this.state = 370;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        if(la_===1) {
            this.state = 369;
            this.match(pumlParser.SPACE);

        }
        this.state = 372;
        this.participant();
        this.state = 374;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 373;
            this.match(pumlParser.SPACE);
        }

        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.COLON) {
            this.state = 376;
            this.match(pumlParser.COLON);
            this.state = 377;
            this.messageText();
        }

        this.state = 380;
        this.match(pumlParser.CR);
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
    this.ruleIndex = pumlParser.RULE_connector;
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




pumlParser.ConnectorContext = ConnectorContext;

pumlParser.prototype.connector = function() {

    var localctx = new ConnectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, pumlParser.RULE_connector);
    try {
        this.state = 386;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParser.CONNECTOR_SINGLE_LEFT:
            this.enterOuterAlt(localctx, 1);
            this.state = 382;
            this.connectorSolid();
            break;
        case pumlParser.CONNECTOR_DOUBLE_LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 383;
            this.connectorDotted();
            break;
        case pumlParser.CONNECTOR_SINGLE_RIGHT:
            this.enterOuterAlt(localctx, 3);
            this.state = 384;
            this.connectorSolidReverse();
            break;
        case pumlParser.CONNECTOR_DOUBLE_RIGHT:
            this.enterOuterAlt(localctx, 4);
            this.state = 385;
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
    this.ruleIndex = pumlParser.RULE_connectorSolid;
    return this;
}

ConnectorSolidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorSolidContext.prototype.constructor = ConnectorSolidContext;

ConnectorSolidContext.prototype.CONNECTOR_SINGLE_LEFT = function() {
    return this.getToken(pumlParser.CONNECTOR_SINGLE_LEFT, 0);
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




pumlParser.ConnectorSolidContext = ConnectorSolidContext;

pumlParser.prototype.connectorSolid = function() {

    var localctx = new ConnectorSolidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, pumlParser.RULE_connectorSolid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(pumlParser.CONNECTOR_SINGLE_LEFT);
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
    this.ruleIndex = pumlParser.RULE_connectorSolidReverse;
    return this;
}

ConnectorSolidReverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorSolidReverseContext.prototype.constructor = ConnectorSolidReverseContext;

ConnectorSolidReverseContext.prototype.CONNECTOR_SINGLE_RIGHT = function() {
    return this.getToken(pumlParser.CONNECTOR_SINGLE_RIGHT, 0);
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




pumlParser.ConnectorSolidReverseContext = ConnectorSolidReverseContext;

pumlParser.prototype.connectorSolidReverse = function() {

    var localctx = new ConnectorSolidReverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, pumlParser.RULE_connectorSolidReverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(pumlParser.CONNECTOR_SINGLE_RIGHT);
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
    this.ruleIndex = pumlParser.RULE_connectorDotted;
    return this;
}

ConnectorDottedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorDottedContext.prototype.constructor = ConnectorDottedContext;

ConnectorDottedContext.prototype.CONNECTOR_DOUBLE_LEFT = function() {
    return this.getToken(pumlParser.CONNECTOR_DOUBLE_LEFT, 0);
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




pumlParser.ConnectorDottedContext = ConnectorDottedContext;

pumlParser.prototype.connectorDotted = function() {

    var localctx = new ConnectorDottedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, pumlParser.RULE_connectorDotted);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(pumlParser.CONNECTOR_DOUBLE_LEFT);
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
    this.ruleIndex = pumlParser.RULE_connectorDottedReverse;
    return this;
}

ConnectorDottedReverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectorDottedReverseContext.prototype.constructor = ConnectorDottedReverseContext;

ConnectorDottedReverseContext.prototype.CONNECTOR_DOUBLE_RIGHT = function() {
    return this.getToken(pumlParser.CONNECTOR_DOUBLE_RIGHT, 0);
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




pumlParser.ConnectorDottedReverseContext = ConnectorDottedReverseContext;

pumlParser.prototype.connectorDottedReverse = function() {

    var localctx = new ConnectorDottedReverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, pumlParser.RULE_connectorDottedReverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(pumlParser.CONNECTOR_DOUBLE_RIGHT);
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

function ParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParser.RULE_participant;
    return this;
}

ParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantContext.prototype.constructor = ParticipantContext;

ParticipantContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ParticipantContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

ParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterParticipant(this);
	}
};

ParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitParticipant(this);
	}
};

ParticipantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitParticipant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParser.ParticipantContext = ParticipantContext;

pumlParser.prototype.participant = function() {

    var localctx = new ParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, pumlParser.RULE_participant);
    try {
        this.state = 398;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 396;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 397;
            this.quotedIdentifier();
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

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


IdentifierContext.prototype.CR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.CR);
    } else {
        return this.getToken(pumlParser.CR, i);
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




pumlParser.IdentifierContext = IdentifierContext;

pumlParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, pumlParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 400;
                _la = this._input.LA(1);
                if(_la<=0 || _la===pumlParser.SPACE || _la===pumlParser.CR) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 405;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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
    this.ruleIndex = pumlParser.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.DBLQUOTE);
    } else {
        return this.getToken(pumlParser.DBLQUOTE, i);
    }
};


QuotedIdentifierContext.prototype.ESC_DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ESC_DBLQUOTE);
    } else {
        return this.getToken(pumlParser.ESC_DBLQUOTE, i);
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




pumlParser.QuotedIdentifierContext = QuotedIdentifierContext;

pumlParser.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, pumlParser.RULE_quotedIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(pumlParser.DBLQUOTE);
        this.state = 411;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.STARTUML) | (1 << pumlParser.STARTUMLLINE) | (1 << pumlParser.ENDUML) | (1 << pumlParser.PARTICIPANT) | (1 << pumlParser.ACTOR) | (1 << pumlParser.BOUNDARY) | (1 << pumlParser.CONTROL) | (1 << pumlParser.ENTITY) | (1 << pumlParser.DATABASE) | (1 << pumlParser.COLLECTIONS) | (1 << pumlParser.NOTE) | (1 << pumlParser.RNOTE) | (1 << pumlParser.HNOTE) | (1 << pumlParser.LEFT) | (1 << pumlParser.RIGHT) | (1 << pumlParser.OVER) | (1 << pumlParser.ENDNOTE) | (1 << pumlParser.ENDRNOTE) | (1 << pumlParser.ENDHNOTE) | (1 << pumlParser.END_NOTE) | (1 << pumlParser.END_RNOTE) | (1 << pumlParser.END_HNOTE) | (1 << pumlParser.OF) | (1 << pumlParser.AS) | (1 << pumlParser.CONNECTOR_SINGLE_LEFT) | (1 << pumlParser.CONNECTOR_SINGLE_RIGHT) | (1 << pumlParser.CONNECTOR_DOUBLE_LEFT) | (1 << pumlParser.CONNECTOR_DOUBLE_RIGHT) | (1 << pumlParser.SEMICOLON) | (1 << pumlParser.COLON) | (1 << pumlParser.COMMA))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (pumlParser.ESC_DBLQUOTE - 33)) | (1 << (pumlParser.SPACE - 33)) | (1 << (pumlParser.WS - 33)) | (1 << (pumlParser.CR - 33)) | (1 << (pumlParser.SINGLE_LINE_COMMENT - 33)) | (1 << (pumlParser.MULTI_LINE_COMMENT - 33)) | (1 << (pumlParser.HEX_COLORS - 33)) | (1 << (pumlParser.NAMED_COLORS - 33)) | (1 << (pumlParser.ANY - 33)))) !== 0)) {
            this.state = 409;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
            switch(la_) {
            case 1:
                this.state = 407;
                _la = this._input.LA(1);
                if(_la<=0 || _la===pumlParser.DBLQUOTE) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                break;

            case 2:
                this.state = 408;
                this.match(pumlParser.ESC_DBLQUOTE);
                break;

            }
            this.state = 413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 414;
        this.match(pumlParser.DBLQUOTE);
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
    this.ruleIndex = pumlParser.RULE_messageText;
    return this;
}

MessageTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageTextContext.prototype.constructor = MessageTextContext;

MessageTextContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ANY);
    } else {
        return this.getToken(pumlParser.ANY, i);
    }
};


MessageTextContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
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




pumlParser.MessageTextContext = MessageTextContext;

pumlParser.prototype.messageText = function() {

    var localctx = new MessageTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, pumlParser.RULE_messageText);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 416;
        		_la = this._input.LA(1);
        		if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
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
        	this.state = 419; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,51, this._ctx);
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


exports.pumlParser = pumlParser;
