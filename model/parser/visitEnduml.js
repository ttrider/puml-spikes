"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @startuml <text>
exports.expression = /^\@enduml\s*$/im;
exports.mappings = {};
exports.pushState = [];
exports.popState = 1;
function handler(context, results) {
    context.values.document.diagrams.push(context.values.diagram);
    delete context.values.diagram;
    return true;
}
exports.handler = handler;
exports.keepCRLF = false;
//# sourceMappingURL=visitEnduml.js.map