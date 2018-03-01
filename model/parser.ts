const antlr4 = require('antlr4/index');
const pumlLexer = require('./gen/pumlLexer');
const pumlParser = require('./gen/pumlParser');
const pumlVisitor = require('./gen/pumlVisitor');

export function test(input: string) {
    printTokens(input);
    const chars = new antlr4.InputStream(input);
    const lexer = new pumlLexer.pumlLexer(chars);


    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new pumlParser.pumlParser(tokens);
    parser.buildParseTrees = true;
    const start = parser.start();

    const visitor = new pumlVisitor2();
    visitor.visit(start);

}

function printTokens(input: string) {
    console.info("==========");
    console.info(input);
    const chars = new antlr4.InputStream(input);
    const lexer = new pumlLexer.pumlLexer(chars);
    let token = lexer.nextToken();
    while (token.type != -1) {
        console.info(pumlLexer.pumlLexer.prototype.symbolicNames[token.type]);
        console.info(token.text);
        token = lexer.nextToken();
    }

}

class pumlVisitor2 extends pumlVisitor.pumlVisitor {

    pumlVisitor.prototype.visitDocument = function(ctx) {
        return this.visitChildren(ctx);
      };
      
      
      // Visit a parse tree produced by pumlParser#diagram.
      pumlVisitor.prototype.visitDiagram = function(ctx) {
        return this.visitChildren(ctx);
      };

    visitStart(ctx: any) {
        console.info("enter Start");
        //console.info(ctx);
        try {
            return this.visitChildren(ctx);
        }
        finally {
            console.info("exit Start");
        }
    };

    visitTextLine(ctx: any) {
        console.info("enter TextLine");
        //console.info(ctx);
        try {
            return this.visitChildren(ctx);
        }
        finally {
            console.info("exit TextLine");
        }
    };
}



export default test;