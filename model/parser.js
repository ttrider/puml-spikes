"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4 = require('antlr4/index');
var pumlLexer = require('./output/pumlLexer');
var pumlParser = require('./output/pumlParser');
var pumlVisitor = require('./output/pumlVisitor');
var document_1 = require("./document");
function parse(diagram) {
    //  printTokens(diagram);
    var chars = new antlr4.InputStream(diagram);
    // adding extra CRLF at the end, if it is not there
    if (chars.data[chars.size - 1] != 10) {
        chars.data.push(10);
        chars._size++;
    }
    var lexer = new pumlLexer.pumlLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new pumlParser.pumlParser(tokens);
    parser.buildParseTrees = true;
    var start = parser.document();
    var visitor = new pumlVisitor2();
    return visitor.visit(start);
}
exports.parse = parse;
function printTokens(input) {
    console.info("==========");
    console.info(input);
    console.info("~~~~~~~~~~");
    var chars = new antlr4.InputStream(input);
    var lexer = new pumlLexer.pumlLexer(chars);
    var token = lexer.nextToken();
    while (token.type != -1) {
        console.info(pumlLexer.pumlLexer.prototype.symbolicNames[token.type]);
        console.info(token.text);
        token = lexer.nextToken();
    }
    console.info("~~~~~~~~~~");
}
var pumlVisitor2 = /** @class */ (function (_super) {
    __extends(pumlVisitor2, _super);
    function pumlVisitor2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pumlVisitor2.prototype.getTextToEOL = function (ctx) {
        var value = ctx.getText();
        if (value) {
            value = value.trim();
        }
        return value;
    };
    pumlVisitor2.prototype.visitDocument = function (ctx) {
        var doc = new document_1.Document();
        for (var _i = 0, _a = this.visitChildren(ctx); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                if (item.diagram) {
                    doc.diagrams.push(item.diagram);
                }
            }
        }
        return doc;
    };
    ;
    pumlVisitor2.prototype.processResults = function (result, handler) {
        if (!result) {
            return;
        }
        if (Array.isArray(result)) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var item = result_1[_i];
                this.processResults(item, handler);
            }
        }
        else {
            handler(result);
        }
    };
    // Visit a parse tree produced by pumlParser#diagram.
    pumlVisitor2.prototype.visitDiagram = function (ctx) {
        var diagram = new document_1.Diagram();
        var participants = 0;
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.diagramName) {
                diagram.name = item.diagramName;
            }
            else if (item.note) {
                diagram.items.push(item.note);
            }
            else if (item.sequenceMessage) {
                diagram.items.push(item.sequenceMessage);
                if (item.sequenceMessage.connector) {
                    var connector = item.sequenceMessage.connector;
                    diagram.addParticipant(new document_1.Participant(participants++, connector.source));
                    diagram.addParticipant(new document_1.Participant(participants++, connector.target));
                }
            }
            else if (item.declareParticipant) {
                diagram.addParticipant(item.declareParticipant);
            }
        });
        return { diagram: diagram };
    };
    ;
    pumlVisitor2.prototype.visitStartUml = function (ctx) {
        var txt = ctx.getText();
        //strip @startuml
        if (txt.length > 9) {
            return {
                diagramName: txt.substr(9).trim()
            };
        }
        return {};
    };
    ;
    pumlVisitor2.prototype.visitEndUml = function (ctx) {
        return null;
    };
    ;
    pumlVisitor2.prototype.visitDiagramItem = function (ctx) {
        return this.visitChildren(ctx);
    };
    ;
    pumlVisitor2.prototype.visitColor = function (ctx) {
        var color = ctx.getText();
        if (color) {
            return {
                color: color.toLowerCase()
            };
        }
        return null;
    };
    ;
    // Visit a parse tree produced by pumlParser#note.
    pumlVisitor2.prototype.visitNote = function (ctx) {
        var note = new document_1.Note();
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.noteLocation) {
                note.location = item.noteLocation;
            }
            if (item.noteContent) {
                note.content = item.noteContent;
            }
            if (item.color) {
                note.color = item.color;
            }
            if (item.shape) {
                note.shape = item.shape;
            }
            if (item.anchor) {
                if (note.anchors) {
                    note.anchors.push(item.anchor);
                }
                else {
                    note.anchors = [item.anchor];
                }
            }
        });
        return { note: note };
    };
    ;
    // Visit a parse tree produced by pumlParser#singleLineNote.
    pumlVisitor2.prototype.visitSingleLineNote = function (ctx) {
        var ch = this.visitChildren(ctx);
        return ch;
    };
    ;
    pumlVisitor2.prototype.visitSingleLineRNote = function (ctx) {
        var ch = this.visitChildren(ctx);
        ch.push({
            shape: "rectangle"
        });
        return ch;
    };
    ;
    pumlVisitor2.prototype.visitSingleLineHNote = function (ctx) {
        var ch = this.visitChildren(ctx);
        ch.push({
            shape: "hexagon"
        });
        return ch;
    };
    ;
    pumlVisitor2.prototype.visitMultiLineNote = function (ctx) {
        var ch = this.visitChildren(ctx);
        return ch;
    };
    ;
    // Visit a parse tree produced by pumlParser#multiLineRNote.
    pumlVisitor2.prototype.visitMultiLineRNote = function (ctx) {
        var ch = this.visitChildren(ctx);
        ch.push({
            shape: "rectangle"
        });
        return ch;
    };
    ;
    // Visit a parse tree produced by pumlParser#multiLineHNote.
    pumlVisitor2.prototype.visitMultiLineHNote = function (ctx) {
        var ch = this.visitChildren(ctx);
        ch.push({
            shape: "hexagon"
        });
        return ch;
    };
    ;
    // Visit a parse tree produced by pumlParser#noteLocation.
    pumlVisitor2.prototype.visitNoteLocation = function (ctx) {
        return this.visitChildren(ctx);
    };
    ;
    // Visit a parse tree produced by pumlParser#noteLocationRight.
    pumlVisitor2.prototype.visitNoteLocationRight = function (ctx) {
        return {
            noteLocation: "Right"
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#noteLocationLeft.
    pumlVisitor2.prototype.visitNoteLocationLeft = function (ctx) {
        return {
            noteLocation: "Left"
        };
    };
    ;
    pumlVisitor2.prototype.visitNoteLocationOver = function (ctx) {
        return {
            noteLocation: "Over"
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#noteTextLine.
    pumlVisitor2.prototype.visitNoteTextLine = function (ctx) {
        return {
            noteContent: this.getTextToEOL(ctx)
        };
    };
    ;
    pumlVisitor2.prototype.visitNoteTextLines = function (ctx) {
        return {
            noteContent: ctx.getText()
        };
    };
    ;
    pumlVisitor2.prototype.visitNoteAnchor = function (ctx) {
        var anchor = ctx.getText();
        if (anchor) {
            return {
                anchor: anchor.trim()
            };
        }
        return null;
    };
    ;
    pumlVisitor2.prototype.visitDeclareParticipant = function (ctx) {
        var p = new document_1.Participant(0, "");
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.id) {
                p.id = item.id;
            }
            if (item.participantId) {
                p.id = item.participantId;
            }
            if (item.title) {
                p.title = item.title;
            }
            if (item.style) {
                p.style = item.style;
            }
            if (item.color) {
                p.color = item.color;
            }
        });
        return {
            declareParticipant: p
        };
    };
    ;
    pumlVisitor2.prototype.visitDeclareDefaultParticipant = function (ctx) {
        return { style: "default" };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareActor.
    pumlVisitor2.prototype.visitDeclareActor = function (ctx) {
        return { style: "actor" };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareBoundary.
    pumlVisitor2.prototype.visitDeclareBoundary = function (ctx) {
        return { style: "boundary" };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareControl.
    pumlVisitor2.prototype.visitDeclareControl = function (ctx) {
        return { style: "control" };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareEntity.
    pumlVisitor2.prototype.visitDeclareEntity = function (ctx) {
        return { style: "entity" };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareDatabase.
    pumlVisitor2.prototype.visitDeclareDatabase = function (ctx) {
        return { style: "database" };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareCollections.
    pumlVisitor2.prototype.visitDeclareCollections = function (ctx) {
        return { style: "collections" };
    };
    ;
    pumlVisitor2.prototype.visitSequenceMessage = function (ctx) {
        var msg = new document_1.SequenceMessage();
        var participants = [];
        var connector;
        var reversed = false;
        var text = "";
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.participantId) {
                participants.push(item.participantId);
            }
            if (item.connector) {
                connector = item.connector;
            }
            if (item.reversed) {
                reversed = item.reversed;
            }
            if (item.text) {
                text = item.text;
            }
        });
        if (participants.length < 2) {
            throw "Invalid Sequence";
        }
        if (connector === undefined) {
            throw "Invalid Sequence";
        }
        if (reversed) {
            connector.source = participants[1];
            connector.target = participants[0];
        }
        else {
            connector.source = participants[0];
            connector.target = participants[1];
        }
        if (text) {
            connector.text = text;
        }
        msg.connector = connector;
        return { sequenceMessage: msg };
    };
    ;
    // Visit a parse tree produced by pumlParser#connector.
    pumlVisitor2.prototype.visitConnector = function (ctx) {
        var connector = new document_1.Connector();
        var reversed = false;
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.style) {
                connector.style = item.style;
            }
            if (item.reversed) {
                reversed = item.reversed;
            }
        });
        return { connector: connector, reversed: reversed };
    };
    ;
    // Visit a parse tree produced by pumlParser#connectorSolidLeft.
    pumlVisitor2.prototype.visitConnectorSolid = function (ctx) {
        return {
            style: "solid"
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#connectorSolidRight.
    pumlVisitor2.prototype.visitConnectorSolidReverse = function (ctx) {
        return {
            reversed: true,
            style: "solid"
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#connectorDottedLeft.
    pumlVisitor2.prototype.visitConnectorDotted = function (ctx) {
        return {
            style: "dotted"
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#connectorDottedRight.
    pumlVisitor2.prototype.visitConnectorDottedReverse = function (ctx) {
        return {
            reversed: true,
            style: "dotted"
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#simpleParticipant.
    pumlVisitor2.prototype.visitParticipant = function (ctx) {
        var ret = {};
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.identifier) {
                ret.participantId = item.identifier;
            }
        });
        return ret;
    };
    ;
    pumlVisitor2.prototype.visitDeclareTitleAsId = function (ctx) {
        var data = [];
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });
        return {
            title: data[0],
            id: data[1]
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareIdAsTitle.
    pumlVisitor2.prototype.visitDeclareIdAsTitle = function (ctx) {
        var data = [];
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });
        return {
            title: data[1],
            id: data[0]
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#declareId.
    pumlVisitor2.prototype.visitDeclareId = function (ctx) {
        this.processResults(this.visitChildren(ctx), function (item) {
            if (item.identifier) {
                return {
                    id: item.identifier
                };
            }
        });
    };
    ;
    // Visit a parse tree produced by pumlParser#messageText.
    pumlVisitor2.prototype.visitMessageText = function (ctx) {
        return {
            text: this.getTextToEOL(ctx)
        };
    };
    ;
    pumlVisitor2.prototype.visitQuotedIdentifier = function (ctx) {
        var txt = ctx.getText();
        return {
            identifier: txt.substr(1, txt.length - 2)
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#simpleParticipant.
    pumlVisitor2.prototype.visitIdentifier = function (ctx) {
        return {
            identifier: ctx.getText()
        };
    };
    ;
    return pumlVisitor2;
}(pumlVisitor.pumlVisitor));
//# sourceMappingURL=parser.js.map