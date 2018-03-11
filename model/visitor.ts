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

    visitColor(ctx: any) {

        const color = ctx.getText();
        if (color) {
            return {
                color: color.toLowerCase()
            };
        }
        return null;
    };

    visitDeclareParticipant(ctx: any) {

        const p = new Participant(0, "");

        processChildren(this, ctx, (item) => {
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





    visitSequenceMessage(ctx: any) {

        const msg = new SequenceMessage();

        const participants: any[] = [];
        let connector: Connector | undefined;
        let reversed: boolean = false;
        let text: string = "";

        processChildren(this, ctx, (item) => {
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
    



    visitParticipant(ctx: any) {

        const ret: { participantId?: string } = {};

        processChildren(this, ctx, (item) => {
            if (item.identifier) {
                ret.participantId = item.identifier;
            }
        });

        return ret;
    };

    visitDeclareTitleAsId(ctx: any) {
        const data: string[] = [];
        processChildren(this, ctx, (item) => {
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
        processChildren(this, ctx, (item) => {
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
        return processChildren(this, ctx, (item) => {
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
