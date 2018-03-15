// Generated from /Volumes/v/github/puml/spikes/model/pumlParserCommon.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlParserCommonListener = require('./pumlParserCommonListener').pumlParserCommonListener;
var pumlParserCommonVisitor = require('./pumlParserCommonVisitor').pumlParserCommonVisitor;

var grammarFileName = "pumlParserCommon.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e*\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005",
    "\u0004\u0015\n\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u0019\n\u0005",
    "\f\u0005\u000e\u0005\u001c\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006!\n\u0006\f\u0006\u000e\u0006$\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002",
    "\u0004\u0006\b\n\f\u0002\u0005\u0003\u0002\u0007\b\u0003\u0002\t\n\u0003",
    "\u0002\r\r\u0002\'\u0002\u000e\u0003\u0002\u0002\u0002\u0004\u0010\u0003",
    "\u0002\u0002\u0002\u0006\u0014\u0003\u0002\u0002\u0002\b\u0016\u0003",
    "\u0002\u0002\u0002\n\u001d\u0003\u0002\u0002\u0002\f\'\u0003\u0002\u0002",
    "\u0002\u000e\u000f\t\u0002\u0002\u0002\u000f\u0003\u0003\u0002\u0002",
    "\u0002\u0010\u0011\t\u0003\u0002\u0002\u0011\u0005\u0003\u0002\u0002",
    "\u0002\u0012\u0015\u0005\b\u0005\u0002\u0013\u0015\u0005\n\u0006\u0002",
    "\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002",
    "\u0015\u0007\u0003\u0002\u0002\u0002\u0016\u001a\n\u0004\u0002\u0002",
    "\u0017\u0019\n\u0003\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002",
    "\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002",
    "\u001a\u001b\u0003\u0002\u0002\u0002\u001b\t\u0003\u0002\u0002\u0002",
    "\u001c\u001a\u0003\u0002\u0002\u0002\u001d\"\u0007\r\u0002\u0002\u001e",
    "!\n\u0004\u0002\u0002\u001f!\u0007\u000e\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002\u0002",
    "\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003\u0002",
    "\u0002\u0002$\"\u0003\u0002\u0002\u0002%&\u0007\r\u0002\u0002&\u000b",
    "\u0003\u0002\u0002\u0002\'(\u0007\f\u0002\u0002(\r\u0003\u0002\u0002",
    "\u0002\u0006\u0014\u001a \""].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "STARTUML", "ENDUML", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "HEX_COLORS", "NAMED_COLORS", 
                      "CRLF", "WSS", "STARTUML_NAME", "EOL_TEXT", "DBLQUOTE", 
                      "ESC_DBLQUOTE" ];

var ruleNames =  [ "color", "emptyLine", "identifier", "simpleIdentifier", 
                   "quotedIdentifier", "eolText" ];

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
pumlParserCommon.SINGLE_LINE_COMMENT = 3;
pumlParserCommon.MULTI_LINE_COMMENT = 4;
pumlParserCommon.HEX_COLORS = 5;
pumlParserCommon.NAMED_COLORS = 6;
pumlParserCommon.CRLF = 7;
pumlParserCommon.WSS = 8;
pumlParserCommon.STARTUML_NAME = 9;
pumlParserCommon.EOL_TEXT = 10;
pumlParserCommon.DBLQUOTE = 11;
pumlParserCommon.ESC_DBLQUOTE = 12;

pumlParserCommon.RULE_color = 0;
pumlParserCommon.RULE_emptyLine = 1;
pumlParserCommon.RULE_identifier = 2;
pumlParserCommon.RULE_simpleIdentifier = 3;
pumlParserCommon.RULE_quotedIdentifier = 4;
pumlParserCommon.RULE_eolText = 5;

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

ColorContext.prototype.NAMED_COLORS = function() {
    return this.getToken(pumlParserCommon.NAMED_COLORS, 0);
};

ColorContext.prototype.HEX_COLORS = function() {
    return this.getToken(pumlParserCommon.HEX_COLORS, 0);
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
        this.state = 12;
        _la = this._input.LA(1);
        if(!(_la===pumlParserCommon.HEX_COLORS || _la===pumlParserCommon.NAMED_COLORS)) {
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
        this.state = 14;
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
        this.state = 18;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pumlParserCommon.STARTUML:
        case pumlParserCommon.ENDUML:
        case pumlParserCommon.SINGLE_LINE_COMMENT:
        case pumlParserCommon.MULTI_LINE_COMMENT:
        case pumlParserCommon.HEX_COLORS:
        case pumlParserCommon.NAMED_COLORS:
        case pumlParserCommon.CRLF:
        case pumlParserCommon.WSS:
        case pumlParserCommon.STARTUML_NAME:
        case pumlParserCommon.EOL_TEXT:
        case pumlParserCommon.ESC_DBLQUOTE:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            this.simpleIdentifier();
            break;
        case pumlParserCommon.DBLQUOTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
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

SimpleIdentifierContext.prototype.DBLQUOTE = function() {
    return this.getToken(pumlParserCommon.DBLQUOTE, 0);
};

SimpleIdentifierContext.prototype.WSS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParserCommon.WSS);
    } else {
        return this.getToken(pumlParserCommon.WSS, i);
    }
};


SimpleIdentifierContext.prototype.CRLF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParserCommon.CRLF);
    } else {
        return this.getToken(pumlParserCommon.CRLF, i);
    }
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
        this.state = 20;
        _la = this._input.LA(1);
        if(_la<=0 || _la===pumlParserCommon.DBLQUOTE) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParserCommon.STARTUML) | (1 << pumlParserCommon.ENDUML) | (1 << pumlParserCommon.SINGLE_LINE_COMMENT) | (1 << pumlParserCommon.MULTI_LINE_COMMENT) | (1 << pumlParserCommon.HEX_COLORS) | (1 << pumlParserCommon.NAMED_COLORS) | (1 << pumlParserCommon.STARTUML_NAME) | (1 << pumlParserCommon.EOL_TEXT) | (1 << pumlParserCommon.DBLQUOTE) | (1 << pumlParserCommon.ESC_DBLQUOTE))) !== 0)) {
            this.state = 21;
            _la = this._input.LA(1);
            if(_la<=0 || _la===pumlParserCommon.CRLF || _la===pumlParserCommon.WSS) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 26;
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

QuotedIdentifierContext.prototype.DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParserCommon.DBLQUOTE);
    } else {
        return this.getToken(pumlParserCommon.DBLQUOTE, i);
    }
};


QuotedIdentifierContext.prototype.ESC_DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParserCommon.ESC_DBLQUOTE);
    } else {
        return this.getToken(pumlParserCommon.ESC_DBLQUOTE, i);
    }
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
        this.state = 27;
        this.match(pumlParserCommon.DBLQUOTE);
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pumlParserCommon.STARTUML) | (1 << pumlParserCommon.ENDUML) | (1 << pumlParserCommon.SINGLE_LINE_COMMENT) | (1 << pumlParserCommon.MULTI_LINE_COMMENT) | (1 << pumlParserCommon.HEX_COLORS) | (1 << pumlParserCommon.NAMED_COLORS) | (1 << pumlParserCommon.CRLF) | (1 << pumlParserCommon.WSS) | (1 << pumlParserCommon.STARTUML_NAME) | (1 << pumlParserCommon.EOL_TEXT) | (1 << pumlParserCommon.ESC_DBLQUOTE))) !== 0)) {
            this.state = 30;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 28;
                _la = this._input.LA(1);
                if(_la<=0 || _la===pumlParserCommon.DBLQUOTE) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                break;

            case 2:
                this.state = 29;
                this.match(pumlParserCommon.ESC_DBLQUOTE);
                break;

            }
            this.state = 34;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 35;
        this.match(pumlParserCommon.DBLQUOTE);
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
    this.enterRule(localctx, 10, pumlParserCommon.RULE_eolText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
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
