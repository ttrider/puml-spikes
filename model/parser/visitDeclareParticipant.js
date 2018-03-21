"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../document");
exports.expression = /^\s*((?:participant)|(?:actor)|(?:boundary)|(?:control)|(?:database)|(?:entity)|(?:collections))\s*(?:(?:\"([^"]+)")|([^\s]+))(?:\s+as\s+(?:(?:\"([^"]+)")|([^\s]+)))?\s*(?:order\s+(\d+))?\s*(#\w+)?\s*$/im;
exports.mappings = {
    "style": 1,
    "quotedTitle": 2,
    "title": 3,
    "quotedId": 4,
    "id": 5,
    "order": 6,
    "color": 7,
};
exports.pushState = [];
exports.popState = 0;
function handler(context, results) {
    var id;
    var title = null;
    if (results.quotedTitle !== undefined) {
        if (results.quotedId !== undefined) {
            throw new Error("sytnax error: can't have both title and id in quotes");
        }
        if (results.id !== undefined) {
            id = results.id;
            title = results.quotedTitle;
        }
        else {
            id = results.quotedTitle;
        }
    }
    else if (results.title !== undefined) {
        if (results.quotedId) {
            id = results.title;
            title = results.quotedId;
        }
        else if (results.id !== undefined) {
            id = results.id;
            title = results.title;
        }
        else {
            id = results.title;
        }
    }
    else {
        throw new Error("syntax error");
    }
    var p = new document_1.Participant(id);
    if (title) {
        p.title = title;
    }
    if (results.style !== undefined) {
        var s = results.style.toLowerCase();
        if (s !== "participant") {
            p.style = s;
        }
        else {
            p.style = "default";
        }
    }
    if (results.order !== undefined) {
        var order = parseFloat(results.order);
        if (order > 0) {
            p.order = order;
        }
    }
    if (results.color !== undefined) {
        p.color = results.color;
    }
    context.values.diagram.addParticipant(p);
    return true;
}
exports.handler = handler;
exports.keepCRLF = false;
//# sourceMappingURL=visitDeclareParticipant.js.map