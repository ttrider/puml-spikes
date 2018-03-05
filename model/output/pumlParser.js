// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlListener = require('./pumlListener').pumlListener;
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014\u00b7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0006\u0002&\n",
    "\u0002\r\u0002\u000e\u0002\'\u0003\u0003\u0003\u0003\u0007\u0003,\n",
    "\u0003\f\u0003\u000e\u0003/\u000b\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u00033\n\u0003\f\u0003\u000e\u00036\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005<\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0007\u0006A\n\u0006\f\u0006\u000e\u0006D\u000b\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0005\tL\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nS\n\n\u0003\n\u0005\nV\n\n",
    "\u0003\n\u0003\n\u0005\nZ\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bc\n\u000b\u0003\u000b",
    "\u0005\u000bf\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "k\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\fv\n\f\u0003\f\u0003\f\u0007\fz\n\f",
    "\f\f\u000e\f}\u000b\f\u0005\f\u007f\n\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u0087\n\f\u0003\f\u0003\f\u0007\f\u008b\n",
    "\f\f\f\u000e\f\u008e\u000b\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f",
    "\u0094\n\f\u0003\f\u0003\f\u0007\f\u0098\n\f\f\f\u000e\f\u009b\u000b",
    "\f\u0005\f\u009d\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0007\u0010\u00a6\n\u0010\f\u0010\u000e\u0010",
    "\u00a9\u000b\u0010\u0003\u0011\u0007\u0011\u00ac\n\u0011\f\u0011\u000e",
    "\u0011\u00af\u000b\u0011\u0003\u0012\u0007\u0012\u00b2\n\u0012\f\u0012",
    "\u000e\u0012\u00b5\u000b\u0012\u0003\u0012\u0006B\u00a7\u00ad\u00b3",
    "\u0002\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"\u0002\u0006\u0004\u0002\u0010\u0010\u0014\u0014",
    "\u0003\u0002\u0012\u0013\u0003\u0002\n\u000b\u0004\u0002\u0010\u0011",
    "\u0014\u0014\u0002\u00bd\u0002%\u0003\u0002\u0002\u0002\u0004)\u0003",
    "\u0002\u0002\u0002\u00067\u0003\u0002\u0002\u0002\b9\u0003\u0002\u0002",
    "\u0002\nB\u0003\u0002\u0002\u0002\fE\u0003\u0002\u0002\u0002\u000eG",
    "\u0003\u0002\u0002\u0002\u0010K\u0003\u0002\u0002\u0002\u0012M\u0003",
    "\u0002\u0002\u0002\u0014]\u0003\u0002\u0002\u0002\u0016\u009c\u0003",
    "\u0002\u0002\u0002\u0018\u009e\u0003\u0002\u0002\u0002\u001a\u00a0\u0003",
    "\u0002\u0002\u0002\u001c\u00a2\u0003\u0002\u0002\u0002\u001e\u00a7\u0003",
    "\u0002\u0002\u0002 \u00ad\u0003\u0002\u0002\u0002\"\u00b3\u0003\u0002",
    "\u0002\u0002$&\u0005\u0004\u0003\u0002%$\u0003\u0002\u0002\u0002&\'",
    "\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002",
    "\u0002(\u0003\u0003\u0002\u0002\u0002)-\u0005\u0006\u0004\u0002*,\u0005",
    "\f\u0007\u0002+*\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002-",
    "+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.0\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u000204\u0005\b\u0005\u000213\u0007\u0011",
    "\u0002\u000221\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003",
    "\u0002\u0002\u000245\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002",
    "\u000264\u0003\u0002\u0002\u000278\u0007\u0004\u0002\u00028\u0007\u0003",
    "\u0002\u0002\u00029;\u0007\u0005\u0002\u0002:<\u0007\u0010\u0002\u0002",
    ";:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=>\u0007\u0011\u0002\u0002>\t\u0003\u0002\u0002\u0002?A\t\u0002",
    "\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002C\u000b\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002EF\u0005\u0010\t\u0002F\r\u0003\u0002",
    "\u0002\u0002GH\t\u0003\u0002\u0002H\u000f\u0003\u0002\u0002\u0002IL",
    "\u0005\u0012\n\u0002JL\u0005\u0014\u000b\u0002KI\u0003\u0002\u0002\u0002",
    "KJ\u0003\u0002\u0002\u0002L\u0011\u0003\u0002\u0002\u0002MN\u0007\u0006",
    "\u0002\u0002NO\u0007\u0010\u0002\u0002OR\u0005\u0016\f\u0002PQ\u0007",
    "\u0010\u0002\u0002QS\u0005\u000e\b\u0002RP\u0003\u0002\u0002\u0002R",
    "S\u0003\u0002\u0002\u0002SU\u0003\u0002\u0002\u0002TV\u0007\u0010\u0002",
    "\u0002UT\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0003\u0002",
    "\u0002\u0002WY\u0007\u000e\u0002\u0002XZ\u0005\u001e\u0010\u0002YX\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002",
    "[\\\u0007\u0011\u0002\u0002\\\u0013\u0003\u0002\u0002\u0002]^\u0007",
    "\u0006\u0002\u0002^_\u0007\u0010\u0002\u0002_b\u0005\u0016\f\u0002`",
    "a\u0007\u0010\u0002\u0002ac\u0005\u000e\b\u0002b`\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002df\u0007\u0010",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003",
    "\u0002\u0002\u0002gh\u0007\u0011\u0002\u0002hj\u0005 \u0011\u0002ik",
    "\u0007\u0011\u0002\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002kl\u0003\u0002\u0002\u0002lm\t\u0004\u0002\u0002mn\u0007\u0011",
    "\u0002\u0002n\u0015\u0003\u0002\u0002\u0002o~\u0005\u0018\r\u0002pq",
    "\u0007\u0010\u0002\u0002qr\u0007\f\u0002\u0002rs\u0007\u0010\u0002\u0002",
    "s{\u0005\"\u0012\u0002tv\u0007\u0010\u0002\u0002ut\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0007\u000f",
    "\u0002\u0002xz\u0005\"\u0012\u0002yu\u0003\u0002\u0002\u0002z}\u0003",
    "\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002",
    "|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~p\u0003\u0002",
    "\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u009d\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0005\u001a\u000e\u0002\u0081\u0082\u0007\u0010",
    "\u0002\u0002\u0082\u0083\u0007\f\u0002\u0002\u0083\u0084\u0007\u0010",
    "\u0002\u0002\u0084\u008c\u0005\"\u0012\u0002\u0085\u0087\u0007\u0010",
    "\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u000f",
    "\u0002\u0002\u0089\u008b\u0005\"\u0012\u0002\u008a\u0086\u0003\u0002",
    "\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u009d\u0003\u0002",
    "\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0090\u0005\u001c",
    "\u000f\u0002\u0090\u0091\u0007\u0010\u0002\u0002\u0091\u0099\u0005\"",
    "\u0012\u0002\u0092\u0094\u0007\u0010\u0002\u0002\u0093\u0092\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0007\u000f\u0002\u0002\u0096\u0098\u0005\"",
    "\u0012\u0002\u0097\u0093\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002",
    "\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002",
    "\u0002\u0002\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009co\u0003\u0002\u0002\u0002\u009c\u0080\u0003\u0002",
    "\u0002\u0002\u009c\u008f\u0003\u0002\u0002\u0002\u009d\u0017\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0007\b\u0002\u0002\u009f\u0019\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0007\u0007\u0002\u0002\u00a1\u001b\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0007\t\u0002\u0002\u00a3\u001d\u0003\u0002",
    "\u0002\u0002\u00a4\u00a6\t\u0002\u0002\u0002\u00a5\u00a4\u0003\u0002",
    "\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002",
    "\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u001f\u0003\u0002",
    "\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ac\t\u0005",
    "\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002",
    "\u0002\u0002\u00ae!\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002",
    "\u0002\u0002\u00b0\u00b2\t\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002",
    "\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4#\u0003\u0002",
    "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u0019\'-4;BKRUYbej",
    "u{~\u0086\u008c\u0093\u0099\u009c\u00a7\u00ad\u00b3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", null, "'@enduml'", null, null, 
                     null, null, null, null, null, "';'", "':'", "','" ];

var symbolicNames = [ null, "STARTUML", "STARTUMLLINE", "ENDUML", "NOTE", 
                      "LEFT", "RIGHT", "OVER", "ENDNOTE", "END_NOTE", "OF", 
                      "SEMICOLON", "COLON", "COMMA", "SPACE", "CR", "HEX_COLORS", 
                      "NAMED_COLORS", "ANY" ];

var ruleNames =  [ "document", "diagram", "startUml", "endUml", "digramName", 
                   "diagramItem", "color", "note", "singleLineNote", "multiLineNote", 
                   "noteLocation", "noteLocationRight", "noteLocationLeft", 
                   "noteLocationOver", "noteTextLine", "noteTextLines", 
                   "noteAnchor" ];

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
pumlParser.LEFT = 5;
pumlParser.RIGHT = 6;
pumlParser.OVER = 7;
pumlParser.ENDNOTE = 8;
pumlParser.END_NOTE = 9;
pumlParser.OF = 10;
pumlParser.SEMICOLON = 11;
pumlParser.COLON = 12;
pumlParser.COMMA = 13;
pumlParser.SPACE = 14;
pumlParser.CR = 15;
pumlParser.HEX_COLORS = 16;
pumlParser.NAMED_COLORS = 17;
pumlParser.ANY = 18;

pumlParser.RULE_document = 0;
pumlParser.RULE_diagram = 1;
pumlParser.RULE_startUml = 2;
pumlParser.RULE_endUml = 3;
pumlParser.RULE_digramName = 4;
pumlParser.RULE_diagramItem = 5;
pumlParser.RULE_color = 6;
pumlParser.RULE_note = 7;
pumlParser.RULE_singleLineNote = 8;
pumlParser.RULE_multiLineNote = 9;
pumlParser.RULE_noteLocation = 10;
pumlParser.RULE_noteLocationRight = 11;
pumlParser.RULE_noteLocationLeft = 12;
pumlParser.RULE_noteLocationOver = 13;
pumlParser.RULE_noteTextLine = 14;
pumlParser.RULE_noteTextLines = 15;
pumlParser.RULE_noteAnchor = 16;

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
        this.state = 35; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 34;
            this.diagram();
            this.state = 37; 
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
        this.state = 39;
        this.startUml();
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pumlParser.NOTE) {
            this.state = 40;
            this.diagramItem();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 46;
        this.endUml();
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pumlParser.CR) {
            this.state = 47;
            this.match(pumlParser.CR);
            this.state = 52;
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
        this.state = 53;
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
        this.state = 55;
        this.match(pumlParser.ENDUML);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 56;
            this.match(pumlParser.SPACE);
        }

        this.state = 59;
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
        this.state = 64;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 61;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 66;
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

DiagramItemContext.prototype.note = function() {
    return this.getTypedRuleContext(NoteContext,0);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.note();
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
        this.state = 69;
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

NoteContext.prototype.multiLineNote = function() {
    return this.getTypedRuleContext(MultiLineNoteContext,0);
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
    this.enterRule(localctx, 14, pumlParser.RULE_note);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 71;
            this.singleLineNote();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 72;
            this.multiLineNote();
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
    this.enterRule(localctx, 16, pumlParser.RULE_singleLineNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(pumlParser.NOTE);
        this.state = 76;
        this.match(pumlParser.SPACE);
        this.state = 77;
        this.noteLocation();
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 78;
            this.match(pumlParser.SPACE);
            this.state = 79;
            this.color();

        }
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 82;
            this.match(pumlParser.SPACE);
        }

        this.state = 85;
        this.match(pumlParser.COLON);
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 86;
            this.noteTextLine();

        }
        this.state = 89;
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
    this.enterRule(localctx, 18, pumlParser.RULE_multiLineNote);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(pumlParser.NOTE);
        this.state = 92;
        this.match(pumlParser.SPACE);
        this.state = 93;
        this.noteLocation();
        this.state = 96;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 94;
            this.match(pumlParser.SPACE);
            this.state = 95;
            this.color();

        }
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 98;
            this.match(pumlParser.SPACE);
        }

        this.state = 101;
        this.match(pumlParser.CR);
        this.state = 102;
        this.noteTextLines();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.CR) {
            this.state = 103;
            this.match(pumlParser.CR);
        }

        this.state = 106;
        _la = this._input.LA(1);
        if(!(_la===pumlParser.ENDNOTE || _la===pumlParser.END_NOTE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 107;
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
    this.enterRule(localctx, 20, pumlParser.RULE_noteLocation);
    var _la = 0; // Token type
    try {
        this.state = 154;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParser.RIGHT:
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.noteLocationRight();
            this.state = 124;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 110;
                this.match(pumlParser.SPACE);
                this.state = 111;
                this.match(pumlParser.OF);
                this.state = 112;
                this.match(pumlParser.SPACE);
                this.state = 113;
                this.noteAnchor();
                this.state = 121;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 115;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if(_la===pumlParser.SPACE) {
                            this.state = 114;
                            this.match(pumlParser.SPACE);
                        }

                        this.state = 117;
                        this.match(pumlParser.COMMA);
                        this.state = 118;
                        this.noteAnchor(); 
                    }
                    this.state = 123;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
                }


            }
            break;
        case pumlParser.LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.noteLocationLeft();

            this.state = 127;
            this.match(pumlParser.SPACE);
            this.state = 128;
            this.match(pumlParser.OF);
            this.state = 129;
            this.match(pumlParser.SPACE);
            this.state = 130;
            this.noteAnchor();
            this.state = 138;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 132;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===pumlParser.SPACE) {
                        this.state = 131;
                        this.match(pumlParser.SPACE);
                    }

                    this.state = 134;
                    this.match(pumlParser.COMMA);
                    this.state = 135;
                    this.noteAnchor(); 
                }
                this.state = 140;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            break;
        case pumlParser.OVER:
            this.enterOuterAlt(localctx, 3);
            this.state = 141;
            this.noteLocationOver();

            this.state = 142;
            this.match(pumlParser.SPACE);
            this.state = 143;
            this.noteAnchor();
            this.state = 151;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 145;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===pumlParser.SPACE) {
                        this.state = 144;
                        this.match(pumlParser.SPACE);
                    }

                    this.state = 147;
                    this.match(pumlParser.COMMA);
                    this.state = 148;
                    this.noteAnchor(); 
                }
                this.state = 153;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
    this.enterRule(localctx, 22, pumlParser.RULE_noteLocationRight);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
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
    this.enterRule(localctx, 24, pumlParser.RULE_noteLocationLeft);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
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
    this.enterRule(localctx, 26, pumlParser.RULE_noteLocationOver);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
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
    this.enterRule(localctx, 28, pumlParser.RULE_noteTextLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 162;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 167;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
    this.enterRule(localctx, 30, pumlParser.RULE_noteTextLines);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 168;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParser.SPACE) | (1 << pumlParser.CR) | (1 << pumlParser.ANY))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 173;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
    this.enterRule(localctx, 32, pumlParser.RULE_noteAnchor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 174;
                _la = this._input.LA(1);
                if(!(_la===pumlParser.SPACE || _la===pumlParser.ANY)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 179;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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


exports.pumlParser = pumlParser;
