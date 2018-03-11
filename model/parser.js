"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4 = require('antlr4/index');
var pumlLexer = require('./output/pumlLexer');
var pumlParser = require('./output/pumlParser');
var pumlVisitor = require('./output/pumlVisitor');
var visitor_1 = require("./visitor");
function parse(diagram) {
    //  printTokens(diagram);
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
    return visitor_1.visitDocument(parser);
}
exports.parse = parse;
function printTokens(input) {
    console.info("==========");
    console.info(input);
    console.info("~~~~~~~~~~");
    var chars = new antlr4.InputStream(input);
    var lexer = new pumlLexer.pumlLexer(chars);
    var token = lexer.nextToken();
    while (token.type != -1) {
        console.info(pumlLexer.pumlLexer.prototype.symbolicNames[token.type]);
        console.info(token.text);
        token = lexer.nextToken();
    }
    console.info("~~~~~~~~~~");
}
//# sourceMappingURL=parser.js.map