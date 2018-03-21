"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./document");
// @startuml <text>
var startuml = /^\s*(\@startuml)(.+?)?$/im;
function visitStartuml(context) {
    if (!context.results)
        return false;
    if (context.results.length < 3)
        return false;
    var diagram = new document_1.Diagram();
    var name = context.results[2];
    if (name) {
        diagram.name = name.trim();
    }
    var document = context.getValue("document");
    document.diagrams.push(diagram);
    context.setValue("diagram", diagram);
    context.pushState("diagram");
    return true;
}
var enduml = /^\@enduml\s*$/im;
function visitEnduml(context) {
    context.deleteValue("diagram");
    context.popState();
    return true;
}
var declareParticipant = /^\s*((participant)|(actor)|(boundary)|(control)|(database)|(entity)|(collections))\s*((\"[^"]+")|([^\s]+))(\s+as\s+((\"[^"]+")|([^\s]+)))?\s*(order\s+(\d+))?\s*(#\w+)?\s*$/im;
var pt = {
    "doc": {
        expressions: [
            {
                expression: startuml,
                handler: visitStartuml
            }
        ]
    },
    "diagram": {
        expressions: [
            {
                expression: enduml,
                handler: visitEnduml
            }
        ]
    }
};
function process(context, value) {
    if (context.state) {
        var current = pt[context.state];
        if (!current) {
            throw Error("unknown state");
        }
        for (var _i = 0, _a = current.expressions; _i < _a.length; _i++) {
            var exp = _a[_i];
            var results = exp.expression.exec(value);
            if (results && results.length) {
                var rc = new Context(context, results);
                if (exp.handler(rc)) {
                    value = value.substring(results.index + results[0].length + 1);
                    return value;
                }
            }
        }
    }
    throw new Error("syntax error");
}
function parse(diagram) {
    var context = new Context();
    context.pushState("doc");
    context.setValue("document", new document_1.Document());
    var text = diagram;
    while (text) {
        text = process(context, text);
    }
    if (context.state != "doc") {
        throw new Error("something went wrong");
    }
    var doc = context.getValue("document");
    return doc;
}
exports.parse = parse;
var Context = /** @class */ (function () {
    function Context(parent, results) {
        this.parent = parent;
        this.results = results;
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
    Context.prototype.deleteValue = function (name) {
        delete this.data[name];
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