// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserCommon.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by pumlParserCommon.
function pumlParserCommonListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pumlParserCommonListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pumlParserCommonListener.prototype.constructor = pumlParserCommonListener;

// Enter a parse tree produced by pumlParserCommon#color.
pumlParserCommonListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#color.
pumlParserCommonListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#emptyLine.
pumlParserCommonListener.prototype.enterEmptyLine = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#emptyLine.
pumlParserCommonListener.prototype.exitEmptyLine = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#identifier.
pumlParserCommonListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#identifier.
pumlParserCommonListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#simpleIdentifier.
pumlParserCommonListener.prototype.enterSimpleIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#simpleIdentifier.
pumlParserCommonListener.prototype.exitSimpleIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#quotedIdentifier.
pumlParserCommonListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#quotedIdentifier.
pumlParserCommonListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#namedIdentifier.
pumlParserCommonListener.prototype.enterNamedIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#namedIdentifier.
pumlParserCommonListener.prototype.exitNamedIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#titleAsIdIdentifier.
pumlParserCommonListener.prototype.enterTitleAsIdIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#titleAsIdIdentifier.
pumlParserCommonListener.prototype.exitTitleAsIdIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#idAsTitleIdentifier.
pumlParserCommonListener.prototype.enterIdAsTitleIdentifier = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#idAsTitleIdentifier.
pumlParserCommonListener.prototype.exitIdAsTitleIdentifier = function(ctx) {
};


// Enter a parse tree produced by pumlParserCommon#eolText.
pumlParserCommonListener.prototype.enterEolText = function(ctx) {
};

// Exit a parse tree produced by pumlParserCommon#eolText.
pumlParserCommonListener.prototype.exitEolText = function(ctx) {
};



exports.pumlParserCommonListener = pumlParserCommonListener;