// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserCommon.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by pumlParserCommon.

function pumlParserCommonVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

pumlParserCommonVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
pumlParserCommonVisitor.prototype.constructor = pumlParserCommonVisitor;

// Visit a parse tree produced by pumlParserCommon#color.
pumlParserCommonVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#emptyLine.
pumlParserCommonVisitor.prototype.visitEmptyLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#identifier.
pumlParserCommonVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#simpleIdentifier.
pumlParserCommonVisitor.prototype.visitSimpleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#quotedIdentifier.
pumlParserCommonVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#namedIdentifier.
pumlParserCommonVisitor.prototype.visitNamedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#titleAsIdIdentifier.
pumlParserCommonVisitor.prototype.visitTitleAsIdIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#idAsTitleIdentifier.
pumlParserCommonVisitor.prototype.visitIdAsTitleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserCommon#eolText.
pumlParserCommonVisitor.prototype.visitEolText = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlParserCommonVisitor = pumlParserCommonVisitor;