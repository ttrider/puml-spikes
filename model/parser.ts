const antlr4 = require('antlr4/index');
const pumlLexer = require('./gen/pumlLexer');
const pumlParser = require('./gen/pumlParser');
const pumlVisitor = require('./gen/pumlVisitor');
import { Document, Diagram } from "./document";


export function parse(diagram: string): Document {
    printTokens(diagram);
    const chars = new antlr4.InputStream(diagram);
    // adding extra CRLF at the end, if it is not there
    if (chars.data[chars.size - 1] != 10) {
        chars.data.push(10);
        chars._size++;
    }

    const lexer = new pumlLexer.pumlLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new pumlParser.pumlParser(tokens);
    parser.buildParseTrees = true;
    const start = parser.document();

    const visitor = new pumlVisitor2();
    return visitor.visit(start) as Document;
}

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

    visitDocument(ctx: any) {
        const doc = new Document();

        for (const item of this.visitChildren(ctx)) {
            if (item) {
                if (item.diagram) {
                    doc.diagrams.push(item.diagram);
                }
            }
        }
        return doc;
    };


    // Visit a parse tree produced by pumlParser#diagram.
    visitDiagram(ctx: any) {

        const diagram = new Diagram();

        for (const item of this.visitChildren(ctx)) {
            if (item) {
                if (item.diagramName) {
                    diagram.name = item.diagramName;
                }
            }
        }

        return { diagram: diagram };
    };

    visitStartUml(ctx: any) {
        for (const item of this.visitChildren(ctx)) {
            if (item) {
                if (item.diagramName) {
                    return item;
                }
            }
        }
        return {};
    };


    visitEndUml(ctx: any) {
        return null;
    };

    visitDigramName(ctx: any) {
        let value: string = ctx.getText();
        if (value) {
            value = value.trim();
        }
        return {
            diagramName: value
        };
    };
}



export default test;