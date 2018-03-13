// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/pumlLexerFragments.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0002}\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0005",
    "\u001f|\n\u001f\u0002\u0002 \u0003\u0002\u0005\u0002\u0007\u0002\t\u0002",
    "\u000b\u0002\r\u0002\u000f\u0002\u0011\u0002\u0013\u0002\u0015\u0002",
    "\u0017\u0002\u0019\u0002\u001b\u0002\u001d\u0002\u001f\u0002!\u0002",
    "#\u0002%\u0002\'\u0002)\u0002+\u0002-\u0002/\u00021\u00023\u00025\u0002",
    "7\u00029\u0002;\u0002=\u0002\u0003\u0002 \u0004\u0002C\\c|\u0003\u0002",
    "2;\u0005\u00022;CHch\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002EEe",
    "e\u0004\u0002FFff\u0004\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIii\u0004",
    "\u0002JJjj\u0004\u0002KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004\u0002",
    "NNnn\u0004\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002RRr",
    "r\u0004\u0002SSss\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004",
    "\u0002WWww\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002",
    "[[{{\u0004\u0002\\\\||\u0006\u0002#1<B]b}\u0080\u0002_\u0003?\u0003",
    "\u0002\u0002\u0002\u0005A\u0003\u0002\u0002\u0002\u0007C\u0003\u0002",
    "\u0002\u0002\tE\u0003\u0002\u0002\u0002\u000bG\u0003\u0002\u0002\u0002",
    "\rI\u0003\u0002\u0002\u0002\u000fK\u0003\u0002\u0002\u0002\u0011M\u0003",
    "\u0002\u0002\u0002\u0013O\u0003\u0002\u0002\u0002\u0015Q\u0003\u0002",
    "\u0002\u0002\u0017S\u0003\u0002\u0002\u0002\u0019U\u0003\u0002\u0002",
    "\u0002\u001bW\u0003\u0002\u0002\u0002\u001dY\u0003\u0002\u0002\u0002",
    "\u001f[\u0003\u0002\u0002\u0002!]\u0003\u0002\u0002\u0002#_\u0003\u0002",
    "\u0002\u0002%a\u0003\u0002\u0002\u0002\'c\u0003\u0002\u0002\u0002)e",
    "\u0003\u0002\u0002\u0002+g\u0003\u0002\u0002\u0002-i\u0003\u0002\u0002",
    "\u0002/k\u0003\u0002\u0002\u00021m\u0003\u0002\u0002\u00023o\u0003\u0002",
    "\u0002\u00025q\u0003\u0002\u0002\u00027s\u0003\u0002\u0002\u00029u\u0003",
    "\u0002\u0002\u0002;w\u0003\u0002\u0002\u0002={\u0003\u0002\u0002\u0002",
    "?@\t\u0002\u0002\u0002@\u0004\u0003\u0002\u0002\u0002AB\t\u0003\u0002",
    "\u0002B\u0006\u0003\u0002\u0002\u0002CD\t\u0004\u0002\u0002D\b\u0003",
    "\u0002\u0002\u0002EF\t\u0005\u0002\u0002F\n\u0003\u0002\u0002\u0002",
    "GH\t\u0006\u0002\u0002H\f\u0003\u0002\u0002\u0002IJ\t\u0007\u0002\u0002",
    "J\u000e\u0003\u0002\u0002\u0002KL\t\b\u0002\u0002L\u0010\u0003\u0002",
    "\u0002\u0002MN\t\t\u0002\u0002N\u0012\u0003\u0002\u0002\u0002OP\t\n",
    "\u0002\u0002P\u0014\u0003\u0002\u0002\u0002QR\t\u000b\u0002\u0002R\u0016",
    "\u0003\u0002\u0002\u0002ST\t\f\u0002\u0002T\u0018\u0003\u0002\u0002",
    "\u0002UV\t\r\u0002\u0002V\u001a\u0003\u0002\u0002\u0002WX\t\u000e\u0002",
    "\u0002X\u001c\u0003\u0002\u0002\u0002YZ\t\u000f\u0002\u0002Z\u001e\u0003",
    "\u0002\u0002\u0002[\\\t\u0010\u0002\u0002\\ \u0003\u0002\u0002\u0002",
    "]^\t\u0011\u0002\u0002^\"\u0003\u0002\u0002\u0002_`\t\u0012\u0002\u0002",
    "`$\u0003\u0002\u0002\u0002ab\t\u0013\u0002\u0002b&\u0003\u0002\u0002",
    "\u0002cd\t\u0014\u0002\u0002d(\u0003\u0002\u0002\u0002ef\t\u0015\u0002",
    "\u0002f*\u0003\u0002\u0002\u0002gh\t\u0016\u0002\u0002h,\u0003\u0002",
    "\u0002\u0002ij\t\u0017\u0002\u0002j.\u0003\u0002\u0002\u0002kl\t\u0018",
    "\u0002\u0002l0\u0003\u0002\u0002\u0002mn\t\u0019\u0002\u0002n2\u0003",
    "\u0002\u0002\u0002op\t\u001a\u0002\u0002p4\u0003\u0002\u0002\u0002q",
    "r\t\u001b\u0002\u0002r6\u0003\u0002\u0002\u0002st\t\u001c\u0002\u0002",
    "t8\u0003\u0002\u0002\u0002uv\t\u001d\u0002\u0002v:\u0003\u0002\u0002",
    "\u0002wx\t\u001e\u0002\u0002x<\u0003\u0002\u0002\u0002y|\u0003\u0002",
    "\u0002\u0002z|\t\u001f\u0002\u0002{y\u0003\u0002\u0002\u0002{z\u0003",
    "\u0002\u0002\u0002|>\u0003\u0002\u0002\u0002\u0004\u0002{\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function pumlLexerFragments(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

pumlLexerFragments.prototype = Object.create(antlr4.Lexer.prototype);
pumlLexerFragments.prototype.constructor = pumlLexerFragments;

Object.defineProperty(pumlLexerFragments.prototype, "atn", {
        get : function() {
                return atn;
        }
});

pumlLexerFragments.EOF = antlr4.Token.EOF;

pumlLexerFragments.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pumlLexerFragments.prototype.modeNames = [ "DEFAULT_MODE" ];

pumlLexerFragments.prototype.literalNames = [  ];

pumlLexerFragments.prototype.symbolicNames = [  ];

pumlLexerFragments.prototype.ruleNames = [ "LETTERS", "DIGITS", "HEXDIGITS", 
                                           "A", "B", "C", "D", "E", "F", 
                                           "G", "H", "I", "J", "K", "L", 
                                           "M", "N", "O", "P", "Q", "R", 
                                           "S", "T", "U", "V", "W", "X", 
                                           "Y", "Z", "SYMBOL" ];

pumlLexerFragments.prototype.grammarFileName = "pumlLexerFragments.g4";



exports.pumlLexerFragments = pumlLexerFragments;

