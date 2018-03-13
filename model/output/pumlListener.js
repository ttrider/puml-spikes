// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7.1
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


// Enter a parse tree produced by puml#endUml.
pumlListener.prototype.enterEndUml = function(ctx) {
};

// Exit a parse tree produced by puml#endUml.
pumlListener.prototype.exitEndUml = function(ctx) {
};


// Enter a parse tree produced by puml#digramName.
pumlListener.prototype.enterDigramName = function(ctx) {
};

// Exit a parse tree produced by puml#digramName.
pumlListener.prototype.exitDigramName = function(ctx) {
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


// Enter a parse tree produced by puml#note.
pumlListener.prototype.enterNote = function(ctx) {
};

// Exit a parse tree produced by puml#note.
pumlListener.prototype.exitNote = function(ctx) {
};


// Enter a parse tree produced by puml#singleLineNote.
pumlListener.prototype.enterSingleLineNote = function(ctx) {
};

// Exit a parse tree produced by puml#singleLineNote.
pumlListener.prototype.exitSingleLineNote = function(ctx) {
};


// Enter a parse tree produced by puml#singleLineRNote.
pumlListener.prototype.enterSingleLineRNote = function(ctx) {
};

// Exit a parse tree produced by puml#singleLineRNote.
pumlListener.prototype.exitSingleLineRNote = function(ctx) {
};


// Enter a parse tree produced by puml#singleLineHNote.
pumlListener.prototype.enterSingleLineHNote = function(ctx) {
};

// Exit a parse tree produced by puml#singleLineHNote.
pumlListener.prototype.exitSingleLineHNote = function(ctx) {
};


// Enter a parse tree produced by puml#multiLineNote.
pumlListener.prototype.enterMultiLineNote = function(ctx) {
};

// Exit a parse tree produced by puml#multiLineNote.
pumlListener.prototype.exitMultiLineNote = function(ctx) {
};


// Enter a parse tree produced by puml#multiLineRNote.
pumlListener.prototype.enterMultiLineRNote = function(ctx) {
};

// Exit a parse tree produced by puml#multiLineRNote.
pumlListener.prototype.exitMultiLineRNote = function(ctx) {
};


// Enter a parse tree produced by puml#multiLineHNote.
pumlListener.prototype.enterMultiLineHNote = function(ctx) {
};

// Exit a parse tree produced by puml#multiLineHNote.
pumlListener.prototype.exitMultiLineHNote = function(ctx) {
};


// Enter a parse tree produced by puml#noteLocation.
pumlListener.prototype.enterNoteLocation = function(ctx) {
};

// Exit a parse tree produced by puml#noteLocation.
pumlListener.prototype.exitNoteLocation = function(ctx) {
};


// Enter a parse tree produced by puml#noteLocationRight.
pumlListener.prototype.enterNoteLocationRight = function(ctx) {
};

// Exit a parse tree produced by puml#noteLocationRight.
pumlListener.prototype.exitNoteLocationRight = function(ctx) {
};


// Enter a parse tree produced by puml#noteLocationLeft.
pumlListener.prototype.enterNoteLocationLeft = function(ctx) {
};

// Exit a parse tree produced by puml#noteLocationLeft.
pumlListener.prototype.exitNoteLocationLeft = function(ctx) {
};


// Enter a parse tree produced by puml#noteLocationOver.
pumlListener.prototype.enterNoteLocationOver = function(ctx) {
};

// Exit a parse tree produced by puml#noteLocationOver.
pumlListener.prototype.exitNoteLocationOver = function(ctx) {
};


// Enter a parse tree produced by puml#noteTextLine.
pumlListener.prototype.enterNoteTextLine = function(ctx) {
};

// Exit a parse tree produced by puml#noteTextLine.
pumlListener.prototype.exitNoteTextLine = function(ctx) {
};


// Enter a parse tree produced by puml#noteTextLines.
pumlListener.prototype.enterNoteTextLines = function(ctx) {
};

// Exit a parse tree produced by puml#noteTextLines.
pumlListener.prototype.exitNoteTextLines = function(ctx) {
};


// Enter a parse tree produced by puml#noteAnchor.
pumlListener.prototype.enterNoteAnchor = function(ctx) {
};

// Exit a parse tree produced by puml#noteAnchor.
pumlListener.prototype.exitNoteAnchor = function(ctx) {
};


// Enter a parse tree produced by puml#declareParticipant.
pumlListener.prototype.enterDeclareParticipant = function(ctx) {
};

// Exit a parse tree produced by puml#declareParticipant.
pumlListener.prototype.exitDeclareParticipant = function(ctx) {
};


// Enter a parse tree produced by puml#declareDefaultParticipant.
pumlListener.prototype.enterDeclareDefaultParticipant = function(ctx) {
};

// Exit a parse tree produced by puml#declareDefaultParticipant.
pumlListener.prototype.exitDeclareDefaultParticipant = function(ctx) {
};


// Enter a parse tree produced by puml#declareActor.
pumlListener.prototype.enterDeclareActor = function(ctx) {
};

// Exit a parse tree produced by puml#declareActor.
pumlListener.prototype.exitDeclareActor = function(ctx) {
};


// Enter a parse tree produced by puml#declareBoundary.
pumlListener.prototype.enterDeclareBoundary = function(ctx) {
};

// Exit a parse tree produced by puml#declareBoundary.
pumlListener.prototype.exitDeclareBoundary = function(ctx) {
};


// Enter a parse tree produced by puml#declareControl.
pumlListener.prototype.enterDeclareControl = function(ctx) {
};

// Exit a parse tree produced by puml#declareControl.
pumlListener.prototype.exitDeclareControl = function(ctx) {
};


// Enter a parse tree produced by puml#declareEntity.
pumlListener.prototype.enterDeclareEntity = function(ctx) {
};

// Exit a parse tree produced by puml#declareEntity.
pumlListener.prototype.exitDeclareEntity = function(ctx) {
};


// Enter a parse tree produced by puml#declareDatabase.
pumlListener.prototype.enterDeclareDatabase = function(ctx) {
};

// Exit a parse tree produced by puml#declareDatabase.
pumlListener.prototype.exitDeclareDatabase = function(ctx) {
};


// Enter a parse tree produced by puml#declareCollections.
pumlListener.prototype.enterDeclareCollections = function(ctx) {
};

// Exit a parse tree produced by puml#declareCollections.
pumlListener.prototype.exitDeclareCollections = function(ctx) {
};


// Enter a parse tree produced by puml#declareTitleAsId.
pumlListener.prototype.enterDeclareTitleAsId = function(ctx) {
};

// Exit a parse tree produced by puml#declareTitleAsId.
pumlListener.prototype.exitDeclareTitleAsId = function(ctx) {
};


// Enter a parse tree produced by puml#declareIdAsTitle.
pumlListener.prototype.enterDeclareIdAsTitle = function(ctx) {
};

// Exit a parse tree produced by puml#declareIdAsTitle.
pumlListener.prototype.exitDeclareIdAsTitle = function(ctx) {
};


// Enter a parse tree produced by puml#declareId.
pumlListener.prototype.enterDeclareId = function(ctx) {
};

// Exit a parse tree produced by puml#declareId.
pumlListener.prototype.exitDeclareId = function(ctx) {
};


// Enter a parse tree produced by puml#declareParticipantIdAndTitle.
pumlListener.prototype.enterDeclareParticipantIdAndTitle = function(ctx) {
};

// Exit a parse tree produced by puml#declareParticipantIdAndTitle.
pumlListener.prototype.exitDeclareParticipantIdAndTitle = function(ctx) {
};


// Enter a parse tree produced by puml#declareOrder.
pumlListener.prototype.enterDeclareOrder = function(ctx) {
};

// Exit a parse tree produced by puml#declareOrder.
pumlListener.prototype.exitDeclareOrder = function(ctx) {
};


// Enter a parse tree produced by puml#sequenceMessageParticipant.
pumlListener.prototype.enterSequenceMessageParticipant = function(ctx) {
};

// Exit a parse tree produced by puml#sequenceMessageParticipant.
pumlListener.prototype.exitSequenceMessageParticipant = function(ctx) {
};


// Enter a parse tree produced by puml#sequenceMessage.
pumlListener.prototype.enterSequenceMessage = function(ctx) {
};

// Exit a parse tree produced by puml#sequenceMessage.
pumlListener.prototype.exitSequenceMessage = function(ctx) {
};


// Enter a parse tree produced by puml#connector.
pumlListener.prototype.enterConnector = function(ctx) {
};

// Exit a parse tree produced by puml#connector.
pumlListener.prototype.exitConnector = function(ctx) {
};


// Enter a parse tree produced by puml#connectorSolid.
pumlListener.prototype.enterConnectorSolid = function(ctx) {
};

// Exit a parse tree produced by puml#connectorSolid.
pumlListener.prototype.exitConnectorSolid = function(ctx) {
};


// Enter a parse tree produced by puml#connectorSolidReverse.
pumlListener.prototype.enterConnectorSolidReverse = function(ctx) {
};

// Exit a parse tree produced by puml#connectorSolidReverse.
pumlListener.prototype.exitConnectorSolidReverse = function(ctx) {
};


// Enter a parse tree produced by puml#connectorDotted.
pumlListener.prototype.enterConnectorDotted = function(ctx) {
};

// Exit a parse tree produced by puml#connectorDotted.
pumlListener.prototype.exitConnectorDotted = function(ctx) {
};


// Enter a parse tree produced by puml#connectorDottedReverse.
pumlListener.prototype.enterConnectorDottedReverse = function(ctx) {
};

// Exit a parse tree produced by puml#connectorDottedReverse.
pumlListener.prototype.exitConnectorDottedReverse = function(ctx) {
};


// Enter a parse tree produced by puml#identifier.
pumlListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#identifier.
pumlListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#quotedIdentifier.
pumlListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#quotedIdentifier.
pumlListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#messageText.
pumlListener.prototype.enterMessageText = function(ctx) {
};

// Exit a parse tree produced by puml#messageText.
pumlListener.prototype.exitMessageText = function(ctx) {
};



exports.pumlListener = pumlListener;