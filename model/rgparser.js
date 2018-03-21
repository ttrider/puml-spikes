"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./document");
var visitStartuml = require("./parser/visitStartuml");
var visitEnduml = require("./parser/visitEnduml");
var visitDeclareParticipant = require("./parser/visitDeclareParticipant");
var pt = {
    "doc": {
        expressions: [visitStartuml]
    },
    "diagram": {
        expressions: [
            visitDeclareParticipant,
            visitEnduml
        ]
    }
};
function parse(diagram) {
    var p = new Parser(diagram);
    return p.parse();
}
exports.parse = parse;
var Parser = /** @class */ (function () {
    function Parser(source) {
        this.source = source;
        this.stateStack = ["doc"];
        this.values = {};
        this.values.document = new document_1.Document();
    }
    Object.defineProperty(Parser.prototype, "state", {
        get: function () {
            return this.stateStack[this.stateStack.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Parser.prototype.parse = function () {
        var value = this.source;
        while (value) {
            value = this.process(value);
        }
        if (this.stateStack.length != 1 && this.stateStack[0] != "doc") {
            throw new Error("something went wrong - we are not in the 'doc' state");
        }
        return this.values.document;
    };
    Parser.prototype.process = function (value) {
        if (this.state) {
            var current = pt[this.state];
            if (!current) {
                throw Error("unknown state");
            }
            for (var _i = 0, _a = current.expressions; _i < _a.length; _i++) {
                var exp = _a[_i];
                var matches = exp.expression.exec(value);
                if (matches && matches.length) {
                    var results = new Results(matches, exp.mappings, exp.keepCRLF);
                    if (exp.handler(this, results)) {
                        value = results.getNextValue(value);
                        if (exp.pushState && exp.pushState.length) {
                            for (var _b = 0, _c = exp.pushState; _b < _c.length; _b++) {
                                var stateName = _c[_b];
                                this.stateStack.push(stateName);
                            }
                        }
                        if (exp.popState !== undefined) {
                            for (var i = 0; i < exp.popState; i++) {
                                this.stateStack.pop();
                            }
                        }
                        return value;
                    }
                }
            }
        }
        throw new Error("syntax error");
    };
    return Parser;
}());
var Results = /** @class */ (function () {
    function Results(source, mapping, keepCRLF) {
        if (source && source.length && mapping) {
            for (var key in mapping) {
                if (mapping.hasOwnProperty(key)) {
                    var index_1 = mapping[key];
                    if (index_1 < source.length) {
                        var v = source[index_1];
                        if (v && typeof v === "string") {
                            this[key] = v.trim();
                        }
                        else
                            this[key] = v;
                    }
                }
            }
            var index_2 = source.index + source[0].length + ((keepCRLF) ? 0 : 1);
            this.getNextValue = function (value) {
                if (!value) {
                    return value;
                }
                return value.substring(index_2);
            };
        }
        else {
            this.getNextValue = function (value) { return value; };
        }
    }
    return Results;
}());
//# sourceMappingURL=rgparser.js.map