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
var pumlVisitor = require('../js/pumlVisitor');
var document_1 = require("../document");
var visitor_utilities_1 = require("./visitor.utilities");
var visitor_participant_1 = require("./visitor.participant");
var visitor_common_1 = require("./visitor.common");
function visitDocument(parser) {
    var start = parser.document();
    var visitor = new pumlVisitor2();
    return visitor.visit(start);
}
exports.visitDocument = visitDocument;
var pumlVisitor2 = /** @class */ (function (_super) {
    __extends(pumlVisitor2, _super);
    function pumlVisitor2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    pumlVisitor2.prototype.visitDiagram = function (ctx) {
        var diagram = new document_1.Diagram();
        var participants = 0;
        visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.diagramName) {
                diagram.name = item.diagramName;
            }
            else if (item.note) {
                diagram.items.push(item.note);
            }
            else if (item.sequenceMessage) {
                diagram.items.push(item.sequenceMessage);
                if (item.sequenceMessage.participants) {
                    for (var _i = 0, _a = item.sequenceMessage.participants; _i < _a.length; _i++) {
                        var p = _a[_i];
                        diagram.addParticipant(p);
                    }
                    delete item.sequenceMessage.participants;
                }
            }
            else if (item.declareParticipant) {
                diagram.addParticipant(item.declareParticipant);
            }
        });
        return { diagram: diagram };
    };
    ;
    pumlVisitor2.prototype.visitStartUmlName = function (ctx) {
        return {
            diagramName: visitor_utilities_1.getText(ctx, true)
        };
    };
    ;
    pumlVisitor2.prototype.visitEndUml = function (ctx) {
        return null;
    };
    ;
    pumlVisitor2.prototype.visitSequenceMessage = function (ctx) {
        var msg = new document_1.SequenceMessage();
        msg.participants = [];
        var participants = msg.participants;
        var connector;
        var reversed = false;
        var text = "";
        visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.participant) {
                participants.push(item.participant);
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
        if (msg.participants.length < 2) {
            throw "Invalid Sequence";
        }
        if (connector === undefined) {
            throw "Invalid Sequence";
        }
        if (reversed) {
            connector.source = msg.participants[1].id;
            connector.target = msg.participants[0].id;
        }
        else {
            connector.source = msg.participants[0].id;
            connector.target = msg.participants[1].id;
        }
        if (text) {
            connector.text = text;
        }
        msg.connector = connector;
        return { sequenceMessage: msg };
    };
    ;
    // Visit a parse tree produced by pumlParser#connector.
    pumlVisitor2.prototype.visitSequenceMessageParticipant = function (ctx) {
        var p = new document_1.Participant("");
        visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.id) {
                p.id = item.id;
            }
            if (item.title) {
                p.title = item.title;
            }
        });
        return {
            participant: p
        };
    };
    ;
    // Visit a parse tree produced by pumlParser#messageText.
    pumlVisitor2.prototype.visitMessageText = function (ctx) {
        return {
            text: visitor_utilities_1.getText(ctx, true)
        };
    };
    ;
    return pumlVisitor2;
}(pumlVisitor.pumlVisitor));
visitor_utilities_1.applyMixins(pumlVisitor2, [visitor_common_1.CommonVisitor, visitor_participant_1.ParticipantVisitor]);
//# sourceMappingURL=visitor.js.map