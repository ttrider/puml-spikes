const antlr4 = require('antlr4/index');
const pumlLexer = require('./output/pumlLexer');
const puml = require('./output/puml');
const pumlVisitor = require('./output/pumlVisitor');
import { Document } from "./document";
import { visitDocument } from "./visitor";


export function parse(diagram: string): Document {
    //  printTokens(diagram);
    const chars = new antlr4.InputStream(diagram);
    // adding extra CRLF at the end, if it is not there
    if (chars.data[chars.size - 1] != 10) {
        chars.data.push(10);
        chars._size++;
    }

    const lexer = new pumlLexer.pumlLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new puml.puml(tokens);
    parser.buildParseTrees = true;

    return visitDocument(parser);
}


function printTokens(input: string) {
    console.info("==========");
    console.info(input);
    console.info("~~~~~~~~~~");
    const chars = new antlr4.InputStream(input);
    const lexer = new pumlLexer.pumlLexer(chars);
    let token = lexer.nextToken();
    while (token.type != -1) {
        console.info(pumlLexer.pumlLexer.prototype.symbolicNames[token.type]);
        console.info(token.text);
        token = lexer.nextToken();
    }
    console.info("~~~~~~~~~~");
}
