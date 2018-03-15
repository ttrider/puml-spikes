// Generated from /Volumes/v/github/puml/spikes/model/puml.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by puml.
function pumlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pumlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pumlListener.prototype.constructor = pumlListener;

// Enter a parse tree produced by puml#document.
pumlListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by puml#document.
pumlListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by puml#diagram.
pumlListener.prototype.enterDiagram = function(ctx) {
};

// Exit a parse tree produced by puml#diagram.
pumlListener.prototype.exitDiagram = function(ctx) {
};


// Enter a parse tree produced by puml#startUml.
pumlListener.prototype.enterStartUml = function(ctx) {
};

// Exit a parse tree produced by puml#startUml.
pumlListener.prototype.exitStartUml = function(ctx) {
};


// Enter a parse tree produced by puml#startUmlName.
pumlListener.prototype.enterStartUmlName = function(ctx) {
};

// Exit a parse tree produced by puml#startUmlName.
pumlListener.prototype.exitStartUmlName = function(ctx) {
};


// Enter a parse tree produced by puml#endUml.
pumlListener.prototype.enterEndUml = function(ctx) {
};

// Exit a parse tree produced by puml#endUml.
pumlListener.prototype.exitEndUml = function(ctx) {
};


// Enter a parse tree produced by puml#diagramItem.
pumlListener.prototype.enterDiagramItem = function(ctx) {
};

// Exit a parse tree produced by puml#diagramItem.
pumlListener.prototype.exitDiagramItem = function(ctx) {
};


// Enter a parse tree produced by puml#color.
pumlListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by puml#color.
pumlListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by puml#emptyLine.
pumlListener.prototype.enterEmptyLine = function(ctx) {
};

// Exit a parse tree produced by puml#emptyLine.
pumlListener.prototype.exitEmptyLine = function(ctx) {
};


// Enter a parse tree produced by puml#identifier.
pumlListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#identifier.
pumlListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#simpleIdentifier.
pumlListener.prototype.enterSimpleIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#simpleIdentifier.
pumlListener.prototype.exitSimpleIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#quotedIdentifier.
pumlListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#quotedIdentifier.
pumlListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#eolText.
pumlListener.prototype.enterEolText = function(ctx) {
};

// Exit a parse tree produced by puml#eolText.
pumlListener.prototype.exitEolText = function(ctx) {
};



exports.pumlListener = pumlListener;