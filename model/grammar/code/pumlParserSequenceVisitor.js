// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserSequence.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by pumlParserSequence.

function pumlParserSequenceVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

pumlParserSequenceVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
pumlParserSequenceVisitor.prototype.constructor = pumlParserSequenceVisitor;

// Visit a parse tree produced by pumlParserSequence#color.
pumlParserSequenceVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#emptyLine.
pumlParserSequenceVisitor.prototype.visitEmptyLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#identifier.
pumlParserSequenceVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#simpleIdentifier.
pumlParserSequenceVisitor.prototype.visitSimpleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#quotedIdentifier.
pumlParserSequenceVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#namedIdentifier.
pumlParserSequenceVisitor.prototype.visitNamedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#titleAsIdIdentifier.
pumlParserSequenceVisitor.prototype.visitTitleAsIdIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#idAsTitleIdentifier.
pumlParserSequenceVisitor.prototype.visitIdAsTitleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserSequence#eolText.
pumlParserSequenceVisitor.prototype.visitEolText = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlParserSequenceVisitor = pumlParserSequenceVisitor;