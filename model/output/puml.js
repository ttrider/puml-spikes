// Generated from /Volumes/v/github/puml/spikes/model/puml.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pumlListener = require('./pumlListener').pumlListener;
var pumlVisitor = require('./pumlVisitor').pumlVisitor;

var grammarFileName = "puml.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000eR\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e\u0002\u001d",
    "\u0003\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003\u000e\u0003%",
    "\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003)\n\u0003\f\u0003\u000e",
    "\u0003,\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0005\n=\n\n\u0003\u000b\u0003",
    "\u000b\u0007\u000bA\n\u000b\f\u000b\u000e\u000bD\u000b\u000b\u0003\f",
    "\u0003\f\u0003\f\u0007\fI\n\f\f\f\u000e\fL\u000b\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u0002\u0005\u0003\u0002\u0007\b\u0003\u0002",
    "\t\n\u0003\u0002\r\r\u0002L\u0002\u001b\u0003\u0002\u0002\u0002\u0004",
    "\u001f\u0003\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b0\u0003",
    "\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002\f4\u0003\u0002\u0002\u0002",
    "\u000e6\u0003\u0002\u0002\u0002\u00108\u0003\u0002\u0002\u0002\u0012",
    "<\u0003\u0002\u0002\u0002\u0014>\u0003\u0002\u0002\u0002\u0016E\u0003",
    "\u0002\u0002\u0002\u0018O\u0003\u0002\u0002\u0002\u001a\u001c\u0005",
    "\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003",
    "\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003",
    "\u0002\u0002\u0002\u001e\u0003\u0003\u0002\u0002\u0002\u001f#\u0005",
    "\u0006\u0004\u0002 \"\u0005\f\u0007\u0002! \u0003\u0002\u0002\u0002",
    "\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$&\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&*\u0005",
    "\n\u0006\u0002\')\u0007\t\u0002\u0002(\'\u0003\u0002\u0002\u0002),\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+\u0005\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002-.\u0007\u0003",
    "\u0002\u0002./\u0005\b\u0005\u0002/\u0007\u0003\u0002\u0002\u000201",
    "\u0007\u000b\u0002\u00021\t\u0003\u0002\u0002\u000223\u0007\u0004\u0002",
    "\u00023\u000b\u0003\u0002\u0002\u000245\u0005\u0010\t\u00025\r\u0003",
    "\u0002\u0002\u000267\t\u0002\u0002\u00027\u000f\u0003\u0002\u0002\u0002",
    "89\t\u0003\u0002\u00029\u0011\u0003\u0002\u0002\u0002:=\u0005\u0014",
    "\u000b\u0002;=\u0005\u0016\f\u0002<:\u0003\u0002\u0002\u0002<;\u0003",
    "\u0002\u0002\u0002=\u0013\u0003\u0002\u0002\u0002>B\n\u0004\u0002\u0002",
    "?A\n\u0003\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002C\u0015\u0003",
    "\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EJ\u0007\r\u0002\u0002F",
    "I\n\u0004\u0002\u0002GI\u0007\u000e\u0002\u0002HF\u0003\u0002\u0002",
    "\u0002HG\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002",
    "\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002LJ\u0003",
    "\u0002\u0002\u0002MN\u0007\r\u0002\u0002N\u0017\u0003\u0002\u0002\u0002",
    "OP\u0007\f\u0002\u0002P\u0019\u0003\u0002\u0002\u0002\t\u001d#*<BHJ"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "STARTUML", "ENDUML", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "HEX_COLORS", "NAMED_COLORS", 
                      "CRLF", "WSS", "STARTUML_NAME", "EOL_TEXT", "DBLQUOTE", 
                      "ESC_DBLQUOTE" ];

var ruleNames =  [ "document", "diagram", "startUml", "startUmlName", "endUml", 
                   "diagramItem", "color", "emptyLine", "identifier", "simpleIdentifier", 
                   "quotedIdentifier", "eolText" ];

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
puml.HEX_COLORS = 5;
puml.NAMED_COLORS = 6;
puml.CRLF = 7;
puml.WSS = 8;
puml.STARTUML_NAME = 9;
puml.EOL_TEXT = 10;
puml.DBLQUOTE = 11;
puml.ESC_DBLQUOTE = 12;

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
puml.RULE_eolText = 11;

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




puml.DocumentContext = DocumentContext;

puml.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, puml.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 24;
            this.diagram();
            this.state = 27; 
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




puml.DiagramContext = DiagramContext;

puml.prototype.diagram = function() {

    var localctx = new DiagramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, puml.RULE_diagram);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.startUml();
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===puml.CRLF || _la===puml.WSS) {
            this.state = 30;
            this.diagramItem();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 36;
        this.endUml();
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===puml.CRLF) {
            this.state = 37;
            this.match(puml.CRLF);
            this.state = 42;
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




puml.StartUmlContext = StartUmlContext;

puml.prototype.startUml = function() {

    var localctx = new StartUmlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, puml.RULE_startUml);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(puml.STARTUML);
        this.state = 44;
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

StartUmlNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterStartUmlName(this);
	}
};

StartUmlNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitStartUmlName(this);
	}
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
        this.state = 46;
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




puml.EndUmlContext = EndUmlContext;

puml.prototype.endUml = function() {

    var localctx = new EndUmlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, puml.RULE_endUml);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
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




puml.DiagramItemContext = DiagramItemContext;

puml.prototype.diagramItem = function() {

    var localctx = new DiagramItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, puml.RULE_diagramItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.emptyLine();
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




puml.ColorContext = ColorContext;

puml.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, puml.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
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




puml.EmptyLineContext = EmptyLineContext;

puml.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, puml.RULE_emptyLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
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

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitIdentifier(this);
	}
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
        this.state = 58;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case puml.STARTUML:
        case puml.ENDUML:
        case puml.SINGLE_LINE_COMMENT:
        case puml.MULTI_LINE_COMMENT:
        case puml.HEX_COLORS:
        case puml.NAMED_COLORS:
        case puml.CRLF:
        case puml.WSS:
        case puml.STARTUML_NAME:
        case puml.EOL_TEXT:
        case puml.ESC_DBLQUOTE:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.simpleIdentifier();
            break;
        case puml.DBLQUOTE:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
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
    this.ruleIndex = puml.RULE_simpleIdentifier;
    return this;
}

SimpleIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleIdentifierContext.prototype.constructor = SimpleIdentifierContext;

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


SimpleIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterSimpleIdentifier(this);
	}
};

SimpleIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitSimpleIdentifier(this);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        _la = this._input.LA(1);
        if(_la<=0 || _la===puml.DBLQUOTE) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << puml.STARTUML) | (1 << puml.ENDUML) | (1 << puml.SINGLE_LINE_COMMENT) | (1 << puml.MULTI_LINE_COMMENT) | (1 << puml.HEX_COLORS) | (1 << puml.NAMED_COLORS) | (1 << puml.STARTUML_NAME) | (1 << puml.EOL_TEXT) | (1 << puml.DBLQUOTE) | (1 << puml.ESC_DBLQUOTE))) !== 0)) {
            this.state = 61;
            _la = this._input.LA(1);
            if(_la<=0 || _la===puml.CRLF || _la===puml.WSS) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
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


QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitQuotedIdentifier(this);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(puml.DBLQUOTE);
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << puml.STARTUML) | (1 << puml.ENDUML) | (1 << puml.SINGLE_LINE_COMMENT) | (1 << puml.MULTI_LINE_COMMENT) | (1 << puml.HEX_COLORS) | (1 << puml.NAMED_COLORS) | (1 << puml.CRLF) | (1 << puml.WSS) | (1 << puml.STARTUML_NAME) | (1 << puml.EOL_TEXT) | (1 << puml.ESC_DBLQUOTE))) !== 0)) {
            this.state = 70;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
            switch(la_) {
            case 1:
                this.state = 68;
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
                this.state = 69;
                this.match(puml.ESC_DBLQUOTE);
                break;

            }
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 75;
        this.match(puml.DBLQUOTE);
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

EolTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.enterEolText(this);
	}
};

EolTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof pumlListener ) {
        listener.exitEolText(this);
	}
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
    this.enterRule(localctx, 22, puml.RULE_eolText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
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


exports.puml = puml;
