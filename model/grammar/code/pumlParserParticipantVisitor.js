// Generated from /Volumes/v/github/puml/spikes/model/grammar/pumlParserParticipant.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by pumlParserParticipant.

function pumlParserParticipantVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

pumlParserParticipantVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
pumlParserParticipantVisitor.prototype.constructor = pumlParserParticipantVisitor;

// Visit a parse tree produced by pumlParserParticipant#declareParticipant.
pumlParserParticipantVisitor.prototype.visitDeclareParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareDefaultParticipant.
pumlParserParticipantVisitor.prototype.visitDeclareDefaultParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareActor.
pumlParserParticipantVisitor.prototype.visitDeclareActor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareBoundary.
pumlParserParticipantVisitor.prototype.visitDeclareBoundary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareControl.
pumlParserParticipantVisitor.prototype.visitDeclareControl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareEntity.
pumlParserParticipantVisitor.prototype.visitDeclareEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareDatabase.
pumlParserParticipantVisitor.prototype.visitDeclareDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareCollections.
pumlParserParticipantVisitor.prototype.visitDeclareCollections = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#declareOrder.
pumlParserParticipantVisitor.prototype.visitDeclareOrder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#color.
pumlParserParticipantVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#emptyLine.
pumlParserParticipantVisitor.prototype.visitEmptyLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#identifier.
pumlParserParticipantVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#simpleIdentifier.
pumlParserParticipantVisitor.prototype.visitSimpleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#quotedIdentifier.
pumlParserParticipantVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#namedIdentifier.
pumlParserParticipantVisitor.prototype.visitNamedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#titleAsIdIdentifier.
pumlParserParticipantVisitor.prototype.visitTitleAsIdIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#idAsTitleIdentifier.
pumlParserParticipantVisitor.prototype.visitIdAsTitleIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParserParticipant#eolText.
pumlParserParticipantVisitor.prototype.visitEolText = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlParserParticipantVisitor = pumlParserParticipantVisitor;