"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../document");
// @enduml
exports.expression = /^\s*(\@startuml)(.+?)?$/im;
exports.mappings = {
    "name": 2
};
exports.pushState = ["diagram"];
exports.popState = 0;
function handler(context, results) {
    var diagram = new document_1.Diagram();
    if (results.name) {
        diagram.name = results.name;
    }
    context.values.diagram = diagram;
    return true;
}
exports.handler = handler;
exports.keepCRLF = false;
//# sourceMappingURL=visitStartuml.js.map