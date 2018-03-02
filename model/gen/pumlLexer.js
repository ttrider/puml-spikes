// Generated from /Volumes/v/github/puml/spikes/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\tG\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0006\u0005-\n\u0005\r\u0005\u000e\u0005.\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u00065\n\u0006\r\u0006",
    "\u000e\u00066\u0003\u0007\u0003\u0007\u0003\b\u0005\b<\n\b\u0003\b\u0003",
    "\b\u0005\b@\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\u0002\u0013\u0002\u0015\u0002\u0003\u0002\u0006\u0004",
    "\u0002\u000b\u000b\"\"\u0004\u0002C\\c|\u0003\u00022;\b\u0002$$)+-0",
    "<=^^\u0080\u0080\u0002J\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0017",
    "\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007#",
    "\u0003\u0002\u0002\u0002\t,\u0003\u0002\u0002\u0002\u000b4\u0003\u0002",
    "\u0002\u0002\r8\u0003\u0002\u0002\u0002\u000f?\u0003\u0002\u0002\u0002",
    "\u0011A\u0003\u0002\u0002\u0002\u0013C\u0003\u0002\u0002\u0002\u0015",
    "E\u0003\u0002\u0002\u0002\u0017\u0018\u0007=\u0002\u0002\u0018\u0004",
    "\u0003\u0002\u0002\u0002\u0019\u001a\u0007B\u0002\u0002\u001a\u001b",
    "\u0007u\u0002\u0002\u001b\u001c\u0007v\u0002\u0002\u001c\u001d\u0007",
    "c\u0002\u0002\u001d\u001e\u0007t\u0002\u0002\u001e\u001f\u0007v\u0002",
    "\u0002\u001f \u0007w\u0002\u0002 !\u0007o\u0002\u0002!\"\u0007n\u0002",
    "\u0002\"\u0006\u0003\u0002\u0002\u0002#$\u0007B\u0002\u0002$%\u0007",
    "g\u0002\u0002%&\u0007p\u0002\u0002&\'\u0007f\u0002\u0002\'(\u0007w\u0002",
    "\u0002()\u0007o\u0002\u0002)*\u0007n\u0002\u0002*\b\u0003\u0002\u0002",
    "\u0002+-\t\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\n",
    "\u0003\u0002\u0002\u000205\u0005\u0011\t\u000215\u0005\u0013\n\u0002",
    "25\u0005\u0015\u000b\u000235\u0005\r\u0007\u000240\u0003\u0002\u0002",
    "\u000241\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000243\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003",
    "\u0002\u0002\u00027\f\u0003\u0002\u0002\u000289\t\u0002\u0002\u0002",
    "9\u000e\u0003\u0002\u0002\u0002:<\u0007\u000f\u0002\u0002;:\u0003\u0002",
    "\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=@\u0007",
    "\f\u0002\u0002>@\u0007\u0002\u0002\u0003?;\u0003\u0002\u0002\u0002?",
    ">\u0003\u0002\u0002\u0002@\u0010\u0003\u0002\u0002\u0002AB\t\u0003\u0002",
    "\u0002B\u0012\u0003\u0002\u0002\u0002CD\t\u0004\u0002\u0002D\u0014\u0003",
    "\u0002\u0002\u0002EF\t\u0005\u0002\u0002F\u0016\u0003\u0002\u0002\u0002",
    "\b\u0002.46;?\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function pumlLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

pumlLexer.prototype = Object.create(antlr4.Lexer.prototype);
pumlLexer.prototype.constructor = pumlLexer;

pumlLexer.EOF = antlr4.Token.EOF;
pumlLexer.SEMICOLON = 1;
pumlLexer.STARTUML = 2;
pumlLexer.ENDUML = 3;
pumlLexer.SPACE = 4;
pumlLexer.TEXT = 5;
pumlLexer.WS = 6;
pumlLexer.CR = 7;

pumlLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pumlLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pumlLexer.prototype.literalNames = [ null, "';'", "'@startuml'", "'@enduml'" ];

pumlLexer.prototype.symbolicNames = [ null, "SEMICOLON", "STARTUML", "ENDUML", 
                                      "SPACE", "TEXT", "WS", "CR" ];

pumlLexer.prototype.ruleNames = [ "SEMICOLON", "STARTUML", "ENDUML", "SPACE", 
                                  "TEXT", "WS", "CR", "LETTERS", "DIGITS", 
                                  "SYMBOL" ];

pumlLexer.prototype.grammarFileName = "puml.g4";



exports.pumlLexer = pumlLexer;

