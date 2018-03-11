const pumlVisitor = require('./output/pumlVisitor');
import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
import { getText, applyMixins, processChildren, appendChildren } from "./visitor.utilities";
import { NoteVisitor } from "./visitor.note";
import { NoteConnector } from "./visitor.connector";
import { NoteParticipant } from "./visitor.participant";

export function visitDocument(parser: any): Document {
    const start = parser.document();
    const visitor = new pumlVisitor2();

    return visitor.visit(start) as Document;
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


    visitDiagram(ctx: any) {

        const diagram = new Diagram();
        let participants = 0;

        processChildren(this, ctx, (item) => {
            if (item.diagramName) {
                diagram.name = item.diagramName;
            } else if (item.note) {
                diagram.items.push(item.note);
            } else if (item.sequenceMessage) {
                diagram.items.push(item.sequenceMessage);

                if (item.sequenceMessage.participants){
                    for (const p of item.sequenceMessage.participants) {
                        diagram.addParticipant(p);
                    }
                    delete item.sequenceMessage.participants;
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

    visitColor(ctx: any) {

        const color = ctx.getText();
        if (color) {
            return {
                color: color.toLowerCase()
            };
        }
        return null;
    };







    visitSequenceMessage(ctx: any) {

        const msg = new SequenceMessage();
        msg.participants = [];
        const participants = msg.participants;

        let connector: Connector | undefined;
        let reversed: boolean = false;
        let text: string = "";


        processChildren(this, ctx, (item) => {
            if (item.participant) {
                participants.push(item.participant);
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

        if (msg.participants.length < 2) {
            throw "Invalid Sequence";
        }
        if (connector === undefined) {
            throw "Invalid Sequence";
        }

        if (reversed) {
            connector.source = msg.participants[1].id;
            connector.target = msg.participants[0].id;
        } else {
            connector.source = msg.participants[0].id;
            connector.target = msg.participants[1].id;
        }

        if (text) {
            connector.text = text;
        }

        msg.connector = connector;

        return { sequenceMessage: msg };
    };


    // Visit a parse tree produced by pumlParser#connector.




    visitSequenceMessageParticipant(ctx: any) {

        const p = new Participant("");

        processChildren(this, ctx, (item) => {
            if (item.id) {
                p.id = item.id;
            }
            if (item.title) {
                p.title = item.title;
            }
        });
        return {
            participant: p
        }
    };


    // Visit a parse tree produced by pumlParser#messageText.
    visitMessageText(ctx: any) {
        return {
            text: getText(ctx, true)
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

applyMixins(pumlVisitor2, [NoteVisitor, NoteConnector, NoteParticipant]);
