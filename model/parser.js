"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4 = require('antlr4/index');
var pumlLexer = require('./gen/pumlLexer');
var pumlParser = require('./gen/pumlParser');
var pumlVisitor = require('./gen/pumlVisitor');
var document_1 = require("./document");
function parse(diagram) {
    printTokens(diagram);
    var chars = new antlr4.InputStream(diagram);
    // adding extra CRLF at the end, if it is not there
    if (chars.data[chars.size - 1] != 10) {
        chars.data.push(10);
        chars._size++;
    }
    var lexer = new pumlLexer.pumlLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new pumlParser.pumlParser(tokens);
    parser.buildParseTrees = true;
    var start = parser.document();
    var visitor = new pumlVisitor2();
    return visitor.visit(start);
}
exports.parse = parse;
function test(input) {
    printTokens(input);
    var chars = new antlr4.InputStream(input);
    var lexer = new pumlLexer.pumlLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new pumlParser.pumlParser(tokens);
    parser.buildParseTrees = true;
    var start = parser.start();
    var visitor = new pumlVisitor2();
    visitor.visit(start);
}
exports.test = test;
function printTokens(input) {
    console.info("==========");
    console.info(input);
    var chars = new antlr4.InputStream(input);
    var lexer = new pumlLexer.pumlLexer(chars);
    var token = lexer.nextToken();
    while (token.type != -1) {
        console.info(pumlLexer.pumlLexer.prototype.symbolicNames[token.type]);
        console.info(token.text);
        token = lexer.nextToken();
    }
}
var pumlVisitor2 = /** @class */ (function (_super) {
    __extends(pumlVisitor2, _super);
    function pumlVisitor2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pumlVisitor2.prototype.visitDocument = function (ctx) {
        var doc = new document_1.Document();
        for (var _i = 0, _a = this.visitChildren(ctx); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                if (item.diagram) {
                    doc.diagrams.push(item.diagram);
                }
            }
        }
        return doc;
    };
    ;
    // Visit a parse tree produced by pumlParser#diagram.
    pumlVisitor2.prototype.visitDiagram = function (ctx) {
        var diagram = new document_1.Diagram();
        for (var _i = 0, _a = this.visitChildren(ctx); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                if (item.diagramName) {
                    diagram.name = item.diagramName;
                }
            }
        }
        return { diagram: diagram };
    };
    ;
    pumlVisitor2.prototype.visitStartUml = function (ctx) {
        for (var _i = 0, _a = this.visitChildren(ctx); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                if (item.diagramName) {
                    return item;
                }
            }
        }
        return {};
    };
    ;
    pumlVisitor2.prototype.visitEndUml = function (ctx) {
        return null;
    };
    ;
    pumlVisitor2.prototype.visitDigramName = function (ctx) {
        var value = ctx.getText();
        if (value) {
            value = value.trim();
        }
        return {
            diagramName: value
        };
    };
    ;
    return pumlVisitor2;
}(pumlVisitor.pumlVisitor));
exports.default = test;
//# sourceMappingURL=parser.js.map