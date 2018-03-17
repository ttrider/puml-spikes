// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserCommon.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlParserCommonListener = require('./pumlParserCommonListener').pumlParserCommonListener;
var pumlParserCommonVisitor = require('./pumlParserCommonVisitor').pumlParserCommonVisitor;

var grammarFileName = "pumlParserCommon.g4";

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

function pumlParserCommon (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

pumlParserCommon.prototype = Object.create(antlr4.Parser.prototype);
pumlParserCommon.prototype.constructor = pumlParserCommon;

Object.defineProperty(pumlParserCommon.prototype, "atn", {
	get : function() {
		return atn;
	}
});

pumlParserCommon.EOF = antlr4.Token.EOF;
pumlParserCommon.STARTUML = 1;
pumlParserCommon.ENDUML = 2;
pumlParserCommon.PARTICIPANT = 3;
pumlParserCommon.ACTOR = 4;
pumlParserCommon.BOUNDARY = 5;
pumlParserCommon.CONTROL = 6;
pumlParserCommon.ENTITY = 7;
pumlParserCommon.DATABASE = 8;
pumlParserCommon.COLLECTIONS = 9;
pumlParserCommon.COLORS = 10;
pumlParserCommon.HEX_COLORS = 11;
pumlParserCommon.NAMED_COLORS = 12;
pumlParserCommon.SINGLE_LINE_COMMENT = 13;
pumlParserCommon.MULTI_LINE_COMMENT = 14;
pumlParserCommon.CRLF = 15;
pumlParserCommon.WSS = 16;
pumlParserCommon.QID = 17;
pumlParserCommon.ID = 18;
pumlParserCommon.DP_COLORS = 19;
pumlParserCommon.DP_AS = 20;
pumlParserCommon.DP_ORDER = 21;
pumlParserCommon.DP_WSS = 22;
pumlParserCommon.DP_QID = 23;
pumlParserCommon.DP_ID = 24;
pumlParserCommon.DP_CRLF = 25;
pumlParserCommon.STARTUML_NAME = 26;
pumlParserCommon.EOL_TEXT = 27;

pumlParserCommon.RULE_color = 0;
pumlParserCommon.RULE_emptyLine = 1;
pumlParserCommon.RULE_identifier = 2;
pumlParserCommon.RULE_simpleIdentifier = 3;
pumlParserCommon.RULE_quotedIdentifier = 4;
pumlParserCommon.RULE_namedIdentifier = 5;
pumlParserCommon.RULE_titleAsIdIdentifier = 6;
pumlParserCommon.RULE_idAsTitleIdentifier = 7;
pumlParserCommon.RULE_eolText = 8;

function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParserCommon.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.COLORS = function() {
    return this.getToken(pumlParserCommon.COLORS, 0);
};

ColorContext.prototype.DP_COLORS = function() {
    return this.getToken(pumlParserCommon.DP_COLORS, 0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.ColorContext = ColorContext;

pumlParserCommon.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, pumlParserCommon.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        _la = this._input.LA(1);
        if(!(_la===pumlParserCommon.COLORS || _la===pumlParserCommon.DP_COLORS)) {
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
    this.ruleIndex = pumlParserCommon.RULE_emptyLine;
    return this;
}

EmptyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyLineContext.prototype.constructor = EmptyLineContext;

EmptyLineContext.prototype.WSS = function() {
    return this.getToken(pumlParserCommon.WSS, 0);
};

EmptyLineContext.prototype.CRLF = function() {
    return this.getToken(pumlParserCommon.CRLF, 0);
};

EmptyLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterEmptyLine(this);
	}
};

EmptyLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitEmptyLine(this);
	}
};

EmptyLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitEmptyLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.EmptyLineContext = EmptyLineContext;

pumlParserCommon.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, pumlParserCommon.RULE_emptyLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        _la = this._input.LA(1);
        if(!(_la===pumlParserCommon.CRLF || _la===pumlParserCommon.WSS)) {
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
    this.ruleIndex = pumlParserCommon.RULE_identifier;
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
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.IdentifierContext = IdentifierContext;

pumlParserCommon.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, pumlParserCommon.RULE_identifier);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserCommon.ID:
        case pumlParserCommon.DP_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.simpleIdentifier();
            break;
        case pumlParserCommon.QID:
        case pumlParserCommon.DP_QID:
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
    this.ruleIndex = pumlParserCommon.RULE_simpleIdentifier;
    return this;
}

SimpleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleIdentifierContext.prototype.constructor = SimpleIdentifierContext;

SimpleIdentifierContext.prototype.ID = function() {
    return this.getToken(pumlParserCommon.ID, 0);
};

SimpleIdentifierContext.prototype.DP_ID = function() {
    return this.getToken(pumlParserCommon.DP_ID, 0);
};

SimpleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitSimpleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.SimpleIdentifierContext = SimpleIdentifierContext;

pumlParserCommon.prototype.simpleIdentifier = function() {

    var localctx = new SimpleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, pumlParserCommon.RULE_simpleIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        _la = this._input.LA(1);
        if(!(_la===pumlParserCommon.ID || _la===pumlParserCommon.DP_ID)) {
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
    this.ruleIndex = pumlParserCommon.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.QID = function() {
    return this.getToken(pumlParserCommon.QID, 0);
};

QuotedIdentifierContext.prototype.DP_QID = function() {
    return this.getToken(pumlParserCommon.DP_QID, 0);
};

QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitQuotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.QuotedIdentifierContext = QuotedIdentifierContext;

pumlParserCommon.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pumlParserCommon.RULE_quotedIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        _la = this._input.LA(1);
        if(!(_la===pumlParserCommon.QID || _la===pumlParserCommon.DP_QID)) {
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
    this.ruleIndex = pumlParserCommon.RULE_namedIdentifier;
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
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterNamedIdentifier(this);
	}
};

NamedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitNamedIdentifier(this);
	}
};

NamedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitNamedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.NamedIdentifierContext = NamedIdentifierContext;

pumlParserCommon.prototype.namedIdentifier = function() {

    var localctx = new NamedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, pumlParserCommon.RULE_namedIdentifier);
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
    this.ruleIndex = pumlParserCommon.RULE_titleAsIdIdentifier;
    return this;
}

TitleAsIdIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleAsIdIdentifierContext.prototype.constructor = TitleAsIdIdentifierContext;

TitleAsIdIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

TitleAsIdIdentifierContext.prototype.DP_AS = function() {
    return this.getToken(pumlParserCommon.DP_AS, 0);
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
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterTitleAsIdIdentifier(this);
	}
};

TitleAsIdIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitTitleAsIdIdentifier(this);
	}
};

TitleAsIdIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitTitleAsIdIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.TitleAsIdIdentifierContext = TitleAsIdIdentifierContext;

pumlParserCommon.prototype.titleAsIdIdentifier = function() {

    var localctx = new TitleAsIdIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, pumlParserCommon.RULE_titleAsIdIdentifier);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserCommon.QID:
        case pumlParserCommon.DP_QID:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.quotedIdentifier();
            this.state = 36;
            this.match(pumlParserCommon.DP_AS);
            this.state = 37;
            this.simpleIdentifier();
            break;
        case pumlParserCommon.ID:
        case pumlParserCommon.DP_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.simpleIdentifier();
            this.state = 40;
            this.match(pumlParserCommon.DP_AS);
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
    this.ruleIndex = pumlParserCommon.RULE_idAsTitleIdentifier;
    return this;
}

IdAsTitleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdAsTitleIdentifierContext.prototype.constructor = IdAsTitleIdentifierContext;

IdAsTitleIdentifierContext.prototype.simpleIdentifier = function() {
    return this.getTypedRuleContext(SimpleIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.DP_AS = function() {
    return this.getToken(pumlParserCommon.DP_AS, 0);
};

IdAsTitleIdentifierContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};

IdAsTitleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterIdAsTitleIdentifier(this);
	}
};

IdAsTitleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitIdAsTitleIdentifier(this);
	}
};

IdAsTitleIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitIdAsTitleIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.IdAsTitleIdentifierContext = IdAsTitleIdentifierContext;

pumlParserCommon.prototype.idAsTitleIdentifier = function() {

    var localctx = new IdAsTitleIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, pumlParserCommon.RULE_idAsTitleIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.simpleIdentifier();
        this.state = 46;
        this.match(pumlParserCommon.DP_AS);
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
    this.ruleIndex = pumlParserCommon.RULE_eolText;
    return this;
}

EolTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EolTextContext.prototype.constructor = EolTextContext;

EolTextContext.prototype.EOL_TEXT = function() {
    return this.getToken(pumlParserCommon.EOL_TEXT, 0);
};

EolTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.enterEolText(this);
	}
};

EolTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlParserCommonListener ) {
        listener.exitEolText(this);
	}
};

EolTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlParserCommonVisitor ) {
        return visitor.visitEolText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParserCommon.EolTextContext = EolTextContext;

pumlParserCommon.prototype.eolText = function() {

    var localctx = new EolTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, pumlParserCommon.RULE_eolText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(pumlParserCommon.EOL_TEXT);
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


exports.pumlParserCommon = pumlParserCommon;
