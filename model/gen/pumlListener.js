// Generated from /Volumes/v/github/puml/spikes/model/puml.g4 by ANTLR 4.7
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



exports.pumlListener = pumlListener;