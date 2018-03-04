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


// Enter a parse tree produced by pumlParser#noteTextLine.
pumlListener.prototype.enterNoteTextLine = function(ctx) {
};

// Exit a parse tree produced by pumlParser#noteTextLine.
pumlListener.prototype.exitNoteTextLine = function(ctx) {
};



exports.pumlListener = pumlListener;