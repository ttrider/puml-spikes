// Generated from /Volumes/v/github/puml/spikes/model/puml.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by puml.

function pumlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

pumlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
pumlVisitor.prototype.constructor = pumlVisitor;

// Visit a parse tree produced by puml#document.
pumlVisitor.prototype.visitDocument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#diagram.
pumlVisitor.prototype.visitDiagram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#startUml.
pumlVisitor.prototype.visitStartUml = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#startUmlName.
pumlVisitor.prototype.visitStartUmlName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#endUml.
pumlVisitor.prototype.visitEndUml = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#diagramItem.
pumlVisitor.prototype.visitDiagramItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#color.
pumlVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#emptyLine.
pumlVisitor.prototype.visitEmptyLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#identifier.
pumlVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#simpleIdentifier.
pumlVisitor.prototype.visitSimpleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#quotedIdentifier.
pumlVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#eolText.
pumlVisitor.prototype.visitEolText = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlVisitor = pumlVisitor;