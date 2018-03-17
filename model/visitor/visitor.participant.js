"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitor_utilities_1 = require("./visitor.utilities");
//import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
var document_1 = require("../document");
var ParticipantVisitor = /** @class */ (function () {
    function ParticipantVisitor() {
    }
    ParticipantVisitor.prototype.visitDeclareParticipant = function (ctx) {
        var p = new document_1.Participant("");
        visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.identifier) {
                p.id = item.identifier;
            }
            if (item.alias) {
                p.title = item.alias;
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
    ParticipantVisitor.prototype.visitDeclareDefaultParticipant = function (ctx) { return { style: "default" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareActor = function (ctx) { return { style: "actor" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareBoundary = function (ctx) { return { style: "boundary" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareControl = function (ctx) { return { style: "control" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareEntity = function (ctx) { return { style: "entity" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareDatabase = function (ctx) { return { style: "database" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareCollections = function (ctx) { return { style: "collections" }; };
    ;
    ParticipantVisitor.prototype.visitDeclareOrder = function (ctx) {
        return visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.identifier) {
                return {
                    order: parseFloat(item.identifier)
                };
            }
        });
    };
    return ParticipantVisitor;
}());
exports.ParticipantVisitor = ParticipantVisitor;
//# sourceMappingURL=visitor.participant.js.map