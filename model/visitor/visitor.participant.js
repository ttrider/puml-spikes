"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitor_utilities_1 = require("./visitor.utilities");
//import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
var document_1 = require("../document");
var NoteParticipant = /** @class */ (function () {
    function NoteParticipant() {
    }
    NoteParticipant.prototype.visitDeclareParticipant = function (ctx) {
        var p = new document_1.Participant("");
        visitor_utilities_1.processChildren(this, ctx, function (item) {
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
            if (item.order) {
                p.order = item.order;
            }
        });
        return {
            declareParticipant: p
        };
    };
    ;
    NoteParticipant.prototype.visitDeclareTitleAsId = function (ctx) {
        var data = [];
        visitor_utilities_1.processChildren(this, ctx, function (item) {
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
    NoteParticipant.prototype.visitDeclareIdAsTitle = function (ctx) {
        var data = [];
        visitor_utilities_1.processChildren(this, ctx, function (item) {
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
    NoteParticipant.prototype.visitDeclareId = function (ctx) {
        return visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.identifier) {
                return {
                    id: item.identifier
                };
            }
        });
    };
    ;
    NoteParticipant.prototype.visitDeclareOrder = function (ctx) {
        return visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.identifier) {
                return {
                    order: parseFloat(item.identifier)
                };
            }
        });
    };
    NoteParticipant.prototype.visitDeclareDefaultParticipant = function (ctx) { return { style: "default" }; };
    ;
    NoteParticipant.prototype.visitDeclareActor = function (ctx) { return { style: "actor" }; };
    ;
    NoteParticipant.prototype.visitDeclareBoundary = function (ctx) { return { style: "boundary" }; };
    ;
    NoteParticipant.prototype.visitDeclareControl = function (ctx) { return { style: "control" }; };
    ;
    NoteParticipant.prototype.visitDeclareEntity = function (ctx) { return { style: "entity" }; };
    ;
    NoteParticipant.prototype.visitDeclareDatabase = function (ctx) { return { style: "database" }; };
    ;
    NoteParticipant.prototype.visitDeclareCollections = function (ctx) { return { style: "collections" }; };
    ;
    return NoteParticipant;
}());
exports.NoteParticipant = NoteParticipant;
//# sourceMappingURL=visitor.participant.js.map