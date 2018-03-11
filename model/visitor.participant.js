"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteParticipant = /** @class */ (function () {
    function NoteParticipant() {
    }
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