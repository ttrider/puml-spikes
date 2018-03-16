"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitor_utilities_1 = require("./visitor.utilities");
var document_1 = require("../document");
var NoteVisitor = /** @class */ (function () {
    function NoteVisitor() {
    }
    NoteVisitor.prototype.visitNote = function (ctx) {
        var note = new document_1.Note();
        visitor_utilities_1.processChildren(this, ctx, function (item) {
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
    NoteVisitor.prototype.visitNoteLocationRight = function (ctx) { return { noteLocation: "Right" }; };
    ;
    NoteVisitor.prototype.visitNoteLocationLeft = function (ctx) { return { noteLocation: "Left" }; };
    ;
    NoteVisitor.prototype.visitNoteLocationOver = function (ctx) { return { noteLocation: "Over" }; };
    ;
    NoteVisitor.prototype.visitNoteTextLine = function (ctx) { return { noteContent: visitor_utilities_1.getText(ctx, true) }; };
    ;
    NoteVisitor.prototype.visitNoteTextLines = function (ctx) { return { noteContent: visitor_utilities_1.getText(ctx) }; };
    ;
    NoteVisitor.prototype.visitNoteAnchor = function (ctx) { return { anchor: visitor_utilities_1.getText(ctx, true) }; };
    ;
    NoteVisitor.prototype.visitSingleLineRNote = function (ctx) { return visitor_utilities_1.appendChildren(this, ctx, { shape: "rectangle" }); };
    ;
    NoteVisitor.prototype.visitSingleLineHNote = function (ctx) { return visitor_utilities_1.appendChildren(this, ctx, { shape: "hexagon" }); };
    ;
    NoteVisitor.prototype.visitMultiLineRNote = function (ctx) { return visitor_utilities_1.appendChildren(this, ctx, { shape: "rectangle" }); };
    ;
    NoteVisitor.prototype.visitMultiLineHNote = function (ctx) { return visitor_utilities_1.appendChildren(this, ctx, { shape: "hexagon" }); };
    ;
    return NoteVisitor;
}());
exports.NoteVisitor = NoteVisitor;
//# sourceMappingURL=visitor.note.js.map