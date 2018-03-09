// Generated from /Users/vladimiryangurskiy/src/puml/spikes/model/puml.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by pumlParser.
function pumlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

pumlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
pumlListener.prototype.constructor = pumlListener;

// Enter a parse tree produced by pumlParser#document.
pumlListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by pumlParser#document.
pumlListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by pumlParser#diagram.
pumlListener.prototype.enterDiagram = function(ctx) {
};

// Exit a parse tree produced by pumlParser#diagram.
pumlListener.prototype.exitDiagram = function(ctx) {
};


// Enter a parse tree produced by pumlParser#startUml.
pumlListener.prototype.enterStartUml = function(ctx) {
};

// Exit a parse tree produced by pumlParser#startUml.
pumlListener.prototype.exitStartUml = function(ctx) {
};


// Enter a parse tree produced by pumlParser#endUml.
pumlListener.prototype.enterEndUml = function(ctx) {
};

// Exit a parse tree produced by pumlParser#endUml.
pumlListener.prototype.exitEndUml = function(ctx) {
};


// Enter a parse tree produced by pumlParser#digramName.
pumlListener.prototype.enterDigramName = function(ctx) {
};

// Exit a parse tree produced by pumlParser#digramName.
pumlListener.prototype.exitDigramName = function(ctx) {
};


// Enter a parse tree produced by pumlParser#diagramItem.
pumlListener.prototype.enterDiagramItem = function(ctx) {
};

// Exit a parse tree produced by pumlParser#diagramItem.
pumlListener.prototype.exitDiagramItem = function(ctx) {
};


// Enter a parse tree produced by pumlParser#color.
pumlListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by pumlParser#color.
pumlListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by pumlParser#emptyLine.
pumlListener.prototype.enterEmptyLine = function(ctx) {
};

// Exit a parse tree produced by pumlParser#emptyLine.
pumlListener.prototype.exitEmptyLine = function(ctx) {
};


// Enter a parse tree produced by pumlParser#note.
pumlListener.prototype.enterNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#note.
pumlListener.prototype.exitNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#singleLineNote.
pumlListener.prototype.enterSingleLineNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#singleLineNote.
pumlListener.prototype.exitSingleLineNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#singleLineRNote.
pumlListener.prototype.enterSingleLineRNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#singleLineRNote.
pumlListener.prototype.exitSingleLineRNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#singleLineHNote.
pumlListener.prototype.enterSingleLineHNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#singleLineHNote.
pumlListener.prototype.exitSingleLineHNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#multiLineNote.
pumlListener.prototype.enterMultiLineNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#multiLineNote.
pumlListener.prototype.exitMultiLineNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#multiLineRNote.
pumlListener.prototype.enterMultiLineRNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#multiLineRNote.
pumlListener.prototype.exitMultiLineRNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#multiLineHNote.
pumlListener.prototype.enterMultiLineHNote = function(ctx) {
};

// Exit a parse tree produced by pumlParser#multiLineHNote.
pumlListener.prototype.exitMultiLineHNote = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteLocation.
pumlListener.prototype.enterNoteLocation = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteLocation.
pumlListener.prototype.exitNoteLocation = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteLocationRight.
pumlListener.prototype.enterNoteLocationRight = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteLocationRight.
pumlListener.prototype.exitNoteLocationRight = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteLocationLeft.
pumlListener.prototype.enterNoteLocationLeft = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteLocationLeft.
pumlListener.prototype.exitNoteLocationLeft = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteLocationOver.
pumlListener.prototype.enterNoteLocationOver = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteLocationOver.
pumlListener.prototype.exitNoteLocationOver = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteTextLine.
pumlListener.prototype.enterNoteTextLine = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteTextLine.
pumlListener.prototype.exitNoteTextLine = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteTextLines.
pumlListener.prototype.enterNoteTextLines = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteTextLines.
pumlListener.prototype.exitNoteTextLines = function(ctx) {
};


// Enter a parse tree produced by pumlParser#noteAnchor.
pumlListener.prototype.enterNoteAnchor = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteAnchor.
pumlListener.prototype.exitNoteAnchor = function(ctx) {
};


// Enter a parse tree produced by pumlParser#sequenceMessage.
pumlListener.prototype.enterSequenceMessage = function(ctx) {
};

// Exit a parse tree produced by pumlParser#sequenceMessage.
pumlListener.prototype.exitSequenceMessage = function(ctx) {
};


// Enter a parse tree produced by pumlParser#connector.
pumlListener.prototype.enterConnector = function(ctx) {
};

// Exit a parse tree produced by pumlParser#connector.
pumlListener.prototype.exitConnector = function(ctx) {
};


// Enter a parse tree produced by pumlParser#connectorSolid.
pumlListener.prototype.enterConnectorSolid = function(ctx) {
};

// Exit a parse tree produced by pumlParser#connectorSolid.
pumlListener.prototype.exitConnectorSolid = function(ctx) {
};


// Enter a parse tree produced by pumlParser#connectorSolidReverse.
pumlListener.prototype.enterConnectorSolidReverse = function(ctx) {
};

// Exit a parse tree produced by pumlParser#connectorSolidReverse.
pumlListener.prototype.exitConnectorSolidReverse = function(ctx) {
};


// Enter a parse tree produced by pumlParser#connectorDotted.
pumlListener.prototype.enterConnectorDotted = function(ctx) {
};

// Exit a parse tree produced by pumlParser#connectorDotted.
pumlListener.prototype.exitConnectorDotted = function(ctx) {
};


// Enter a parse tree produced by pumlParser#connectorDottedReverse.
pumlListener.prototype.enterConnectorDottedReverse = function(ctx) {
};

// Exit a parse tree produced by pumlParser#connectorDottedReverse.
pumlListener.prototype.exitConnectorDottedReverse = function(ctx) {
};


// Enter a parse tree produced by pumlParser#participant.
pumlListener.prototype.enterParticipant = function(ctx) {
};

// Exit a parse tree produced by pumlParser#participant.
pumlListener.prototype.exitParticipant = function(ctx) {
};


// Enter a parse tree produced by pumlParser#messageText.
pumlListener.prototype.enterMessageText = function(ctx) {
};

// Exit a parse tree produced by pumlParser#messageText.
pumlListener.prototype.exitMessageText = function(ctx) {
};



exports.pumlListener = pumlListener;