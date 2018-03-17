// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserSequence.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlParserSequenceListener = require('./pumlParserSequenceListener').pumlParserSequenceListener;
var pumlParserSequenceVisitor = require('./pumlParserSequenceVisitor').pumlParserSequenceVisitor;

var grammarFileName = "pumlParserSequence.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001d6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u001b\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007$\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b.\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0002\u0006\u0004\u0002\f\f\u0015\u0015\u0003\u0002\u0011\u0012",
    "\u0004\u0002\u0014\u0014\u001a\u001a\u0004\u0002\u0013\u0013\u0019\u0019",
    "\u00020\u0002\u0014\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002",
    "\u0002\u0002\u0006\u001a\u0003\u0002\u0002\u0002\b\u001c\u0003\u0002",
    "\u0002\u0002\n\u001e\u0003\u0002\u0002\u0002\f#\u0003\u0002\u0002\u0002",
    "\u000e-\u0003\u0002\u0002\u0002\u0010/\u0003\u0002\u0002\u0002\u0012",
    "3\u0003\u0002\u0002\u0002\u0014\u0015\t\u0002\u0002\u0002\u0015\u0003",
    "\u0003\u0002\u0002\u0002\u0016\u0017\t\u0003\u0002\u0002\u0017\u0005",
    "\u0003\u0002\u0002\u0002\u0018\u001b\u0005\b\u0005\u0002\u0019\u001b",
    "\u0005\n\u0006\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u0019",
    "\u0003\u0002\u0002\u0002\u001b\u0007\u0003\u0002\u0002\u0002\u001c\u001d",
    "\t\u0004\u0002\u0002\u001d\t\u0003\u0002\u0002\u0002\u001e\u001f\t\u0005",
    "\u0002\u0002\u001f\u000b\u0003\u0002\u0002\u0002 $\u0005\u000e\b\u0002",
    "!$\u0005\u0010\t\u0002\"$\u0005\u0006\u0004\u0002# \u0003\u0002\u0002",
    "\u0002#!\u0003\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002$\r\u0003",
    "\u0002\u0002\u0002%&\u0005\n\u0006\u0002&\'\u0007\u0016\u0002\u0002",
    "\'(\u0005\b\u0005\u0002(.\u0003\u0002\u0002\u0002)*\u0005\b\u0005\u0002",
    "*+\u0007\u0016\u0002\u0002+,\u0005\b\u0005\u0002,.\u0003\u0002\u0002",
    "\u0002-%\u0003\u0002\u0002\u0002-)\u0003\u0002\u0002\u0002.\u000f\u0003",
    "\u0002\u0002\u0002/0\u0005\b\u0005\u000201\u0007\u0016\u0002\u00021",
    "2\u0005\n\u0006\u00022\u0011\u0003\u0002\u0002\u000234\u0007\u001d\u0002",
    "\u00024\u0013\u0003\u0002\u0002\u0002\u0005\u001a#-"].join("");


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

var ruleNames =  [ "color", "emptyLine", "identifier", "simpleIdentifier", 
                   "quotedIdentifier", "namedIdentifier", "titleAsIdIdentifier", 
                   "idAsTitleIdentifier", "eolText" ];

function pumlParserSequence (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

pumlParserSequence.prototype = Object.create(antlr4.Parser.prototype);
pumlParserSequence.prototype.constructor = pumlParserSequence;

Object.defineProperty(pumlParserSequence.prototype, "atn", {
	get : function() {
		return atn;
	}
});

pumlParserSequence.EOF = antlr4.Token.EOF;
pumlParserSequence.STARTUML = 1;
pumlParserSequence.ENDUML = 2;
pumlParserSequence.PARTICIPANT = 3;
pumlParserSequence.ACTOR = 4;
pumlParserSequence.BOUNDARY = 5;
pumlParserSequence.CONTROL = 6;
pumlParserSequence.ENTITY = 7;
pumlParserSequence.DATABASE = 8;
pumlParserSequence.COLLECTIONS = 9;
pumlParserSequence.COLORS = 10;
pumlParserSequence.HEX_COLORS = 11;
pumlParserSequence.NAMED_COLORS = 12;
pumlParserSequence.SINGLE_LINE_COMMENT = 13;
pumlParserSequence.MULTI_LINE_COMMENT = 14;
pumlParserSequence.CRLF = 15;
pumlParserSequence.WSS = 16;
pumlParserSequence.QID = 17;
pumlParserSequence.ID = 18;
pumlParserSequence.DP_COLORS = 19;
pumlParserSequence.DP_AS = 20;
pumlParserSequence.DP_ORDER = 21;
pumlParserSequence.DP_WSS = 22;
pumlParserSequence.DP_QID = 23;
pumlParserSequence.DP_ID = 24;
pumlParserSequence.DP_CRLF = 25;
pumlParserSequence.STARTUML_NAME = 26;
pumlParserSequence.EOL_TEXT = 27;

pumlParserSequence.RULE_color = 0;
pumlParserSequence.RULE_emptyLine = 1;
pumlParserSequence.RULE_identifier = 2;
pumlParserSequence.RULE_simpleIdentifier = 3;
pumlParserSequence.RULE_quotedIdentifier = 4;
pumlParserSequence.RULE_namedIdentifier = 5;
pumlParserSequence.RULE_titleAsIdIdentifier = 6;
pumlParserSequence.RULE_idAsTitleIdentifier = 7;
pumlParserSequence.RULE_eolText = 8;

function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserSequence.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.COLORS = function() {
    return this.getToken(pumlParserSequence.COLORS, 0);
};

ColorContext.prototype.DP_COLORS = function() {
    return this.getToken(pumlParserSequence.DP_COLORS, 0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.ColorContext = ColorContext;

pumlParserSequence.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, pumlParserSequence.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        _la = this._input.LA(1);
        if(!(_la===pumlParserSequence.COLORS || _la===pumlParserSequence.DP_COLORS)) {
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
    this.ruleIndex = pumlParserSequence.RULE_emptyLine;
    return this;
}

EmptyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyLineContext.prototype.constructor = EmptyLineContext;

EmptyLineContext.prototype.WSS = function() {
    return this.getToken(pumlParserSequence.WSS, 0);
};

EmptyLineContext.prototype.CRLF = function() {
    return this.getToken(pumlParserSequence.CRLF, 0);
};

EmptyLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterEmptyLine(this);
	}
};

EmptyLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitEmptyLine(this);
	}
};

EmptyLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitEmptyLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.EmptyLineContext = EmptyLineContext;

pumlParserSequence.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, pumlParserSequence.RULE_emptyLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        _la = this._input.LA(1);
        if(!(_la===pumlParserSequence.CRLF || _la===pumlParserSequence.WSS)) {
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
    this.ruleIndex = pumlParserSequence.RULE_identifier;
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
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.IdentifierContext = IdentifierContext;

pumlParserSequence.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, pumlParserSequence.RULE_identifier);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserSequence.ID:
        case pumlParserSequence.DP_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.simpleIdentifier();
            break;
        case pumlParserSequence.QID:
        case pumlParserSequence.DP_QID:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
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
    this.ruleIndex = pumlParserSequence.RULE_simpleIdentifier;
    return this;
}

SimpleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleIdentifierContext.prototype.constructor = SimpleIdentifierContext;

SimpleIdentifierContext.prototype.ID = function() {
    return this.getToken(pumlParserSequence.ID, 0);
};

SimpleIdentifierContext.prototype.DP_ID = function() {
    return this.getToken(pumlParserSequence.DP_ID, 0);
};

SimpleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitSimpleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.SimpleIdentifierContext = SimpleIdentifierContext;

pumlParserSequence.prototype.simpleIdentifier = function() {

    var localctx = new SimpleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, pumlParserSequence.RULE_simpleIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        _la = this._input.LA(1);
        if(!(_la===pumlParserSequence.ID || _la===pumlParserSequence.DP_ID)) {
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
    this.ruleIndex = pumlParserSequence.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.QID = function() {
    return this.getToken(pumlParserSequence.QID, 0);
};

QuotedIdentifierContext.prototype.DP_QID = function() {
    return this.getToken(pumlParserSequence.DP_QID, 0);
};

QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitQuotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.QuotedIdentifierContext = QuotedIdentifierContext;

pumlParserSequence.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pumlParserSequence.RULE_quotedIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        _la = this._input.LA(1);
        if(!(_la===pumlParserSequence.QID || _la===pumlParserSequence.DP_QID)) {
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
    this.ruleIndex = pumlParserSequence.RULE_namedIdentifier;
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
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterNamedIdentifier(this);
	}
};

NamedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitNamedIdentifier(this);
	}
};

NamedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitNamedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.NamedIdentifierContext = NamedIdentifierContext;

pumlParserSequence.prototype.namedIdentifier = function() {

    var localctx = new NamedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, pumlParserSequence.RULE_namedIdentifier);
    try {
        this.state = 33;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 30;
            this.titleAsIdIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.idAsTitleIdentifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 32;
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
    this.ruleIndex = pumlParserSequence.RULE_titleAsIdIdentifier;
    return this;
}

TitleAsIdIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleAsIdIdentifierContext.prototype.constructor = TitleAsIdIdentifierContext;

TitleAsIdIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

TitleAsIdIdentifierContext.prototype.DP_AS = function() {
    return this.getToken(pumlParserSequence.DP_AS, 0);
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
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterTitleAsIdIdentifier(this);
	}
};

TitleAsIdIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitTitleAsIdIdentifier(this);
	}
};

TitleAsIdIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitTitleAsIdIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.TitleAsIdIdentifierContext = TitleAsIdIdentifierContext;

pumlParserSequence.prototype.titleAsIdIdentifier = function() {

    var localctx = new TitleAsIdIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, pumlParserSequence.RULE_titleAsIdIdentifier);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserSequence.QID:
        case pumlParserSequence.DP_QID:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.quotedIdentifier();
            this.state = 36;
            this.match(pumlParserSequence.DP_AS);
            this.state = 37;
            this.simpleIdentifier();
            break;
        case pumlParserSequence.ID:
        case pumlParserSequence.DP_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.simpleIdentifier();
            this.state = 40;
            this.match(pumlParserSequence.DP_AS);
            this.state = 41;
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
    this.ruleIndex = pumlParserSequence.RULE_idAsTitleIdentifier;
    return this;
}

IdAsTitleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdAsTitleIdentifierContext.prototype.constructor = IdAsTitleIdentifierContext;

IdAsTitleIdentifierContext.prototype.simpleIdentifier = function() {
    return this.getTypedRuleContext(SimpleIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.DP_AS = function() {
    return this.getToken(pumlParserSequence.DP_AS, 0);
};

IdAsTitleIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterIdAsTitleIdentifier(this);
	}
};

IdAsTitleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitIdAsTitleIdentifier(this);
	}
};

IdAsTitleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitIdAsTitleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.IdAsTitleIdentifierContext = IdAsTitleIdentifierContext;

pumlParserSequence.prototype.idAsTitleIdentifier = function() {

    var localctx = new IdAsTitleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, pumlParserSequence.RULE_idAsTitleIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.simpleIdentifier();
        this.state = 46;
        this.match(pumlParserSequence.DP_AS);
        this.state = 47;
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
    this.ruleIndex = pumlParserSequence.RULE_eolText;
    return this;
}

EolTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EolTextContext.prototype.constructor = EolTextContext;

EolTextContext.prototype.EOL_TEXT = function() {
    return this.getToken(pumlParserSequence.EOL_TEXT, 0);
};

EolTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.enterEolText(this);
	}
};

EolTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserSequenceListener ) {
        listener.exitEolText(this);
	}
};

EolTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserSequenceVisitor ) {
        return visitor.visitEolText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserSequence.EolTextContext = EolTextContext;

pumlParserSequence.prototype.eolText = function() {

    var localctx = new EolTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, pumlParserSequence.RULE_eolText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(pumlParserSequence.EOL_TEXT);
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


exports.pumlParserSequence = pumlParserSequence;
