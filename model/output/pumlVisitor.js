// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by pumlParser.

function pumlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

pumlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
pumlVisitor.prototype.constructor = pumlVisitor;

// Visit a parse tree produced by pumlParser#document.
pumlVisitor.prototype.visitDocument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#diagram.
pumlVisitor.prototype.visitDiagram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#startUml.
pumlVisitor.prototype.visitStartUml = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#endUml.
pumlVisitor.prototype.visitEndUml = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#digramName.
pumlVisitor.prototype.visitDigramName = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlVisitor = pumlVisitor;