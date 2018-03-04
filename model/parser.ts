const antlr4 = require('antlr4/index');
const pumlLexer = require('./output/pumlLexer');
const pumlParser = require('./output/pumlParser');
const pumlVisitor = require('./output/pumlVisitor');
import { Document, Diagram, Note } from "./document";


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



class pumlVisitor2 extends pumlVisitor.pumlVisitor {

    getTextToEOL(ctx: any): string {
        let value: string = ctx.getText();
        if (value) {
            value = value.trim();
        }
        return value;
    }



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


    processResults(result: Array<any> | any, handler: (value: any) => void) {
        if (!result) {
            return;
        }
        if (Array.isArray(result)) {
            for (const item of result) {
                this.processResults(item, handler);
            }
        }
        else {
            handler(result);
        }
    }

    // Visit a parse tree produced by pumlParser#diagram.
    visitDiagram(ctx: any) {

        const diagram = new Diagram();

        this.processResults(this.visitChildren(ctx), (item)=>{
            if (item.diagramName) {
                diagram.name = item.diagramName;
            }
            if (item.note) {
                diagram.items.push(item.note);
            }
        });

        // for (const item of this.visitChildren(ctx)) {
        //     if (item) {
        //         if (item.diagramName) {
        //             diagram.name = item.diagramName;
        //         }
        //         if (item.note) {
        //             diagram.items.push(item.note);
        //         }
        //     }
        // }

        return { diagram: diagram };
    };

    visitStartUml(ctx: any) {
        const txt: string = ctx.getText();
        //strip @startuml
        if (txt.length > 9) {
            return {
                diagramName: txt.substr(9).trim()
            };
        }
        return {};
    };


    visitEndUml(ctx: any) {
        return null;
    };

    visitDiagramItem(ctx: any) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by pumlParser#note.
    visitNote(ctx: any) {

        const note = new Note();

        this.processResults(this.visitChildren(ctx), (item)=>{
            if (item.noteLocation) {
                note.location = item.noteLocation;
            }
            if (item.noteContent) {
                note.content = item.noteContent;
            }
        });

        // for (const item of this.visitChildren(ctx)) {
        //     if (item) {
        //         if (item.noteLocation) {
        //             note.location = item.noteLocation;
        //         }
        //         if (item.noteContent) {
        //             note.content = item.noteContent;
        //         }
        //     }
        // }
        return { note: note };
    };


    // Visit a parse tree produced by pumlParser#singleLineNote.
    visitSingleLineNote(ctx: any) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by pumlParser#noteLocation.
    visitNoteLocation(ctx: any) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by pumlParser#noteLocationRight.
    visitNoteLocationRight(ctx: any) {
        return {
            noteLocation: "Right"
        };
    };


    // Visit a parse tree produced by pumlParser#noteLocationLeft.
    visitNoteLocationLeft(ctx: any) {
        return {
            noteLocation: "Left"
        };
    };


    // Visit a parse tree produced by pumlParser#noteTextLine.
    visitNoteTextLine(ctx: any) {
        return {
            noteContent: this.getTextToEOL(ctx)
        };
    };
}



export default test;