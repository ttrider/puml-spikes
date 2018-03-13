// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7.1
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


// Visit a parse tree produced by puml#endUml.
pumlVisitor.prototype.visitEndUml = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#digramName.
pumlVisitor.prototype.visitDigramName = function(ctx) {
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


// Visit a parse tree produced by puml#note.
pumlVisitor.prototype.visitNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#singleLineNote.
pumlVisitor.prototype.visitSingleLineNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#singleLineRNote.
pumlVisitor.prototype.visitSingleLineRNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#singleLineHNote.
pumlVisitor.prototype.visitSingleLineHNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#multiLineNote.
pumlVisitor.prototype.visitMultiLineNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#multiLineRNote.
pumlVisitor.prototype.visitMultiLineRNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#multiLineHNote.
pumlVisitor.prototype.visitMultiLineHNote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteLocation.
pumlVisitor.prototype.visitNoteLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteLocationRight.
pumlVisitor.prototype.visitNoteLocationRight = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteLocationLeft.
pumlVisitor.prototype.visitNoteLocationLeft = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteLocationOver.
pumlVisitor.prototype.visitNoteLocationOver = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteTextLine.
pumlVisitor.prototype.visitNoteTextLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteTextLines.
pumlVisitor.prototype.visitNoteTextLines = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#noteAnchor.
pumlVisitor.prototype.visitNoteAnchor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareParticipant.
pumlVisitor.prototype.visitDeclareParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareDefaultParticipant.
pumlVisitor.prototype.visitDeclareDefaultParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareActor.
pumlVisitor.prototype.visitDeclareActor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareBoundary.
pumlVisitor.prototype.visitDeclareBoundary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareControl.
pumlVisitor.prototype.visitDeclareControl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareEntity.
pumlVisitor.prototype.visitDeclareEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareDatabase.
pumlVisitor.prototype.visitDeclareDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareCollections.
pumlVisitor.prototype.visitDeclareCollections = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareTitleAsId.
pumlVisitor.prototype.visitDeclareTitleAsId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareIdAsTitle.
pumlVisitor.prototype.visitDeclareIdAsTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareId.
pumlVisitor.prototype.visitDeclareId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareParticipantIdAndTitle.
pumlVisitor.prototype.visitDeclareParticipantIdAndTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#declareOrder.
pumlVisitor.prototype.visitDeclareOrder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#sequenceMessageParticipant.
pumlVisitor.prototype.visitSequenceMessageParticipant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#sequenceMessage.
pumlVisitor.prototype.visitSequenceMessage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#connector.
pumlVisitor.prototype.visitConnector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#connectorSolid.
pumlVisitor.prototype.visitConnectorSolid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#connectorSolidReverse.
pumlVisitor.prototype.visitConnectorSolidReverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#connectorDotted.
pumlVisitor.prototype.visitConnectorDotted = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#connectorDottedReverse.
pumlVisitor.prototype.visitConnectorDottedReverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#identifier.
pumlVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#quotedIdentifier.
pumlVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by puml#messageText.
pumlVisitor.prototype.visitMessageText = function(ctx) {
  return this.visitChildren(ctx);
};



exports.pumlVisitor = pumlVisitor;