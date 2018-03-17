// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserSequence.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by pumlParserSequence.
function pumlParserSequenceListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pumlParserSequenceListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pumlParserSequenceListener.prototype.constructor = pumlParserSequenceListener;

// Enter a parse tree produced by pumlParserSequence#color.
pumlParserSequenceListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#color.
pumlParserSequenceListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#emptyLine.
pumlParserSequenceListener.prototype.enterEmptyLine = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#emptyLine.
pumlParserSequenceListener.prototype.exitEmptyLine = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#identifier.
pumlParserSequenceListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#identifier.
pumlParserSequenceListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#simpleIdentifier.
pumlParserSequenceListener.prototype.enterSimpleIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#simpleIdentifier.
pumlParserSequenceListener.prototype.exitSimpleIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#quotedIdentifier.
pumlParserSequenceListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#quotedIdentifier.
pumlParserSequenceListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#namedIdentifier.
pumlParserSequenceListener.prototype.enterNamedIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#namedIdentifier.
pumlParserSequenceListener.prototype.exitNamedIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#titleAsIdIdentifier.
pumlParserSequenceListener.prototype.enterTitleAsIdIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#titleAsIdIdentifier.
pumlParserSequenceListener.prototype.exitTitleAsIdIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#idAsTitleIdentifier.
pumlParserSequenceListener.prototype.enterIdAsTitleIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#idAsTitleIdentifier.
pumlParserSequenceListener.prototype.exitIdAsTitleIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserSequence#eolText.
pumlParserSequenceListener.prototype.enterEolText = function(ctx) {
};

// Exit a parse tree produced by pumlParserSequence#eolText.
pumlParserSequenceListener.prototype.exitEolText = function(ctx) {
};



exports.pumlParserSequenceListener = pumlParserSequenceListener;