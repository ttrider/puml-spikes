// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserParticipant.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlParserParticipantListener = require('./pumlParserParticipantListener').pumlParserParticipantListener;
var pumlParserParticipantVisitor = require('./pumlParserParticipantVisitor').pumlParserParticipantVisitor;

var grammarFileName = "pumlParserParticipant.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001do\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002.\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00023\n\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u00027\n\u0002\u0003\u0002\u0005\u0002",
    ":\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0005\rT\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010]\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011g\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0002\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0006\u0004\u0002\f\f",
    "\u0015\u0015\u0003\u0002\u0011\u0012\u0004\u0002\u0014\u0014\u001a\u001a",
    "\u0004\u0002\u0013\u0013\u0019\u0019\u0002i\u0002-\u0003\u0002\u0002",
    "\u0002\u0004=\u0003\u0002\u0002\u0002\u0006?\u0003\u0002\u0002\u0002",
    "\bA\u0003\u0002\u0002\u0002\nC\u0003\u0002\u0002\u0002\fE\u0003\u0002",
    "\u0002\u0002\u000eG\u0003\u0002\u0002\u0002\u0010I\u0003\u0002\u0002",
    "\u0002\u0012K\u0003\u0002\u0002\u0002\u0014M\u0003\u0002\u0002\u0002",
    "\u0016O\u0003\u0002\u0002\u0002\u0018S\u0003\u0002\u0002\u0002\u001a",
    "U\u0003\u0002\u0002\u0002\u001cW\u0003\u0002\u0002\u0002\u001e\\\u0003",
    "\u0002\u0002\u0002 f\u0003\u0002\u0002\u0002\"h\u0003\u0002\u0002\u0002",
    "$l\u0003\u0002\u0002\u0002&.\u0005\u0004\u0003\u0002\'.\u0005\u0006",
    "\u0004\u0002(.\u0005\b\u0005\u0002).\u0005\n\u0006\u0002*.\u0005\f\u0007",
    "\u0002+.\u0005\u000e\b\u0002,.\u0005\u0010\t\u0002-&\u0003\u0002\u0002",
    "\u0002-\'\u0003\u0002\u0002\u0002-(\u0003\u0002\u0002\u0002-)\u0003",
    "\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002",
    "-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/2\u0005\u001e\u0010",
    "\u000201\u0007\u0017\u0002\u000213\u0005\u0012\n\u000220\u0003\u0002",
    "\u0002\u000223\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000245\u0007",
    "\u0018\u0002\u000257\u0005\u0014\u000b\u000264\u0003\u0002\u0002\u0002",
    "67\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u00028:\u0007\u0018\u0002",
    "\u000298\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0003\u0002",
    "\u0002\u0002;<\u0007\u001b\u0002\u0002<\u0003\u0003\u0002\u0002\u0002",
    "=>\u0007\u0005\u0002\u0002>\u0005\u0003\u0002\u0002\u0002?@\u0007\u0006",
    "\u0002\u0002@\u0007\u0003\u0002\u0002\u0002AB\u0007\u0007\u0002\u0002",
    "B\t\u0003\u0002\u0002\u0002CD\u0007\b\u0002\u0002D\u000b\u0003\u0002",
    "\u0002\u0002EF\u0007\t\u0002\u0002F\r\u0003\u0002\u0002\u0002GH\u0007",
    "\n\u0002\u0002H\u000f\u0003\u0002\u0002\u0002IJ\u0007\u000b\u0002\u0002",
    "J\u0011\u0003\u0002\u0002\u0002KL\u0005\u001a\u000e\u0002L\u0013\u0003",
    "\u0002\u0002\u0002MN\t\u0002\u0002\u0002N\u0015\u0003\u0002\u0002\u0002",
    "OP\t\u0003\u0002\u0002P\u0017\u0003\u0002\u0002\u0002QT\u0005\u001a",
    "\u000e\u0002RT\u0005\u001c\u000f\u0002SQ\u0003\u0002\u0002\u0002SR\u0003",
    "\u0002\u0002\u0002T\u0019\u0003\u0002\u0002\u0002UV\t\u0004\u0002\u0002",
    "V\u001b\u0003\u0002\u0002\u0002WX\t\u0005\u0002\u0002X\u001d\u0003\u0002",
    "\u0002\u0002Y]\u0005 \u0011\u0002Z]\u0005\"\u0012\u0002[]\u0005\u0018",
    "\r\u0002\\Y\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\[\u0003",
    "\u0002\u0002\u0002]\u001f\u0003\u0002\u0002\u0002^_\u0005\u001c\u000f",
    "\u0002_`\u0007\u0016\u0002\u0002`a\u0005\u001a\u000e\u0002ag\u0003\u0002",
    "\u0002\u0002bc\u0005\u001a\u000e\u0002cd\u0007\u0016\u0002\u0002de\u0005",
    "\u001a\u000e\u0002eg\u0003\u0002\u0002\u0002f^\u0003\u0002\u0002\u0002",
    "fb\u0003\u0002\u0002\u0002g!\u0003\u0002\u0002\u0002hi\u0005\u001a\u000e",
    "\u0002ij\u0007\u0016\u0002\u0002jk\u0005\u001c\u000f\u0002k#\u0003\u0002",
    "\u0002\u0002lm\u0007\u001d\u0002\u0002m%\u0003\u0002\u0002\u0002\t-",
    "269S\\f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "STARTUML", "ENDUML", "PARTICIPANT", "ACTOR", 
                      "BOUNDARY", "CONTROL", "ENTITY", "DATABASE", "COLLECTIONS", 
                      "COLORS", "HEX_COLORS", "NAMED_COLORS", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "CRLF", "WSS", "QID", "ID", 
                      "DP_COLORS", "DP_AS", "DP_ORDER", "DP_WSS", "DP_QID", 
                      "DP_ID", "DP_CRLF", "STARTUML_NAME", "EOL_TEXT" ];

var ruleNames =  [ "declareParticipant", "declareDefaultParticipant", "declareActor", 
                   "declareBoundary", "declareControl", "declareEntity", 
                   "declareDatabase", "declareCollections", "declareOrder", 
                   "color", "emptyLine", "identifier", "simpleIdentifier", 
                   "quotedIdentifier", "namedIdentifier", "titleAsIdIdentifier", 
                   "idAsTitleIdentifier", "eolText" ];

function pumlParserParticipant (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

pumlParserParticipant.prototype = Object.create(antlr4.Parser.prototype);
pumlParserParticipant.prototype.constructor = pumlParserParticipant;

Object.defineProperty(pumlParserParticipant.prototype, "atn", {
	get : function() {
		return atn;
	}
});

pumlParserParticipant.EOF = antlr4.Token.EOF;
pumlParserParticipant.STARTUML = 1;
pumlParserParticipant.ENDUML = 2;
pumlParserParticipant.PARTICIPANT = 3;
pumlParserParticipant.ACTOR = 4;
pumlParserParticipant.BOUNDARY = 5;
pumlParserParticipant.CONTROL = 6;
pumlParserParticipant.ENTITY = 7;
pumlParserParticipant.DATABASE = 8;
pumlParserParticipant.COLLECTIONS = 9;
pumlParserParticipant.COLORS = 10;
pumlParserParticipant.HEX_COLORS = 11;
pumlParserParticipant.NAMED_COLORS = 12;
pumlParserParticipant.SINGLE_LINE_COMMENT = 13;
pumlParserParticipant.MULTI_LINE_COMMENT = 14;
pumlParserParticipant.CRLF = 15;
pumlParserParticipant.WSS = 16;
pumlParserParticipant.QID = 17;
pumlParserParticipant.ID = 18;
pumlParserParticipant.DP_COLORS = 19;
pumlParserParticipant.DP_AS = 20;
pumlParserParticipant.DP_ORDER = 21;
pumlParserParticipant.DP_WSS = 22;
pumlParserParticipant.DP_QID = 23;
pumlParserParticipant.DP_ID = 24;
pumlParserParticipant.DP_CRLF = 25;
pumlParserParticipant.STARTUML_NAME = 26;
pumlParserParticipant.EOL_TEXT = 27;

pumlParserParticipant.RULE_declareParticipant = 0;
pumlParserParticipant.RULE_declareDefaultParticipant = 1;
pumlParserParticipant.RULE_declareActor = 2;
pumlParserParticipant.RULE_declareBoundary = 3;
pumlParserParticipant.RULE_declareControl = 4;
pumlParserParticipant.RULE_declareEntity = 5;
pumlParserParticipant.RULE_declareDatabase = 6;
pumlParserParticipant.RULE_declareCollections = 7;
pumlParserParticipant.RULE_declareOrder = 8;
pumlParserParticipant.RULE_color = 9;
pumlParserParticipant.RULE_emptyLine = 10;
pumlParserParticipant.RULE_identifier = 11;
pumlParserParticipant.RULE_simpleIdentifier = 12;
pumlParserParticipant.RULE_quotedIdentifier = 13;
pumlParserParticipant.RULE_namedIdentifier = 14;
pumlParserParticipant.RULE_titleAsIdIdentifier = 15;
pumlParserParticipant.RULE_idAsTitleIdentifier = 16;
pumlParserParticipant.RULE_eolText = 17;

function DeclareParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserParticipant.RULE_declareParticipant;
    return this;
}

DeclareParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareParticipantContext.prototype.constructor = DeclareParticipantContext;

DeclareParticipantContext.prototype.namedIdentifier = function() {
    return this.getTypedRuleContext(NamedIdentifierContext,0);
};

DeclareParticipantContext.prototype.DP_CRLF = function() {
    return this.getToken(pumlParserParticipant.DP_CRLF, 0);
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

DeclareParticipantContext.prototype.DP_ORDER = function() {
    return this.getToken(pumlParserParticipant.DP_ORDER, 0);
};

DeclareParticipantContext.prototype.declareOrder = function() {
    return this.getTypedRuleContext(DeclareOrderContext,0);
};

DeclareParticipantContext.prototype.DP_WSS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParserParticipant.DP_WSS);
    } else {
        return this.getToken(pumlParserParticipant.DP_WSS, i);
    }
};


DeclareParticipantContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

DeclareParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareParticipant(this);
	}
};

DeclareParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareParticipant(this);
	}
};

DeclareParticipantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareParticipant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareParticipantContext = DeclareParticipantContext;

pumlParserParticipant.prototype.declareParticipant = function() {

    var localctx = new DeclareParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, pumlParserParticipant.RULE_declareParticipant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserParticipant.PARTICIPANT:
            this.state = 36;
            this.declareDefaultParticipant();
            break;
        case pumlParserParticipant.ACTOR:
            this.state = 37;
            this.declareActor();
            break;
        case pumlParserParticipant.BOUNDARY:
            this.state = 38;
            this.declareBoundary();
            break;
        case pumlParserParticipant.CONTROL:
            this.state = 39;
            this.declareControl();
            break;
        case pumlParserParticipant.ENTITY:
            this.state = 40;
            this.declareEntity();
            break;
        case pumlParserParticipant.DATABASE:
            this.state = 41;
            this.declareDatabase();
            break;
        case pumlParserParticipant.COLLECTIONS:
            this.state = 42;
            this.declareCollections();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 45;
        this.namedIdentifier();
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParserParticipant.DP_ORDER) {
            this.state = 46;
            this.match(pumlParserParticipant.DP_ORDER);
            this.state = 47;
            this.declareOrder();
        }

        this.state = 52;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 50;
            this.match(pumlParserParticipant.DP_WSS);
            this.state = 51;
            this.color();

        }
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParserParticipant.DP_WSS) {
            this.state = 54;
            this.match(pumlParserParticipant.DP_WSS);
        }

        this.state = 57;
        this.match(pumlParserParticipant.DP_CRLF);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareDefaultParticipant;
    return this;
}

DeclareDefaultParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareDefaultParticipantContext.prototype.constructor = DeclareDefaultParticipantContext;

DeclareDefaultParticipantContext.prototype.PARTICIPANT = function() {
    return this.getToken(pumlParserParticipant.PARTICIPANT, 0);
};

DeclareDefaultParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareDefaultParticipant(this);
	}
};

DeclareDefaultParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareDefaultParticipant(this);
	}
};

DeclareDefaultParticipantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareDefaultParticipant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareDefaultParticipantContext = DeclareDefaultParticipantContext;

pumlParserParticipant.prototype.declareDefaultParticipant = function() {

    var localctx = new DeclareDefaultParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, pumlParserParticipant.RULE_declareDefaultParticipant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(pumlParserParticipant.PARTICIPANT);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareActor;
    return this;
}

DeclareActorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareActorContext.prototype.constructor = DeclareActorContext;

DeclareActorContext.prototype.ACTOR = function() {
    return this.getToken(pumlParserParticipant.ACTOR, 0);
};

DeclareActorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareActor(this);
	}
};

DeclareActorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareActor(this);
	}
};

DeclareActorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareActor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareActorContext = DeclareActorContext;

pumlParserParticipant.prototype.declareActor = function() {

    var localctx = new DeclareActorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, pumlParserParticipant.RULE_declareActor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(pumlParserParticipant.ACTOR);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareBoundary;
    return this;
}

DeclareBoundaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareBoundaryContext.prototype.constructor = DeclareBoundaryContext;

DeclareBoundaryContext.prototype.BOUNDARY = function() {
    return this.getToken(pumlParserParticipant.BOUNDARY, 0);
};

DeclareBoundaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareBoundary(this);
	}
};

DeclareBoundaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareBoundary(this);
	}
};

DeclareBoundaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareBoundary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareBoundaryContext = DeclareBoundaryContext;

pumlParserParticipant.prototype.declareBoundary = function() {

    var localctx = new DeclareBoundaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, pumlParserParticipant.RULE_declareBoundary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(pumlParserParticipant.BOUNDARY);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareControl;
    return this;
}

DeclareControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareControlContext.prototype.constructor = DeclareControlContext;

DeclareControlContext.prototype.CONTROL = function() {
    return this.getToken(pumlParserParticipant.CONTROL, 0);
};

DeclareControlContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareControl(this);
	}
};

DeclareControlContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareControl(this);
	}
};

DeclareControlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareControl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareControlContext = DeclareControlContext;

pumlParserParticipant.prototype.declareControl = function() {

    var localctx = new DeclareControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pumlParserParticipant.RULE_declareControl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(pumlParserParticipant.CONTROL);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareEntity;
    return this;
}

DeclareEntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareEntityContext.prototype.constructor = DeclareEntityContext;

DeclareEntityContext.prototype.ENTITY = function() {
    return this.getToken(pumlParserParticipant.ENTITY, 0);
};

DeclareEntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareEntity(this);
	}
};

DeclareEntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareEntity(this);
	}
};

DeclareEntityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareEntity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareEntityContext = DeclareEntityContext;

pumlParserParticipant.prototype.declareEntity = function() {

    var localctx = new DeclareEntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, pumlParserParticipant.RULE_declareEntity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(pumlParserParticipant.ENTITY);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareDatabase;
    return this;
}

DeclareDatabaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareDatabaseContext.prototype.constructor = DeclareDatabaseContext;

DeclareDatabaseContext.prototype.DATABASE = function() {
    return this.getToken(pumlParserParticipant.DATABASE, 0);
};

DeclareDatabaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareDatabase(this);
	}
};

DeclareDatabaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareDatabase(this);
	}
};

DeclareDatabaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareDatabase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareDatabaseContext = DeclareDatabaseContext;

pumlParserParticipant.prototype.declareDatabase = function() {

    var localctx = new DeclareDatabaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, pumlParserParticipant.RULE_declareDatabase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(pumlParserParticipant.DATABASE);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareCollections;
    return this;
}

DeclareCollectionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareCollectionsContext.prototype.constructor = DeclareCollectionsContext;

DeclareCollectionsContext.prototype.COLLECTIONS = function() {
    return this.getToken(pumlParserParticipant.COLLECTIONS, 0);
};

DeclareCollectionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareCollections(this);
	}
};

DeclareCollectionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareCollections(this);
	}
};

DeclareCollectionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareCollections(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareCollectionsContext = DeclareCollectionsContext;

pumlParserParticipant.prototype.declareCollections = function() {

    var localctx = new DeclareCollectionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, pumlParserParticipant.RULE_declareCollections);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(pumlParserParticipant.COLLECTIONS);
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
    this.ruleIndex = pumlParserParticipant.RULE_declareOrder;
    return this;
}

DeclareOrderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclareOrderContext.prototype.constructor = DeclareOrderContext;

DeclareOrderContext.prototype.simpleIdentifier = function() {
    return this.getTypedRuleContext(SimpleIdentifierContext,0);
};

DeclareOrderContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterDeclareOrder(this);
	}
};

DeclareOrderContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitDeclareOrder(this);
	}
};

DeclareOrderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitDeclareOrder(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.DeclareOrderContext = DeclareOrderContext;

pumlParserParticipant.prototype.declareOrder = function() {

    var localctx = new DeclareOrderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, pumlParserParticipant.RULE_declareOrder);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.simpleIdentifier();
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
    this.ruleIndex = pumlParserParticipant.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.COLORS = function() {
    return this.getToken(pumlParserParticipant.COLORS, 0);
};

ColorContext.prototype.DP_COLORS = function() {
    return this.getToken(pumlParserParticipant.DP_COLORS, 0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.ColorContext = ColorContext;

pumlParserParticipant.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, pumlParserParticipant.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        _la = this._input.LA(1);
        if(!(_la===pumlParserParticipant.COLORS || _la===pumlParserParticipant.DP_COLORS)) {
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
    this.ruleIndex = pumlParserParticipant.RULE_emptyLine;
    return this;
}

EmptyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyLineContext.prototype.constructor = EmptyLineContext;

EmptyLineContext.prototype.WSS = function() {
    return this.getToken(pumlParserParticipant.WSS, 0);
};

EmptyLineContext.prototype.CRLF = function() {
    return this.getToken(pumlParserParticipant.CRLF, 0);
};

EmptyLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterEmptyLine(this);
	}
};

EmptyLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitEmptyLine(this);
	}
};

EmptyLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitEmptyLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.EmptyLineContext = EmptyLineContext;

pumlParserParticipant.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, pumlParserParticipant.RULE_emptyLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        _la = this._input.LA(1);
        if(!(_la===pumlParserParticipant.CRLF || _la===pumlParserParticipant.WSS)) {
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
    this.ruleIndex = pumlParserParticipant.RULE_identifier;
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

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.IdentifierContext = IdentifierContext;

pumlParserParticipant.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, pumlParserParticipant.RULE_identifier);
    try {
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserParticipant.ID:
        case pumlParserParticipant.DP_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 79;
            this.simpleIdentifier();
            break;
        case pumlParserParticipant.QID:
        case pumlParserParticipant.DP_QID:
            this.enterOuterAlt(localctx, 2);
            this.state = 80;
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

function SimpleIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserParticipant.RULE_simpleIdentifier;
    return this;
}

SimpleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleIdentifierContext.prototype.constructor = SimpleIdentifierContext;

SimpleIdentifierContext.prototype.ID = function() {
    return this.getToken(pumlParserParticipant.ID, 0);
};

SimpleIdentifierContext.prototype.DP_ID = function() {
    return this.getToken(pumlParserParticipant.DP_ID, 0);
};

SimpleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitSimpleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.SimpleIdentifierContext = SimpleIdentifierContext;

pumlParserParticipant.prototype.simpleIdentifier = function() {

    var localctx = new SimpleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, pumlParserParticipant.RULE_simpleIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        _la = this._input.LA(1);
        if(!(_la===pumlParserParticipant.ID || _la===pumlParserParticipant.DP_ID)) {
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

function QuotedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserParticipant.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.QID = function() {
    return this.getToken(pumlParserParticipant.QID, 0);
};

QuotedIdentifierContext.prototype.DP_QID = function() {
    return this.getToken(pumlParserParticipant.DP_QID, 0);
};

QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitQuotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.QuotedIdentifierContext = QuotedIdentifierContext;

pumlParserParticipant.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, pumlParserParticipant.RULE_quotedIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        _la = this._input.LA(1);
        if(!(_la===pumlParserParticipant.QID || _la===pumlParserParticipant.DP_QID)) {
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

function NamedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserParticipant.RULE_namedIdentifier;
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

NamedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterNamedIdentifier(this);
	}
};

NamedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitNamedIdentifier(this);
	}
};

NamedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitNamedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.NamedIdentifierContext = NamedIdentifierContext;

pumlParserParticipant.prototype.namedIdentifier = function() {

    var localctx = new NamedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, pumlParserParticipant.RULE_namedIdentifier);
    try {
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.titleAsIdIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 88;
            this.idAsTitleIdentifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 89;
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
    this.ruleIndex = pumlParserParticipant.RULE_titleAsIdIdentifier;
    return this;
}

TitleAsIdIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleAsIdIdentifierContext.prototype.constructor = TitleAsIdIdentifierContext;

TitleAsIdIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

TitleAsIdIdentifierContext.prototype.DP_AS = function() {
    return this.getToken(pumlParserParticipant.DP_AS, 0);
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

TitleAsIdIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterTitleAsIdIdentifier(this);
	}
};

TitleAsIdIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitTitleAsIdIdentifier(this);
	}
};

TitleAsIdIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitTitleAsIdIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.TitleAsIdIdentifierContext = TitleAsIdIdentifierContext;

pumlParserParticipant.prototype.titleAsIdIdentifier = function() {

    var localctx = new TitleAsIdIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, pumlParserParticipant.RULE_titleAsIdIdentifier);
    try {
        this.state = 100;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserParticipant.QID:
        case pumlParserParticipant.DP_QID:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.quotedIdentifier();
            this.state = 93;
            this.match(pumlParserParticipant.DP_AS);
            this.state = 94;
            this.simpleIdentifier();
            break;
        case pumlParserParticipant.ID:
        case pumlParserParticipant.DP_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.simpleIdentifier();
            this.state = 97;
            this.match(pumlParserParticipant.DP_AS);
            this.state = 98;
            this.simpleIdentifier();
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

function IdAsTitleIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserParticipant.RULE_idAsTitleIdentifier;
    return this;
}

IdAsTitleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdAsTitleIdentifierContext.prototype.constructor = IdAsTitleIdentifierContext;

IdAsTitleIdentifierContext.prototype.simpleIdentifier = function() {
    return this.getTypedRuleContext(SimpleIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.DP_AS = function() {
    return this.getToken(pumlParserParticipant.DP_AS, 0);
};

IdAsTitleIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterIdAsTitleIdentifier(this);
	}
};

IdAsTitleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitIdAsTitleIdentifier(this);
	}
};

IdAsTitleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitIdAsTitleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.IdAsTitleIdentifierContext = IdAsTitleIdentifierContext;

pumlParserParticipant.prototype.idAsTitleIdentifier = function() {

    var localctx = new IdAsTitleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, pumlParserParticipant.RULE_idAsTitleIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.simpleIdentifier();
        this.state = 103;
        this.match(pumlParserParticipant.DP_AS);
        this.state = 104;
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
    this.ruleIndex = pumlParserParticipant.RULE_eolText;
    return this;
}

EolTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EolTextContext.prototype.constructor = EolTextContext;

EolTextContext.prototype.EOL_TEXT = function() {
    return this.getToken(pumlParserParticipant.EOL_TEXT, 0);
};

EolTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.enterEolText(this);
	}
};

EolTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserParticipantListener ) {
        listener.exitEolText(this);
	}
};

EolTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserParticipantVisitor ) {
        return visitor.visitEolText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserParticipant.EolTextContext = EolTextContext;

pumlParserParticipant.prototype.eolText = function() {

    var localctx = new EolTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, pumlParserParticipant.RULE_eolText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(pumlParserParticipant.EOL_TEXT);
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


exports.pumlParserParticipant = pumlParserParticipant;
