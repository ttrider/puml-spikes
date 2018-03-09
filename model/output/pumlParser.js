// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlListener = require('./pumlListener').pumlListener;
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001e\u014a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0003\u0002\u0006\u0002@\n\u0002\r\u0002\u000e",
    "\u0002A\u0003\u0003\u0003\u0003\u0007\u0003F\n\u0003\f\u0003\u000e\u0003",
    "I\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003M\n\u0003\f\u0003\u000e",
    "\u0003P\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u0005V\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0007\u0006",
    "[\n\u0006\f\u0006\u000e\u0006^\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007c\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\no\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bv\n\u000b\u0003",
    "\u000b\u0005\u000by\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b}\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u0086\n\f\u0003\f\u0005\f\u0089\n\f\u0003\f\u0003\f\u0005\f\u008d",
    "\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r",
    "\u0096\n\r\u0003\r\u0005\r\u0099\n\r\u0003\r\u0003\r\u0005\r\u009d\n",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00a6\n\u000e\u0003\u000e\u0005\u000e\u00a9\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00ae\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00b8\n\u000f\u0003\u000f\u0005\u000f",
    "\u00bb\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00c0",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ca\n\u0010\u0003",
    "\u0010\u0005\u0010\u00cd\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00d2\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00dd\n\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00e1\n\u0011",
    "\f\u0011\u000e\u0011\u00e4\u000b\u0011\u0005\u0011\u00e6\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00ee\n\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00f2\n\u0011",
    "\f\u0011\u000e\u0011\u00f5\u000b\u0011\u0005\u0011\u00f7\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00fd\n\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u0101\n\u0011\f\u0011\u000e\u0011",
    "\u0104\u000b\u0011\u0005\u0011\u0106\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0007\u0015",
    "\u010f\n\u0015\f\u0015\u000e\u0015\u0112\u000b\u0015\u0003\u0016\u0007",
    "\u0016\u0115\n\u0016\f\u0016\u000e\u0016\u0118\u000b\u0016\u0003\u0017",
    "\u0007\u0017\u011b\n\u0017\f\u0017\u000e\u0017\u011e\u000b\u0017\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u0122\n\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u0126\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u012a",
    "\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u012e\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019",
    "\u0136\n\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0006\u001e\u0141",
    "\n\u001e\r\u001e\u000e\u001e\u0142\u0003\u001f\u0006\u001f\u0146\n\u001f",
    "\r\u001f\u000e\u001f\u0147\u0003\u001f\b\\\u0110\u0116\u011c\u0142\u0147",
    "\u0002 \u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<\u0002\b\u0004\u0002\u001a\u001a\u001e",
    "\u001e\u0003\u0002\u001c\u001d\u0003\u0002\u001a\u001b\u0004\u0002\f",
    "\f\u000f\u000f\u0003\u0002\f\u0011\u0004\u0002\u001a\u001b\u001e\u001e",
    "\u0002\u015f\u0002?\u0003\u0002\u0002\u0002\u0004C\u0003\u0002\u0002",
    "\u0002\u0006Q\u0003\u0002\u0002\u0002\bS\u0003\u0002\u0002\u0002\n\\",
    "\u0003\u0002\u0002\u0002\fb\u0003\u0002\u0002\u0002\u000ed\u0003\u0002",
    "\u0002\u0002\u0010f\u0003\u0002\u0002\u0002\u0012n\u0003\u0002\u0002",
    "\u0002\u0014p\u0003\u0002\u0002\u0002\u0016\u0080\u0003\u0002\u0002",
    "\u0002\u0018\u0090\u0003\u0002\u0002\u0002\u001a\u00a0\u0003\u0002\u0002",
    "\u0002\u001c\u00b2\u0003\u0002\u0002\u0002\u001e\u00c4\u0003\u0002\u0002",
    "\u0002 \u0105\u0003\u0002\u0002\u0002\"\u0107\u0003\u0002\u0002\u0002",
    "$\u0109\u0003\u0002\u0002\u0002&\u010b\u0003\u0002\u0002\u0002(\u0110",
    "\u0003\u0002\u0002\u0002*\u0116\u0003\u0002\u0002\u0002,\u011c\u0003",
    "\u0002\u0002\u0002.\u011f\u0003\u0002\u0002\u00020\u0135\u0003\u0002",
    "\u0002\u00022\u0137\u0003\u0002\u0002\u00024\u0139\u0003\u0002\u0002",
    "\u00026\u013b\u0003\u0002\u0002\u00028\u013d\u0003\u0002\u0002\u0002",
    ":\u0140\u0003\u0002\u0002\u0002<\u0145\u0003\u0002\u0002\u0002>@\u0005",
    "\u0004\u0003\u0002?>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0003\u0003\u0002",
    "\u0002\u0002CG\u0005\u0006\u0004\u0002DF\u0005\f\u0007\u0002ED\u0003",
    "\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "GH\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002",
    "\u0002JN\u0005\b\u0005\u0002KM\u0007\u001b\u0002\u0002LK\u0003\u0002",
    "\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002O\u0005\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002",
    "\u0002QR\u0007\u0004\u0002\u0002R\u0007\u0003\u0002\u0002\u0002SU\u0007",
    "\u0005\u0002\u0002TV\u0007\u001a\u0002\u0002UT\u0003\u0002\u0002\u0002",
    "UV\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0007\u001b\u0002",
    "\u0002X\t\u0003\u0002\u0002\u0002Y[\t\u0002\u0002\u0002ZY\u0003\u0002",
    "\u0002\u0002[^\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002\\",
    "Z\u0003\u0002\u0002\u0002]\u000b\u0003\u0002\u0002\u0002^\\\u0003\u0002",
    "\u0002\u0002_c\u0005\u0010\t\u0002`c\u0005\u0012\n\u0002ac\u0005.\u0018",
    "\u0002b_\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002",
    "\u0002\u0002c\r\u0003\u0002\u0002\u0002de\t\u0003\u0002\u0002e\u000f",
    "\u0003\u0002\u0002\u0002fg\t\u0004\u0002\u0002g\u0011\u0003\u0002\u0002",
    "\u0002ho\u0005\u0014\u000b\u0002io\u0005\u0016\f\u0002jo\u0005\u0018",
    "\r\u0002ko\u0005\u001a\u000e\u0002lo\u0005\u001c\u000f\u0002mo\u0005",
    "\u001e\u0010\u0002nh\u0003\u0002\u0002\u0002ni\u0003\u0002\u0002\u0002",
    "nj\u0003\u0002\u0002\u0002nk\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002",
    "\u0002nm\u0003\u0002\u0002\u0002o\u0013\u0003\u0002\u0002\u0002pq\u0007",
    "\u0006\u0002\u0002qr\u0007\u001a\u0002\u0002ru\u0005 \u0011\u0002st",
    "\u0007\u001a\u0002\u0002tv\u0005\u000e\b\u0002us\u0003\u0002\u0002\u0002",
    "uv\u0003\u0002\u0002\u0002vx\u0003\u0002\u0002\u0002wy\u0007\u001a\u0002",
    "\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z|\u0007\u0018\u0002\u0002{}\u0005(\u0015\u0002|{\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002",
    "~\u007f\u0007\u001b\u0002\u0002\u007f\u0015\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0007\u0007\u0002\u0002\u0081\u0082\u0007\u001a\u0002\u0002",
    "\u0082\u0085\u0005 \u0011\u0002\u0083\u0084\u0007\u001a\u0002\u0002",
    "\u0084\u0086\u0005\u000e\b\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002",
    "\u0087\u0089\u0007\u001a\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u008c\u0007\u0018\u0002\u0002\u008b\u008d\u0005(\u0015\u0002",
    "\u008c\u008b\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u001b\u0002\u0002",
    "\u008f\u0017\u0003\u0002\u0002\u0002\u0090\u0091\u0007\b\u0002\u0002",
    "\u0091\u0092\u0007\u001a\u0002\u0002\u0092\u0095\u0005 \u0011\u0002",
    "\u0093\u0094\u0007\u001a\u0002\u0002\u0094\u0096\u0005\u000e\b\u0002",
    "\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002",
    "\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0099\u0007\u001a\u0002\u0002",
    "\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002",
    "\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009c\u0007\u0018\u0002\u0002",
    "\u009b\u009d\u0005(\u0015\u0002\u009c\u009b\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0007\u001b\u0002\u0002\u009f\u0019\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0007\u0006\u0002\u0002\u00a1\u00a2\u0007\u001a\u0002\u0002",
    "\u00a2\u00a5\u0005 \u0011\u0002\u00a3\u00a4\u0007\u001a\u0002\u0002",
    "\u00a4\u00a6\u0005\u000e\b\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002",
    "\u00a7\u00a9\u0007\u001a\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u0007\u001b\u0002\u0002\u00ab\u00ad\u0005*\u0016\u0002",
    "\u00ac\u00ae\u0007\u001b\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002",
    "\u00af\u00b0\t\u0005\u0002\u0002\u00b0\u00b1\u0007\u001b\u0002\u0002",
    "\u00b1\u001b\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0007\u0002\u0002",
    "\u00b3\u00b4\u0007\u001a\u0002\u0002\u00b4\u00b7\u0005 \u0011\u0002",
    "\u00b5\u00b6\u0007\u001a\u0002\u0002\u00b6\u00b8\u0005\u000e\b\u0002",
    "\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002",
    "\u00b8\u00ba\u0003\u0002\u0002\u0002\u00b9\u00bb\u0007\u001a\u0002\u0002",
    "\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u001b\u0002\u0002",
    "\u00bd\u00bf\u0005*\u0016\u0002\u00be\u00c0\u0007\u001b\u0002\u0002",
    "\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\t\u0006\u0002\u0002",
    "\u00c2\u00c3\u0007\u001b\u0002\u0002\u00c3\u001d\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0007\b\u0002\u0002\u00c5\u00c6\u0007\u001a\u0002\u0002",
    "\u00c6\u00c9\u0005 \u0011\u0002\u00c7\u00c8\u0007\u001a\u0002\u0002",
    "\u00c8\u00ca\u0005\u000e\b\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002",
    "\u00cb\u00cd\u0007\u001a\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007\u001b\u0002\u0002\u00cf\u00d1\u0005*\u0016\u0002",
    "\u00d0\u00d2\u0007\u001b\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\t\u0006\u0002\u0002\u00d4\u00d5\u0007\u001b\u0002\u0002",
    "\u00d5\u001f\u0003\u0002\u0002\u0002\u00d6\u00e5\u0005\"\u0012\u0002",
    "\u00d7\u00d8\u0007\u001a\u0002\u0002\u00d8\u00d9\u0007\u0012\u0002\u0002",
    "\u00d9\u00da\u0007\u001a\u0002\u0002\u00da\u00e2\u0005,\u0017\u0002",
    "\u00db\u00dd\u0007\u001a\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0007\u0019\u0002\u0002\u00df\u00e1\u0005,\u0017\u0002",
    "\u00e0\u00dc\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002\u0002\u0002",
    "\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002",
    "\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002",
    "\u00e5\u00d7\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u0106\u0003\u0002\u0002\u0002\u00e7\u00f6\u0005$\u0013\u0002",
    "\u00e8\u00e9\u0007\u001a\u0002\u0002\u00e9\u00ea\u0007\u0012\u0002\u0002",
    "\u00ea\u00eb\u0007\u001a\u0002\u0002\u00eb\u00f3\u0005,\u0017\u0002",
    "\u00ec\u00ee\u0007\u001a\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002",
    "\u00ef\u00f0\u0007\u0019\u0002\u0002\u00f0\u00f2\u0005,\u0017\u0002",
    "\u00f1\u00ed\u0003\u0002\u0002\u0002\u00f2\u00f5\u0003\u0002\u0002\u0002",
    "\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002",
    "\u00f4\u00f7\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002",
    "\u00f6\u00e8\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002",
    "\u00f7\u0106\u0003\u0002\u0002\u0002\u00f8\u00f9\u0005&\u0014\u0002",
    "\u00f9\u00fa\u0007\u001a\u0002\u0002\u00fa\u0102\u0005,\u0017\u0002",
    "\u00fb\u00fd\u0007\u001a\u0002\u0002\u00fc\u00fb\u0003\u0002\u0002\u0002",
    "\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0007\u0019\u0002\u0002\u00ff\u0101\u0005,\u0017\u0002",
    "\u0100\u00fc\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002",
    "\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u0103\u0106\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002",
    "\u0105\u00d6\u0003\u0002\u0002\u0002\u0105\u00e7\u0003\u0002\u0002\u0002",
    "\u0105\u00f8\u0003\u0002\u0002\u0002\u0106!\u0003\u0002\u0002\u0002",
    "\u0107\u0108\u0007\n\u0002\u0002\u0108#\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0007\t\u0002\u0002\u010a%\u0003\u0002\u0002\u0002\u010b\u010c",
    "\u0007\u000b\u0002\u0002\u010c\'\u0003\u0002\u0002\u0002\u010d\u010f",
    "\t\u0002\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010f\u0112",
    "\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0110\u010e",
    "\u0003\u0002\u0002\u0002\u0111)\u0003\u0002\u0002\u0002\u0112\u0110",
    "\u0003\u0002\u0002\u0002\u0113\u0115\t\u0007\u0002\u0002\u0114\u0113",
    "\u0003\u0002\u0002\u0002\u0115\u0118\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0117+",
    "\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u011b",
    "\t\u0002\u0002\u0002\u011a\u0119\u0003\u0002\u0002\u0002\u011b\u011e",
    "\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011c\u011a",
    "\u0003\u0002\u0002\u0002\u011d-\u0003\u0002\u0002\u0002\u011e\u011c",
    "\u0003\u0002\u0002\u0002\u011f\u0121\u0005:\u001e\u0002\u0120\u0122",
    "\u0007\u001a\u0002\u0002\u0121\u0120\u0003\u0002\u0002\u0002\u0121\u0122",
    "\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0125",
    "\u00050\u0019\u0002\u0124\u0126\u0007\u001a\u0002\u0002\u0125\u0124",
    "\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0127",
    "\u0003\u0002\u0002\u0002\u0127\u0129\u0005:\u001e\u0002\u0128\u012a",
    "\u0007\u001a\u0002\u0002\u0129\u0128\u0003\u0002\u0002\u0002\u0129\u012a",
    "\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002\u012b\u012c",
    "\u0007\u0018\u0002\u0002\u012c\u012e\u0005<\u001f\u0002\u012d\u012b",
    "\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012f",
    "\u0003\u0002\u0002\u0002\u012f\u0130\u0007\u001b\u0002\u0002\u0130/",
    "\u0003\u0002\u0002\u0002\u0131\u0136\u00052\u001a\u0002\u0132\u0136",
    "\u00056\u001c\u0002\u0133\u0136\u00054\u001b\u0002\u0134\u0136\u0005",
    "8\u001d\u0002\u0135\u0131\u0003\u0002\u0002\u0002\u0135\u0132\u0003",
    "\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135\u0134\u0003",
    "\u0002\u0002\u0002\u01361\u0003\u0002\u0002\u0002\u0137\u0138\u0007",
    "\u0013\u0002\u0002\u01383\u0003\u0002\u0002\u0002\u0139\u013a\u0007",
    "\u0014\u0002\u0002\u013a5\u0003\u0002\u0002\u0002\u013b\u013c\u0007",
    "\u0015\u0002\u0002\u013c7\u0003\u0002\u0002\u0002\u013d\u013e\u0007",
    "\u0016\u0002\u0002\u013e9\u0003\u0002\u0002\u0002\u013f\u0141\t\u0002",
    "\u0002\u0002\u0140\u013f\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002",
    "\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0142\u0140\u0003\u0002",
    "\u0002\u0002\u0143;\u0003\u0002\u0002\u0002\u0144\u0146\t\u0002\u0002",
    "\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002",
    "\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0147\u0145\u0003\u0002\u0002",
    "\u0002\u0148=\u0003\u0002\u0002\u0002.AGNU\\bnux|\u0085\u0088\u008c",
    "\u0095\u0098\u009c\u00a5\u00a8\u00ad\u00b7\u00ba\u00bf\u00c9\u00cc\u00d1",
    "\u00dc\u00e2\u00e5\u00ed\u00f3\u00f6\u00fc\u0102\u0105\u0110\u0116\u011c",
    "\u0121\u0125\u0129\u012d\u0135\u0142\u0147"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", null, "'@enduml'", null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, "'->'", "'<-'", "'-->'", "'<--'", "';'", 
                     "':'", "','" ];

var symbolicNames = [ null, "STARTUML", "STARTUMLLINE", "ENDUML", "NOTE", 
                      "RNOTE", "HNOTE", "LEFT", "RIGHT", "OVER", "ENDNOTE", 
                      "ENDRNOTE", "ENDHNOTE", "END_NOTE", "END_RNOTE", "END_HNOTE", 
                      "OF", "CONNECTOR_SINGLE_LEFT", "CONNECTOR_SINGLE_RIGHT", 
                      "CONNECTOR_DOUBLE_LEFT", "CONNECTOR_DOUBLE_RIGHT", 
                      "SEMICOLON", "COLON", "COMMA", "SPACE", "CR", "HEX_COLORS", 
                      "NAMED_COLORS", "ANY" ];

var ruleNames =  [ "document", "diagram", "startUml", "endUml", "digramName", 
                   "diagramItem", "color", "emptyLine", "note", "singleLineNote", 
                   "singleLineRNote", "singleLineHNote", "multiLineNote", 
                   "multiLineRNote", "multiLineHNote", "noteLocation", "noteLocationRight", 
                   "noteLocationLeft", "noteLocationOver", "noteTextLine", 
                   "noteTextLines", "noteAnchor", "sequenceMessage", "connector", 
                   "connectorSolid", "connectorSolidReverse", "connectorDotted", 
                   "connectorDottedReverse", "participant", "messageText" ];

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
pumlParser.NOTE = 4;
pumlParser.RNOTE = 5;
pumlParser.HNOTE = 6;
pumlParser.LEFT = 7;
pumlParser.RIGHT = 8;
pumlParser.OVER = 9;
pumlParser.ENDNOTE = 10;
pumlParser.ENDRNOTE = 11;
pumlParser.ENDHNOTE = 12;
pumlParser.END_NOTE = 13;
pumlParser.END_RNOTE = 14;
pumlParser.END_HNOTE = 15;
pumlParser.OF = 16;
pumlParser.CONNECTOR_SINGLE_LEFT = 17;
pumlParser.CONNECTOR_SINGLE_RIGHT = 18;
pumlParser.CONNECTOR_DOUBLE_LEFT = 19;
pumlParser.CONNECTOR_DOUBLE_RIGHT = 20;
pumlParser.SEMICOLON = 21;
pumlParser.COLON = 22;
pumlParser.COMMA = 23;
pumlParser.SPACE = 24;
pumlParser.CR = 25;
pumlParser.HEX_COLORS = 26;
pumlParser.NAMED_COLORS = 27;
pumlParser.ANY = 28;

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
pumlParser.RULE_sequenceMessage = 22;
pumlParser.RULE_connector = 23;
pumlParser.RULE_connectorSolid = 24;
pumlParser.RULE_connectorSolidReverse = 25;
pumlParser.RULE_connectorDotted = 26;
pumlParser.RULE_connectorDottedReverse = 27;
pumlParser.RULE_participant = 28;
pumlParser.RULE_messageText = 29;

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
        this.state = 61; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 60;
            this.diagram();
            this.state = 63; 
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
        this.state = 65;
        this.startUml();
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.NOTE) | (1 << pumlParser.RNOTE) | (1 << pumlParser.HNOTE) | (1 << pumlParser.SPACE) | (1 << pumlParser.CR) | (1 << pumlParser.ANY))) !== 0)) {
            this.state = 66;
            this.diagramItem();
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 72;
        this.endUml();
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pumlParser.CR) {
            this.state = 73;
            this.match(pumlParser.CR);
            this.state = 78;
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
        this.state = 79;
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
        this.state = 81;
        this.match(pumlParser.ENDUML);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 82;
            this.match(pumlParser.SPACE);
        }

        this.state = 85;
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
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 87;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 92;
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
        this.state = 96;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            this.emptyLine();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 94;
            this.note();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 95;
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
        this.state = 98;
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
        this.state = 100;
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
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            this.singleLineNote();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.singleLineRNote();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 104;
            this.singleLineHNote();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 105;
            this.multiLineNote();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 106;
            this.multiLineRNote();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 107;
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
        this.state = 110;
        this.match(pumlParser.NOTE);
        this.state = 111;
        this.match(pumlParser.SPACE);
        this.state = 112;
        this.noteLocation();
        this.state = 115;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 113;
            this.match(pumlParser.SPACE);
            this.state = 114;
            this.color();

        }
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 117;
            this.match(pumlParser.SPACE);
        }

        this.state = 120;
        this.match(pumlParser.COLON);
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 121;
            this.noteTextLine();

        }
        this.state = 124;
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
        this.state = 126;
        this.match(pumlParser.RNOTE);
        this.state = 127;
        this.match(pumlParser.SPACE);
        this.state = 128;
        this.noteLocation();
        this.state = 131;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 129;
            this.match(pumlParser.SPACE);
            this.state = 130;
            this.color();

        }
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 133;
            this.match(pumlParser.SPACE);
        }

        this.state = 136;
        this.match(pumlParser.COLON);
        this.state = 138;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 137;
            this.noteTextLine();

        }
        this.state = 140;
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
        this.state = 142;
        this.match(pumlParser.HNOTE);
        this.state = 143;
        this.match(pumlParser.SPACE);
        this.state = 144;
        this.noteLocation();
        this.state = 147;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 145;
            this.match(pumlParser.SPACE);
            this.state = 146;
            this.color();

        }
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 149;
            this.match(pumlParser.SPACE);
        }

        this.state = 152;
        this.match(pumlParser.COLON);
        this.state = 154;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 153;
            this.noteTextLine();

        }
        this.state = 156;
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
        this.state = 158;
        this.match(pumlParser.NOTE);
        this.state = 159;
        this.match(pumlParser.SPACE);
        this.state = 160;
        this.noteLocation();
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 161;
            this.match(pumlParser.SPACE);
            this.state = 162;
            this.color();

        }
        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 165;
            this.match(pumlParser.SPACE);
        }

        this.state = 168;
        this.match(pumlParser.CR);
        this.state = 169;
        this.noteTextLines();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 170;
            this.match(pumlParser.CR);
        }

        this.state = 173;
        _la = this._input.LA(1);
        if(!(_la===pumlParser.ENDNOTE || _la===pumlParser.END_NOTE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 174;
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
        this.state = 176;
        this.match(pumlParser.RNOTE);
        this.state = 177;
        this.match(pumlParser.SPACE);
        this.state = 178;
        this.noteLocation();
        this.state = 181;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 179;
            this.match(pumlParser.SPACE);
            this.state = 180;
            this.color();

        }
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 183;
            this.match(pumlParser.SPACE);
        }

        this.state = 186;
        this.match(pumlParser.CR);
        this.state = 187;
        this.noteTextLines();
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 188;
            this.match(pumlParser.CR);
        }

        this.state = 191;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.ENDNOTE) | (1 << pumlParser.ENDRNOTE) | (1 << pumlParser.ENDHNOTE) | (1 << pumlParser.END_NOTE) | (1 << pumlParser.END_RNOTE) | (1 << pumlParser.END_HNOTE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 192;
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
        this.state = 194;
        this.match(pumlParser.HNOTE);
        this.state = 195;
        this.match(pumlParser.SPACE);
        this.state = 196;
        this.noteLocation();
        this.state = 199;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 197;
            this.match(pumlParser.SPACE);
            this.state = 198;
            this.color();

        }
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 201;
            this.match(pumlParser.SPACE);
        }

        this.state = 204;
        this.match(pumlParser.CR);
        this.state = 205;
        this.noteTextLines();
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 206;
            this.match(pumlParser.CR);
        }

        this.state = 209;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.ENDNOTE) | (1 << pumlParser.ENDRNOTE) | (1 << pumlParser.ENDHNOTE) | (1 << pumlParser.END_NOTE) | (1 << pumlParser.END_RNOTE) | (1 << pumlParser.END_HNOTE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 210;
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
        this.state = 259;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParser.RIGHT:
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.noteLocationRight();
            this.state = 227;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
            if(la_===1) {
                this.state = 213;
                this.match(pumlParser.SPACE);
                this.state = 214;
                this.match(pumlParser.OF);
                this.state = 215;
                this.match(pumlParser.SPACE);
                this.state = 216;
                this.noteAnchor();
                this.state = 224;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 218;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===pumlParser.SPACE) {
                            this.state = 217;
                            this.match(pumlParser.SPACE);
                        }

                        this.state = 220;
                        this.match(pumlParser.COMMA);
                        this.state = 221;
                        this.noteAnchor(); 
                    }
                    this.state = 226;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
                }


            }
            break;
        case pumlParser.LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 229;
            this.noteLocationLeft();
            this.state = 244;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 230;
                this.match(pumlParser.SPACE);
                this.state = 231;
                this.match(pumlParser.OF);
                this.state = 232;
                this.match(pumlParser.SPACE);
                this.state = 233;
                this.noteAnchor();
                this.state = 241;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 235;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===pumlParser.SPACE) {
                            this.state = 234;
                            this.match(pumlParser.SPACE);
                        }

                        this.state = 237;
                        this.match(pumlParser.COMMA);
                        this.state = 238;
                        this.noteAnchor(); 
                    }
                    this.state = 243;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
                }


            }
            break;
        case pumlParser.OVER:
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.noteLocationOver();

            this.state = 247;
            this.match(pumlParser.SPACE);
            this.state = 248;
            this.noteAnchor();
            this.state = 256;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===pumlParser.SPACE) {
                        this.state = 249;
                        this.match(pumlParser.SPACE);
                    }

                    this.state = 252;
                    this.match(pumlParser.COMMA);
                    this.state = 253;
                    this.noteAnchor(); 
                }
                this.state = 258;
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
        this.state = 261;
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
        this.state = 263;
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
        this.state = 265;
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
        this.state = 270;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 267;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 272;
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
        this.state = 276;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 273;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.SPACE) | (1 << pumlParser.CR) | (1 << pumlParser.ANY))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 278;
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
        this.state = 282;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 279;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 284;
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
    this.enterRule(localctx, 44, pumlParser.RULE_sequenceMessage);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.participant();
        this.state = 287;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 286;
            this.match(pumlParser.SPACE);
        }

        this.state = 289;
        this.connector();
        this.state = 291;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 290;
            this.match(pumlParser.SPACE);

        }
        this.state = 293;
        this.participant();
        this.state = 295;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 294;
            this.match(pumlParser.SPACE);
        }

        this.state = 299;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.COLON) {
            this.state = 297;
            this.match(pumlParser.COLON);
            this.state = 298;
            this.messageText();
        }

        this.state = 301;
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
    this.enterRule(localctx, 46, pumlParser.RULE_connector);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParser.CONNECTOR_SINGLE_LEFT:
            this.enterOuterAlt(localctx, 1);
            this.state = 303;
            this.connectorSolid();
            break;
        case pumlParser.CONNECTOR_DOUBLE_LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 304;
            this.connectorDotted();
            break;
        case pumlParser.CONNECTOR_SINGLE_RIGHT:
            this.enterOuterAlt(localctx, 3);
            this.state = 305;
            this.connectorSolidReverse();
            break;
        case pumlParser.CONNECTOR_DOUBLE_RIGHT:
            this.enterOuterAlt(localctx, 4);
            this.state = 306;
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
    this.enterRule(localctx, 48, pumlParser.RULE_connectorSolid);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
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
    this.enterRule(localctx, 50, pumlParser.RULE_connectorSolidReverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
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
    this.enterRule(localctx, 52, pumlParser.RULE_connectorDotted);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
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
    this.enterRule(localctx, 54, pumlParser.RULE_connectorDottedReverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
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

ParticipantContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.ANY);
    } else {
        return this.getToken(pumlParser.ANY, i);
    }
};


ParticipantContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
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
    this.enterRule(localctx, 56, pumlParser.RULE_participant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 317;
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
        	this.state = 320; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
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
    this.enterRule(localctx, 58, pumlParser.RULE_messageText);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 322;
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
        	this.state = 325; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,43, this._ctx);
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
