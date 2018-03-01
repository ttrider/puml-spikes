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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visitDocument = function (ctx) {
            return this.visitChildren(ctx);
        };
        _this.visitDiagram = function (ctx) {
            return this.visitChildren(ctx);
        };
        return _this;
    }
    pumlVisitor2.prototype.visitStart = function (ctx) {
        console.info("enter Start");
        //console.info(ctx);
        try {
            return this.visitChildren(ctx);
        }
        finally {
            console.info("exit Start");
        }
    };
    ;
    pumlVisitor2.prototype.visitTextLine = function (ctx) {
        console.info("enter TextLine");
        //console.info(ctx);
        try {
            return this.visitChildren(ctx);
        }
        finally {
            console.info("exit TextLine");
        }
    };
    ;
    return pumlVisitor2;
}(pumlVisitor.pumlVisitor));
exports.default = test;
//# sourceMappingURL=parser.js.map