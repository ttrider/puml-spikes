const antlr4 = require('antlr4/index');
const pumlLexer = require('./output/pumlLexer');
const pumlParser = require('./output/pumlParser');
const pumlVisitor = require('./output/pumlVisitor');
import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";


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
    const parser = new pumlParser.pumlParser(tokens);
    parser.buildParseTrees = true;
    const start = parser.document();

    const visitor = new pumlVisitor2();
    return visitor.visit(start) as Document;
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
        let participants = 0;

        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.diagramName) {
                diagram.name = item.diagramName;
            } else if (item.note) {
                diagram.items.push(item.note);
            } else if (item.sequenceMessage) {
                diagram.items.push(item.sequenceMessage);

                if (item.sequenceMessage.connector) {
                    const connector = item.sequenceMessage.connector;
                    diagram.addParticipant(new Participant(participants++, connector.source));
                    diagram.addParticipant(new Participant(participants++, connector.target));
                }
            } else if (item.declareParticipant) {
                diagram.addParticipant(item.declareParticipant);
            }
        });
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

    visitColor(ctx: any) {

        const color = ctx.getText();
        if (color) {
            return {
                color: color.toLowerCase()
            };
        }
        return null;
    };

    // Visit a parse tree produced by pumlParser#note.
    visitNote(ctx: any) {

        const note = new Note();

        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.noteLocation) {
                note.location = item.noteLocation;
            }
            if (item.noteContent) {
                note.content = item.noteContent;
            }
            if (item.color) {
                note.color = item.color;
            }
            if (item.shape) {
                note.shape = item.shape;
            }
            if (item.anchor) {
                if (note.anchors) {
                    note.anchors.push(item.anchor);
                } else {
                    note.anchors = [item.anchor];
                }
            }
        });
        return { note: note };
    };


    // Visit a parse tree produced by pumlParser#singleLineNote.
    visitSingleLineNote(ctx: any) {
        const ch = this.visitChildren(ctx);
        return ch;
    };
    visitSingleLineRNote(ctx: any) {
        const ch = this.visitChildren(ctx);
        ch.push({
            shape: "rectangle"
        });
        return ch;
    };
    visitSingleLineHNote(ctx: any) {
        const ch = this.visitChildren(ctx);
        ch.push({
            shape: "hexagon"
        });
        return ch;
    };

    visitMultiLineNote(ctx: any) {
        const ch = this.visitChildren(ctx);
        return ch;
    };


    // Visit a parse tree produced by pumlParser#multiLineRNote.
    visitMultiLineRNote(ctx: any) {
        const ch = this.visitChildren(ctx);
        ch.push({
            shape: "rectangle"
        });
        return ch;
    };


    // Visit a parse tree produced by pumlParser#multiLineHNote.
    visitMultiLineHNote(ctx: any) {
        const ch = this.visitChildren(ctx);
        ch.push({
            shape: "hexagon"
        });
        return ch;
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

    visitNoteLocationOver(ctx: any) {
        return {
            noteLocation: "Over"
        };
    };


    // Visit a parse tree produced by pumlParser#noteTextLine.
    visitNoteTextLine(ctx: any) {
        return {
            noteContent: this.getTextToEOL(ctx)
        };
    };

    visitNoteTextLines(ctx: any) {
        return {
            noteContent: ctx.getText()
        };
    };

    visitNoteAnchor(ctx: any) {
        const anchor = ctx.getText();
        if (anchor) {
            return {
                anchor: anchor.trim()
            }
        }
        return null;
    };

    visitDeclareParticipant(ctx: any) {

        const p = new Participant(0, "");

        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.id) {
                p.id = item.id;
            }
            if (item.participantId) {
                p.id = item.participantId;
            }
            if (item.title) {
                p.title = item.title;
            }
            if (item.style) {
                p.style = item.style;
            }
            if (item.color) {
                p.color = item.color;
            }
        });
        return {
            declareParticipant: p
        }
    };

    visitDeclareDefaultParticipant(ctx: any) {
        return { style: "default" };
    };


    // Visit a parse tree produced by pumlParser#declareActor.
    visitDeclareActor(ctx: any) {
        return { style: "actor" };
    };


    // Visit a parse tree produced by pumlParser#declareBoundary.
    visitDeclareBoundary(ctx: any) {
        return { style: "boundary" };
    };


    // Visit a parse tree produced by pumlParser#declareControl.
    visitDeclareControl(ctx: any) {
        return { style: "control" };
    };


    // Visit a parse tree produced by pumlParser#declareEntity.
    visitDeclareEntity(ctx: any) {
        return { style: "entity" };
    };


    // Visit a parse tree produced by pumlParser#declareDatabase.
    visitDeclareDatabase(ctx: any) {
        return { style: "database" };
    };


    // Visit a parse tree produced by pumlParser#declareCollections.
    visitDeclareCollections(ctx: any) {
        return { style: "collections" };
    };



    visitSequenceMessage(ctx: any) {

        const msg = new SequenceMessage();

        const participants: any[] = [];
        let connector: Connector | undefined;
        let reversed: boolean = false;
        let text: string = "";

        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.participantId) {
                participants.push(item.participantId);
            }
            if (item.connector) {
                connector = item.connector;
            }
            if (item.reversed) {
                reversed = item.reversed;
            }
            if (item.text) {
                text = item.text;
            }
        });

        if (participants.length < 2) {
            throw "Invalid Sequence";
        }
        if (connector === undefined) {
            throw "Invalid Sequence";
        }

        if (reversed) {
            connector.source = participants[1];
            connector.target = participants[0];
        } else {
            connector.source = participants[0];
            connector.target = participants[1];
        }

        if (text) {
            connector.text = text;
        }

        msg.connector = connector;

        return { sequenceMessage: msg };
    };


    // Visit a parse tree produced by pumlParser#connector.
    visitConnector(ctx: any) {

        const connector = new Connector();
        let reversed: boolean = false;

        this.processResults(this.visitChildren(ctx), (item) => {

            if (item.style) {
                connector.style = item.style;
            }
            if (item.reversed) {
                reversed = item.reversed;
            }
        });

        return { connector: connector, reversed: reversed };
    };


    // Visit a parse tree produced by pumlParser#connectorSolidLeft.
    visitConnectorSolid(ctx: any) {
        return {
            style: "solid"
        };

    };


    // Visit a parse tree produced by pumlParser#connectorSolidRight.
    visitConnectorSolidReverse(ctx: any) {
        return {
            reversed: true,
            style: "solid"
        };

    };


    // Visit a parse tree produced by pumlParser#connectorDottedLeft.
    visitConnectorDotted(ctx: any) {
        return {
            style: "dotted"
        };

    };


    // Visit a parse tree produced by pumlParser#connectorDottedRight.
    visitConnectorDottedReverse(ctx: any) {
        return {
            reversed: true,
            style: "dotted"
        };
    };


    // Visit a parse tree produced by pumlParser#simpleParticipant.
    visitParticipant(ctx: any) {

        const ret: { participantId?: string } = {};

        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.identifier) {
                ret.participantId = item.identifier;
            }
        });

        return ret;
    };

    visitDeclareTitleAsId(ctx: any) {
        const data: string[] = [];
        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });

        return {
            title: data[0],
            id: data[1]
        };
    };


    // Visit a parse tree produced by pumlParser#declareIdAsTitle.
    visitDeclareIdAsTitle(ctx: any) {
        const data: string[] = [];
        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });

        return {
            title: data[1],
            id: data[0]
        };
    };


    // Visit a parse tree produced by pumlParser#declareId.
    visitDeclareId(ctx: any) {
        this.processResults(this.visitChildren(ctx), (item) => {
            if (item.identifier) {
                return {
                    id: item.identifier
                };
            }
        });
    };


    // Visit a parse tree produced by pumlParser#messageText.
    visitMessageText(ctx: any) {
        return {
            text: this.getTextToEOL(ctx)
        };
    };

    visitQuotedIdentifier(ctx: any) {
        const txt = ctx.getText() as string;
        return {
            identifier: txt.substr(1, txt.length - 2)
        };
    };


    // Visit a parse tree produced by pumlParser#simpleParticipant.
    visitIdentifier(ctx: any) {
        return {
            identifier: ctx.getText()
        };
    };
}
