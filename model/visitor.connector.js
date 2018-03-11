"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitor_utilities_1 = require("./visitor.utilities");
//import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
var document_1 = require("./document");
var NoteConnector = /** @class */ (function () {
    function NoteConnector() {
    }
    NoteConnector.prototype.visitConnector = function (ctx) {
        var connector = new document_1.Connector();
        var reversed = false;
        visitor_utilities_1.processChildren(this, ctx, function (item) {
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
    NoteConnector.prototype.visitConnectorSolid = function (ctx) { return { style: "solid" }; };
    ;
    NoteConnector.prototype.visitConnectorSolidReverse = function (ctx) { return { reversed: true, style: "solid" }; };
    ;
    NoteConnector.prototype.visitConnectorDotted = function (ctx) { return { style: "dotted" }; };
    ;
    NoteConnector.prototype.visitConnectorDottedReverse = function (ctx) { return { reversed: true, style: "dotted" }; };
    ;
    return NoteConnector;
}());
exports.NoteConnector = NoteConnector;
//# sourceMappingURL=visitor.connector.js.map