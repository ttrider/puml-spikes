"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @startuml <text>
var startuml = /^(\@startuml)(.+?)?$/im;
function visitStartuml(context) { }
var enduml = /^\@enduml\s*$/im;
function visitEnduml(context) { }
var declareParticipant = /^\s*((participant)|(actor)|(boundary)|(control)|(database)|(entity)|(collections))\s*((\"[^"]+")|([^\s]+))(\s+as\s+((\"[^"]+")|([^\s]+)))?\s*(order\s+(\d+))?\s*(#\w+)?\s*$/im;
var pt = {
    "doc": {
        state: "doc",
        expressions: [
            {
                expression: startuml,
                state: "diagram",
                handler: visitStartuml
            },
            {
                expression: startuml,
                state: "diagram",
                handler: visitEnduml
            }
        ]
    }
};
function parse(diagram) {
    var context = new Context();
    context.pushState("doc");
    if (context.state) {
        var current = pt[context.state];
        current.
        ;
    }
    var doc = new Document();
    return doc;
}
exports.parse = parse;
var Context = /** @class */ (function () {
    function Context(parent) {
        this.parent = parent;
        this.data = {};
        this.stateStack = [];
    }
    Context.prototype.getValue = function (name) {
        var value = this.data[name];
        if (value !== undefined) {
            return value;
        }
        if (this.parent) {
            return this.parent.getValue(name);
        }
        return undefined;
    };
    Context.prototype.setValue = function (name, value) {
        this.data[name] = value;
        return value;
    };
    Context.prototype.pushState = function (state) {
        if (this.parent) {
            return this.parent.pushState(state);
        }
        this.stateStack.push(state);
        return state;
    };
    Context.prototype.popState = function () {
        if (this.parent) {
            return this.parent.popState();
        }
        return this.stateStack.pop();
    };
    Object.defineProperty(Context.prototype, "state", {
        get: function () {
            if (this.parent) {
                return this.parent.state;
            }
            return this.stateStack[this.stateStack.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    return Context;
}());
//# sourceMappingURL=rgparser.js.map