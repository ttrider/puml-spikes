// Generated from /Volumes/v/github/puml/spikes/model/grammar/puml.g4 by ANTLR 4.7.1
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


// Enter a parse tree produced by puml#startUmlName.
pumlListener.prototype.enterStartUmlName = function(ctx) {
};

// Exit a parse tree produced by puml#startUmlName.
pumlListener.prototype.exitStartUmlName = function(ctx) {
};


// Enter a parse tree produced by puml#endUml.
pumlListener.prototype.enterEndUml = function(ctx) {
};

// Exit a parse tree produced by puml#endUml.
pumlListener.prototype.exitEndUml = function(ctx) {
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


// Enter a parse tree produced by puml#identifier.
pumlListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#identifier.
pumlListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#simpleIdentifier.
pumlListener.prototype.enterSimpleIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#simpleIdentifier.
pumlListener.prototype.exitSimpleIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#quotedIdentifier.
pumlListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#quotedIdentifier.
pumlListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#namedIdentifier.
pumlListener.prototype.enterNamedIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#namedIdentifier.
pumlListener.prototype.exitNamedIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#titleAsIdIdentifier.
pumlListener.prototype.enterTitleAsIdIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#titleAsIdIdentifier.
pumlListener.prototype.exitTitleAsIdIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#idAsTitleIdentifier.
pumlListener.prototype.enterIdAsTitleIdentifier = function(ctx) {
};

// Exit a parse tree produced by puml#idAsTitleIdentifier.
pumlListener.prototype.exitIdAsTitleIdentifier = function(ctx) {
};


// Enter a parse tree produced by puml#eolText.
pumlListener.prototype.enterEolText = function(ctx) {
};

// Exit a parse tree produced by puml#eolText.
pumlListener.prototype.exitEolText = function(ctx) {
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


// Enter a parse tree produced by puml#declareOrder.
pumlListener.prototype.enterDeclareOrder = function(ctx) {
};

// Exit a parse tree produced by puml#declareOrder.
pumlListener.prototype.exitDeclareOrder = function(ctx) {
};



exports.pumlListener = pumlListener;