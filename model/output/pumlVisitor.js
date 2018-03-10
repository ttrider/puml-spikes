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


// Visit a parse tree produced by pumlParser#diagramItem.
pumlVisitor.prototype.visitDiagramItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#color.
pumlVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#emptyLine.
pumlVisitor.prototype.visitEmptyLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#note.
pumlVisitor.prototype.visitNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#singleLineNote.
pumlVisitor.prototype.visitSingleLineNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#singleLineRNote.
pumlVisitor.prototype.visitSingleLineRNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#singleLineHNote.
pumlVisitor.prototype.visitSingleLineHNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#multiLineNote.
pumlVisitor.prototype.visitMultiLineNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#multiLineRNote.
pumlVisitor.prototype.visitMultiLineRNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#multiLineHNote.
pumlVisitor.prototype.visitMultiLineHNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteLocation.
pumlVisitor.prototype.visitNoteLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteLocationRight.
pumlVisitor.prototype.visitNoteLocationRight = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteLocationLeft.
pumlVisitor.prototype.visitNoteLocationLeft = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteLocationOver.
pumlVisitor.prototype.visitNoteLocationOver = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteTextLine.
pumlVisitor.prototype.visitNoteTextLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteTextLines.
pumlVisitor.prototype.visitNoteTextLines = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#noteAnchor.
pumlVisitor.prototype.visitNoteAnchor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareParticipant.
pumlVisitor.prototype.visitDeclareParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareDefaultParticipant.
pumlVisitor.prototype.visitDeclareDefaultParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareActor.
pumlVisitor.prototype.visitDeclareActor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareBoundary.
pumlVisitor.prototype.visitDeclareBoundary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareControl.
pumlVisitor.prototype.visitDeclareControl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareEntity.
pumlVisitor.prototype.visitDeclareEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareDatabase.
pumlVisitor.prototype.visitDeclareDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#declareCollections.
pumlVisitor.prototype.visitDeclareCollections = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#sequenceMessage.
pumlVisitor.prototype.visitSequenceMessage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#connector.
pumlVisitor.prototype.visitConnector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#connectorSolid.
pumlVisitor.prototype.visitConnectorSolid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#connectorSolidReverse.
pumlVisitor.prototype.visitConnectorSolidReverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#connectorDotted.
pumlVisitor.prototype.visitConnectorDotted = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#connectorDottedReverse.
pumlVisitor.prototype.visitConnectorDottedReverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#participant.
pumlVisitor.prototype.visitParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#identifier.
pumlVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#quotedIdentifier.
pumlVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by pumlParser#messageText.
pumlVisitor.prototype.visitMessageText = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlVisitor = pumlVisitor;