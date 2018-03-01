// Generated from /Volumes/v/github/puml.light/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlListener = require('./pumlListener').pumlListener;
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t)\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0006\u0002\u000e",
    "\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u0017\n\u0004\u0003\u0004\u0005",
    "\u0004\u001a\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006#\n\u0006\u0006\u0006",
    "%\n\u0006\r\u0006\u000e\u0006&\u0003\u0006\u0002\u0002\u0007\u0002\u0004",
    "\u0006\b\n\u0002\u0002\u0002(\u0002\r\u0003\u0002\u0002\u0002\u0004",
    "\u0011\u0003\u0002\u0002\u0002\u0006\u0014\u0003\u0002\u0002\u0002\b",
    "\u001d\u0003\u0002\u0002\u0002\n$\u0003\u0002\u0002\u0002\f\u000e\u0005",
    "\u0004\u0003\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u000f\u0003\u0002",
    "\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002",
    "\u0002\u0002\u0010\u0003\u0003\u0002\u0002\u0002\u0011\u0012\u0005\u0006",
    "\u0004\u0002\u0012\u0013\u0005\b\u0005\u0002\u0013\u0005\u0003\u0002",
    "\u0002\u0002\u0014\u0016\u0007\u0004\u0002\u0002\u0015\u0017\u0007\u0006",
    "\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002",
    "\u0002\u0002\u0017\u0019\u0003\u0002\u0002\u0002\u0018\u001a\u0005\n",
    "\u0006\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001c\u0007\t",
    "\u0002\u0002\u001c\u0007\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0005",
    "\u0002\u0002\u001e\u001f\u0007\t\u0002\u0002\u001f\t\u0003\u0002\u0002",
    "\u0002 \"\u0007\u0007\u0002\u0002!#\u0007\u0006\u0002\u0002\"!\u0003",
    "\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003\u0002\u0002\u0002",
    "$ \u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'\u000b\u0003\u0002\u0002\u0002\u0007",
    "\u000f\u0016\u0019\"&"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'@startuml'", "'@enduml'" ];

var symbolicNames = [ null, "SEMICOLON", "STARTUML", "ENDUML", "SPACE", 
                      "TEXT", "WS", "CR" ];

var ruleNames =  [ "document", "diagram", "startUml", "endUml", "textLine" ];

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
pumlParser.SEMICOLON = 1;
pumlParser.STARTUML = 2;
pumlParser.ENDUML = 3;
pumlParser.SPACE = 4;
pumlParser.TEXT = 5;
pumlParser.WS = 6;
pumlParser.CR = 7;

pumlParser.RULE_document = 0;
pumlParser.RULE_diagram = 1;
pumlParser.RULE_startUml = 2;
pumlParser.RULE_endUml = 3;
pumlParser.RULE_textLine = 4;

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
        this.state = 11; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 10;
            this.diagram();
            this.state = 13; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===pumlParser.STARTUML);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.startUml();
        this.state = 16;
        this.endUml();
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

StartUmlContext.prototype.STARTUML = function() {
    return this.getToken(pumlParser.STARTUML, 0);
};

StartUmlContext.prototype.CR = function() {
    return this.getToken(pumlParser.CR, 0);
};

StartUmlContext.prototype.SPACE = function() {
    return this.getToken(pumlParser.SPACE, 0);
};

StartUmlContext.prototype.textLine = function() {
    return this.getTypedRuleContext(TextLineContext,0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(pumlParser.STARTUML);
        this.state = 20;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.SPACE) {
            this.state = 19;
            this.match(pumlParser.SPACE);
        }

        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pumlParser.TEXT) {
            this.state = 22;
            this.textLine();
        }

        this.state = 25;
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(pumlParser.ENDUML);
        this.state = 28;
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

function TextLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pumlParser.RULE_textLine;
    return this;
}

TextLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextLineContext.prototype.constructor = TextLineContext;

TextLineContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.TEXT);
    } else {
        return this.getToken(pumlParser.TEXT, i);
    }
};


TextLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pumlParser.SPACE);
    } else {
        return this.getToken(pumlParser.SPACE, i);
    }
};


TextLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterTextLine(this);
	}
};

TextLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitTextLine(this);
	}
};

TextLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pumlVisitor ) {
        return visitor.visitTextLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pumlParser.TextLineContext = TextLineContext;

pumlParser.prototype.textLine = function() {

    var localctx = new TextLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pumlParser.RULE_textLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this.match(pumlParser.TEXT);
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===pumlParser.SPACE) {
                this.state = 31;
                this.match(pumlParser.SPACE);
            }

            this.state = 36; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===pumlParser.TEXT);
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
