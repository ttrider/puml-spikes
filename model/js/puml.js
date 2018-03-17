// Generated from puml.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u00aa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0006\u00024\n\u0002",
    "\r\u0002\u000e\u00025\u0003\u0003\u0003\u0003\u0007\u0003:\n\u0003\f",
    "\u0003\u000e\u0003=\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "A\n\u0003\f\u0003\u000e\u0003D\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0005\u0007O\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0005\nW\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000b",
    "\\\n\u000b\r\u000b\u000e\u000b]\u0005\u000b`\n\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0007\ff\n\f\f\f\u000e\fi\u000b\f\u0003\f\u0005\fl",
    "\n\f\u0003\r\u0003\r\u0003\r\u0005\rq\n\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e{\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u008a\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u008f\n\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u0093\n\u0011\u0003\u0011\u0005\u0011\u0096\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0002\u0002\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0005\u0003\u0002",
    "\t\n\u0003\u0002\u000b\f\u0003\u0002--\u0002\u00a7\u00023\u0003\u0002",
    "\u0002\u0002\u00047\u0003\u0002\u0002\u0002\u0006E\u0003\u0002\u0002",
    "\u0002\bH\u0003\u0002\u0002\u0002\nJ\u0003\u0002\u0002\u0002\fN\u0003",
    "\u0002\u0002\u0002\u000eP\u0003\u0002\u0002\u0002\u0010R\u0003\u0002",
    "\u0002\u0002\u0012V\u0003\u0002\u0002\u0002\u0014_\u0003\u0002\u0002",
    "\u0002\u0016k\u0003\u0002\u0002\u0002\u0018p\u0003\u0002\u0002\u0002",
    "\u001az\u0003\u0002\u0002\u0002\u001c|\u0003\u0002\u0002\u0002\u001e",
    "\u0080\u0003\u0002\u0002\u0002 \u0089\u0003\u0002\u0002\u0002\"\u0099",
    "\u0003\u0002\u0002\u0002$\u009b\u0003\u0002\u0002\u0002&\u009d\u0003",
    "\u0002\u0002\u0002(\u009f\u0003\u0002\u0002\u0002*\u00a1\u0003\u0002",
    "\u0002\u0002,\u00a3\u0003\u0002\u0002\u0002.\u00a5\u0003\u0002\u0002",
    "\u00020\u00a7\u0003\u0002\u0002\u000224\u0005\u0004\u0003\u000232\u0003",
    "\u0002\u0002\u000245\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u00026\u0003\u0003\u0002\u0002\u00027;\u0005\u0006",
    "\u0004\u00028:\u0005\f\u0007\u000298\u0003\u0002\u0002\u0002:=\u0003",
    "\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>B\u0005\n\u0006",
    "\u0002?A\u0007\u000b\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002",
    "\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002C\u0005",
    "\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EF\u0007\u0003\u0002",
    "\u0002FG\u0005\b\u0005\u0002G\u0007\u0003\u0002\u0002\u0002HI\u0007",
    "\u0017\u0002\u0002I\t\u0003\u0002\u0002\u0002JK\u0007\u0004\u0002\u0002",
    "K\u000b\u0003\u0002\u0002\u0002LO\u0005\u0010\t\u0002MO\u0005 \u0011",
    "\u0002NL\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002O\r\u0003",
    "\u0002\u0002\u0002PQ\t\u0002\u0002\u0002Q\u000f\u0003\u0002\u0002\u0002",
    "RS\t\u0003\u0002\u0002S\u0011\u0003\u0002\u0002\u0002TW\u0005\u0014",
    "\u000b\u0002UW\u0005\u0016\f\u0002VT\u0003\u0002\u0002\u0002VU\u0003",
    "\u0002\u0002\u0002W\u0013\u0003\u0002\u0002\u0002X`\u0007\u001a\u0002",
    "\u0002Y[\n\u0004\u0002\u0002Z\\\n\u0003\u0002\u0002[Z\u0003\u0002\u0002",
    "\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003",
    "\u0002\u0002\u0002^`\u0003\u0002\u0002\u0002_X\u0003\u0002\u0002\u0002",
    "_Y\u0003\u0002\u0002\u0002`\u0015\u0003\u0002\u0002\u0002al\u0007\u0019",
    "\u0002\u0002bg\u0007-\u0002\u0002cf\n\u0004\u0002\u0002df\u0007.\u0002",
    "\u0002ec\u0003\u0002\u0002\u0002ed\u0003\u0002\u0002\u0002fi\u0003\u0002",
    "\u0002\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hj\u0003",
    "\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002jl\u0007-\u0002\u0002ka",
    "\u0003\u0002\u0002\u0002kb\u0003\u0002\u0002\u0002l\u0017\u0003\u0002",
    "\u0002\u0002mq\u0005\u001a\u000e\u0002nq\u0005\u001c\u000f\u0002oq\u0005",
    "\u0012\n\u0002pm\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002p",
    "o\u0003\u0002\u0002\u0002q\u0019\u0003\u0002\u0002\u0002rs\u0005\u0016",
    "\f\u0002st\u0007\u0007\u0002\u0002tu\u0005\u0014\u000b\u0002u{\u0003",
    "\u0002\u0002\u0002vw\u0005\u0014\u000b\u0002wx\u0007\u0007\u0002\u0002",
    "xy\u0005\u0014\u000b\u0002y{\u0003\u0002\u0002\u0002zr\u0003\u0002\u0002",
    "\u0002zv\u0003\u0002\u0002\u0002{\u001b\u0003\u0002\u0002\u0002|}\u0005",
    "\u0014\u000b\u0002}~\u0007\u0007\u0002\u0002~\u007f\u0005\u0016\f\u0002",
    "\u007f\u001d\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u0018\u0002\u0002",
    "\u0081\u001f\u0003\u0002\u0002\u0002\u0082\u008a\u0005\"\u0012\u0002",
    "\u0083\u008a\u0005$\u0013\u0002\u0084\u008a\u0005&\u0014\u0002\u0085",
    "\u008a\u0005(\u0015\u0002\u0086\u008a\u0005*\u0016\u0002\u0087\u008a",
    "\u0005,\u0017\u0002\u0088\u008a\u0005.\u0018\u0002\u0089\u0082\u0003",
    "\u0002\u0002\u0002\u0089\u0083\u0003\u0002\u0002\u0002\u0089\u0084\u0003",
    "\u0002\u0002\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u0089\u0086\u0003",
    "\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008e\u0005",
    "\u0018\r\u0002\u008c\u008d\u0007\b\u0002\u0002\u008d\u008f\u00050\u0019",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u001b\u0002",
    "\u0002\u0091\u0093\u0005\u000e\b\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002",
    "\u0002\u0094\u0096\u0007\u001b\u0002\u0002\u0095\u0094\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\u001c\u0002\u0002\u0098!\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0007\r\u0002\u0002\u009a#\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0007\u000e\u0002\u0002\u009c%\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0007\u000f\u0002\u0002\u009e\'\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0007\u0010\u0002\u0002\u00a0)\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0007\u0011\u0002\u0002\u00a2+\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0007\u0012\u0002\u0002\u00a4-\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0007\u0013\u0002\u0002\u00a6/\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0005\u0012\n\u0002\u00a81\u0003\u0002\u0002\u0002\u0012",
    "5;BNV]_egkpz\u0089\u008e\u0092\u0095"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "STARTUML", "ENDUML", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "AS_KEYWORD", "ORDER_KEYWORD", 
                      "HEX_COLORS", "NAMED_COLORS", "CRLF", "WSS", "PARTICIPANT", 
                      "ACTOR", "BOUNDARY", "CONTROL", "ENTITY", "DATABASE", 
                      "COLLECTIONS", "NOTE", "RNOTE", "HNOTE", "STARTUML_NAME", 
                      "EOL_TEXT", "DP_QID", "DP_ID", "DP_WSS", "DP_CRLF", 
                      "LEFT", "RIGHT", "LEFT_OF", "RIGHT_OF", "OVER_OF", 
                      "ENDNOTE", "ENDRNOTE", "ENDHNOTE", "END_NOTE", "END_RNOTE", 
                      "END_HNOTE", "NOTE_SINGLE_LINE", "NOTE_MULTI_LINE", 
                      "END_MULTILINE_NOTE", "END_MULTILINE_RNOTE", "END_MULTILINE_HNOTE", 
                      "DBLQUOTE", "ESC_DBLQUOTE" ];

var ruleNames =  [ "document", "diagram", "startUml", "startUmlName", "endUml", 
                   "diagramItem", "color", "emptyLine", "identifier", "simpleIdentifier", 
                   "quotedIdentifier", "namedIdentifier", "titleAsIdIdentifier", 
                   "idAsTitleIdentifier", "eolText", "declareParticipant", 
                   "declareDefaultParticipant", "declareActor", "declareBoundary", 
                   "declareControl", "declareEntity", "declareDatabase", 
                   "declareCollections", "declareOrder" ];

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
puml.ENDUML = 2;
puml.SINGLE_LINE_COMMENT = 3;
puml.MULTI_LINE_COMMENT = 4;
puml.AS_KEYWORD = 5;
puml.ORDER_KEYWORD = 6;
puml.HEX_COLORS = 7;
puml.NAMED_COLORS = 8;
puml.CRLF = 9;
puml.WSS = 10;
puml.PARTICIPANT = 11;
puml.ACTOR = 12;
puml.BOUNDARY = 13;
puml.CONTROL = 14;
puml.ENTITY = 15;
puml.DATABASE = 16;
puml.COLLECTIONS = 17;
puml.NOTE = 18;
puml.RNOTE = 19;
puml.HNOTE = 20;
puml.STARTUML_NAME = 21;
puml.EOL_TEXT = 22;
puml.DP_QID = 23;
puml.DP_ID = 24;
puml.DP_WSS = 25;
puml.DP_CRLF = 26;
puml.LEFT = 27;
puml.RIGHT = 28;
puml.LEFT_OF = 29;
puml.RIGHT_OF = 30;
puml.OVER_OF = 31;
puml.ENDNOTE = 32;
puml.ENDRNOTE = 33;
puml.ENDHNOTE = 34;
puml.END_NOTE = 35;
puml.END_RNOTE = 36;
puml.END_HNOTE = 37;
puml.NOTE_SINGLE_LINE = 38;
puml.NOTE_MULTI_LINE = 39;
puml.END_MULTILINE_NOTE = 40;
puml.END_MULTILINE_RNOTE = 41;
puml.END_MULTILINE_HNOTE = 42;
puml.DBLQUOTE = 43;
puml.ESC_DBLQUOTE = 44;

puml.RULE_document = 0;
puml.RULE_diagram = 1;
puml.RULE_startUml = 2;
puml.RULE_startUmlName = 3;
puml.RULE_endUml = 4;
puml.RULE_diagramItem = 5;
puml.RULE_color = 6;
puml.RULE_emptyLine = 7;
puml.RULE_identifier = 8;
puml.RULE_simpleIdentifier = 9;
puml.RULE_quotedIdentifier = 10;
puml.RULE_namedIdentifier = 11;
puml.RULE_titleAsIdIdentifier = 12;
puml.RULE_idAsTitleIdentifier = 13;
puml.RULE_eolText = 14;
puml.RULE_declareParticipant = 15;
puml.RULE_declareDefaultParticipant = 16;
puml.RULE_declareActor = 17;
puml.RULE_declareBoundary = 18;
puml.RULE_declareControl = 19;
puml.RULE_declareEntity = 20;
puml.RULE_declareDatabase = 21;
puml.RULE_declareCollections = 22;
puml.RULE_declareOrder = 23;

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
        this.state = 49; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 48;
            this.diagram();
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===puml.STARTUML);
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

DiagramContext.prototype.CRLF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CRLF);
    } else {
        return this.getToken(puml.CRLF, i);
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
        this.state = 53;
        this.startUml();
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << puml.CRLF) | (1 << puml.WSS) | (1 << puml.PARTICIPANT) | (1 << puml.ACTOR) | (1 << puml.BOUNDARY) | (1 << puml.CONTROL) | (1 << puml.ENTITY) | (1 << puml.DATABASE) | (1 << puml.COLLECTIONS))) !== 0)) {
            this.state = 54;
            this.diagramItem();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.endUml();
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===puml.CRLF) {
            this.state = 61;
            this.match(puml.CRLF);
            this.state = 66;
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

StartUmlContext.prototype.STARTUML = function() {
    return this.getToken(puml.STARTUML, 0);
};

StartUmlContext.prototype.startUmlName = function() {
    return this.getTypedRuleContext(StartUmlNameContext,0);
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
        this.state = 67;
        this.match(puml.STARTUML);
        this.state = 68;
        this.startUmlName();
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

function StartUmlNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_startUmlName;
    return this;
}

StartUmlNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartUmlNameContext.prototype.constructor = StartUmlNameContext;

StartUmlNameContext.prototype.STARTUML_NAME = function() {
    return this.getToken(puml.STARTUML_NAME, 0);
};

StartUmlNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitStartUmlName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.StartUmlNameContext = StartUmlNameContext;

puml.prototype.startUmlName = function() {

    var localctx = new StartUmlNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, puml.RULE_startUmlName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(puml.STARTUML_NAME);
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
    this.enterRule(localctx, 8, puml.RULE_endUml);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(puml.ENDUML);
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

DiagramItemContext.prototype.declareParticipant = function() {
    return this.getTypedRuleContext(DeclareParticipantContext,0);
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
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.CRLF:
        case puml.WSS:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.emptyLine();
            break;
        case puml.PARTICIPANT:
        case puml.ACTOR:
        case puml.BOUNDARY:
        case puml.CONTROL:
        case puml.ENTITY:
        case puml.DATABASE:
        case puml.COLLECTIONS:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.declareParticipant();
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
        this.state = 78;
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

EmptyLineContext.prototype.WSS = function() {
    return this.getToken(puml.WSS, 0);
};

EmptyLineContext.prototype.CRLF = function() {
    return this.getToken(puml.CRLF, 0);
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
        this.state = 80;
        _la = this._input.LA(1);
        if(!(_la===puml.CRLF || _la===puml.WSS)) {
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

IdentifierContext.prototype.simpleIdentifier = function() {
    return this.getTypedRuleContext(SimpleIdentifierContext,0);
};

IdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
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
    this.enterRule(localctx, 16, puml.RULE_identifier);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.simpleIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
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

function SimpleIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_simpleIdentifier;
    return this;
}

SimpleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleIdentifierContext.prototype.constructor = SimpleIdentifierContext;

SimpleIdentifierContext.prototype.DP_ID = function() {
    return this.getToken(puml.DP_ID, 0);
};

SimpleIdentifierContext.prototype.DBLQUOTE = function() {
    return this.getToken(puml.DBLQUOTE, 0);
};

SimpleIdentifierContext.prototype.WSS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.WSS);
    } else {
        return this.getToken(puml.WSS, i);
    }
};


SimpleIdentifierContext.prototype.CRLF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.CRLF);
    } else {
        return this.getToken(puml.CRLF, i);
    }
};


SimpleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitSimpleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.SimpleIdentifierContext = SimpleIdentifierContext;

puml.prototype.simpleIdentifier = function() {

    var localctx = new SimpleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, puml.RULE_simpleIdentifier);
    var _la = 0; // Token type
    try {
        this.state = 93;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.match(puml.DP_ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            _la = this._input.LA(1);
            if(_la<=0 || _la===puml.DBLQUOTE) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 89; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 88;
            		_la = this._input.LA(1);
            		if(_la<=0 || _la===puml.CRLF || _la===puml.WSS) {
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
            	this.state = 91; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

QuotedIdentifierContext.prototype.DP_QID = function() {
    return this.getToken(puml.DP_QID, 0);
};

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
    this.enterRule(localctx, 20, puml.RULE_quotedIdentifier);
    var _la = 0; // Token type
    try {
        this.state = 105;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.DP_QID:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.match(puml.DP_QID);
            break;
        case puml.DBLQUOTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.match(puml.DBLQUOTE);
            this.state = 101;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << puml.STARTUML) | (1 << puml.ENDUML) | (1 << puml.SINGLE_LINE_COMMENT) | (1 << puml.MULTI_LINE_COMMENT) | (1 << puml.AS_KEYWORD) | (1 << puml.ORDER_KEYWORD) | (1 << puml.HEX_COLORS) | (1 << puml.NAMED_COLORS) | (1 << puml.CRLF) | (1 << puml.WSS) | (1 << puml.PARTICIPANT) | (1 << puml.ACTOR) | (1 << puml.BOUNDARY) | (1 << puml.CONTROL) | (1 << puml.ENTITY) | (1 << puml.DATABASE) | (1 << puml.COLLECTIONS) | (1 << puml.NOTE) | (1 << puml.RNOTE) | (1 << puml.HNOTE) | (1 << puml.STARTUML_NAME) | (1 << puml.EOL_TEXT) | (1 << puml.DP_QID) | (1 << puml.DP_ID) | (1 << puml.DP_WSS) | (1 << puml.DP_CRLF) | (1 << puml.LEFT) | (1 << puml.RIGHT) | (1 << puml.LEFT_OF) | (1 << puml.RIGHT_OF) | (1 << puml.OVER_OF))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (puml.ENDNOTE - 32)) | (1 << (puml.ENDRNOTE - 32)) | (1 << (puml.ENDHNOTE - 32)) | (1 << (puml.END_NOTE - 32)) | (1 << (puml.END_RNOTE - 32)) | (1 << (puml.END_HNOTE - 32)) | (1 << (puml.NOTE_SINGLE_LINE - 32)) | (1 << (puml.NOTE_MULTI_LINE - 32)) | (1 << (puml.END_MULTILINE_NOTE - 32)) | (1 << (puml.END_MULTILINE_RNOTE - 32)) | (1 << (puml.END_MULTILINE_HNOTE - 32)) | (1 << (puml.ESC_DBLQUOTE - 32)))) !== 0)) {
                this.state = 99;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 97;
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
                    this.state = 98;
                    this.match(puml.ESC_DBLQUOTE);
                    break;

                }
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 104;
            this.match(puml.DBLQUOTE);
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

function NamedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_namedIdentifier;
    return this;
}

NamedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedIdentifierContext.prototype.constructor = NamedIdentifierContext;

NamedIdentifierContext.prototype.titleAsIdIdentifier = function() {
    return this.getTypedRuleContext(TitleAsIdIdentifierContext,0);
};

NamedIdentifierContext.prototype.idAsTitleIdentifier = function() {
    return this.getTypedRuleContext(IdAsTitleIdentifierContext,0);
};

NamedIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

NamedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitNamedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.NamedIdentifierContext = NamedIdentifierContext;

puml.prototype.namedIdentifier = function() {

    var localctx = new NamedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, puml.RULE_namedIdentifier);
    try {
        this.state = 110;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 107;
            this.titleAsIdIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.idAsTitleIdentifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
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

function TitleAsIdIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_titleAsIdIdentifier;
    return this;
}

TitleAsIdIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleAsIdIdentifierContext.prototype.constructor = TitleAsIdIdentifierContext;

TitleAsIdIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

TitleAsIdIdentifierContext.prototype.AS_KEYWORD = function() {
    return this.getToken(puml.AS_KEYWORD, 0);
};

TitleAsIdIdentifierContext.prototype.simpleIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleIdentifierContext);
    } else {
        return this.getTypedRuleContext(SimpleIdentifierContext,i);
    }
};

TitleAsIdIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitTitleAsIdIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.TitleAsIdIdentifierContext = TitleAsIdIdentifierContext;

puml.prototype.titleAsIdIdentifier = function() {

    var localctx = new TitleAsIdIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, puml.RULE_titleAsIdIdentifier);
    try {
        this.state = 120;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.quotedIdentifier();
            this.state = 113;
            this.match(puml.AS_KEYWORD);
            this.state = 114;
            this.simpleIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 116;
            this.simpleIdentifier();
            this.state = 117;
            this.match(puml.AS_KEYWORD);
            this.state = 118;
            this.simpleIdentifier();
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

function IdAsTitleIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_idAsTitleIdentifier;
    return this;
}

IdAsTitleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdAsTitleIdentifierContext.prototype.constructor = IdAsTitleIdentifierContext;

IdAsTitleIdentifierContext.prototype.simpleIdentifier = function() {
    return this.getTypedRuleContext(SimpleIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.AS_KEYWORD = function() {
    return this.getToken(puml.AS_KEYWORD, 0);
};

IdAsTitleIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitIdAsTitleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.IdAsTitleIdentifierContext = IdAsTitleIdentifierContext;

puml.prototype.idAsTitleIdentifier = function() {

    var localctx = new IdAsTitleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, puml.RULE_idAsTitleIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.simpleIdentifier();
        this.state = 123;
        this.match(puml.AS_KEYWORD);
        this.state = 124;
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

function EolTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = puml.RULE_eolText;
    return this;
}

EolTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EolTextContext.prototype.constructor = EolTextContext;

EolTextContext.prototype.EOL_TEXT = function() {
    return this.getToken(puml.EOL_TEXT, 0);
};

EolTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitEolText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




puml.EolTextContext = EolTextContext;

puml.prototype.eolText = function() {

    var localctx = new EolTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, puml.RULE_eolText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(puml.EOL_TEXT);
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

DeclareParticipantContext.prototype.namedIdentifier = function() {
    return this.getTypedRuleContext(NamedIdentifierContext,0);
};

DeclareParticipantContext.prototype.DP_CRLF = function() {
    return this.getToken(puml.DP_CRLF, 0);
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

DeclareParticipantContext.prototype.ORDER_KEYWORD = function() {
    return this.getToken(puml.ORDER_KEYWORD, 0);
};

DeclareParticipantContext.prototype.declareOrder = function() {
    return this.getTypedRuleContext(DeclareOrderContext,0);
};

DeclareParticipantContext.prototype.DP_WSS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(puml.DP_WSS);
    } else {
        return this.getToken(puml.DP_WSS, i);
    }
};


DeclareParticipantContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
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
    this.enterRule(localctx, 30, puml.RULE_declareParticipant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.PARTICIPANT:
            this.state = 128;
            this.declareDefaultParticipant();
            break;
        case puml.ACTOR:
            this.state = 129;
            this.declareActor();
            break;
        case puml.BOUNDARY:
            this.state = 130;
            this.declareBoundary();
            break;
        case puml.CONTROL:
            this.state = 131;
            this.declareControl();
            break;
        case puml.ENTITY:
            this.state = 132;
            this.declareEntity();
            break;
        case puml.DATABASE:
            this.state = 133;
            this.declareDatabase();
            break;
        case puml.COLLECTIONS:
            this.state = 134;
            this.declareCollections();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 137;
        this.namedIdentifier();
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.ORDER_KEYWORD) {
            this.state = 138;
            this.match(puml.ORDER_KEYWORD);
            this.state = 139;
            this.declareOrder();
        }

        this.state = 144;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 142;
            this.match(puml.DP_WSS);
            this.state = 143;
            this.color();

        }
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===puml.DP_WSS) {
            this.state = 146;
            this.match(puml.DP_WSS);
        }

        this.state = 149;
        this.match(puml.DP_CRLF);
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
    this.enterRule(localctx, 32, puml.RULE_declareDefaultParticipant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
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
    this.enterRule(localctx, 34, puml.RULE_declareActor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
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
    this.enterRule(localctx, 36, puml.RULE_declareBoundary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
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
    this.enterRule(localctx, 38, puml.RULE_declareControl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
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
    this.enterRule(localctx, 40, puml.RULE_declareEntity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
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
    this.enterRule(localctx, 42, puml.RULE_declareDatabase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
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
    this.enterRule(localctx, 44, puml.RULE_declareCollections);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
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
    this.enterRule(localctx, 46, puml.RULE_declareOrder);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
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


exports.puml = puml;
