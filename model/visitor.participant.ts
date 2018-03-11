import { getText, processChildren } from "./visitor.utilities";
//import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
import { Note, Participant } from "./document";

export class NoteParticipant {

    visitDeclareParticipant(ctx: any) {

        const p = new Participant("");

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
            if (item.order) {
                p.order = item.order;
            }
        });
        return {
            declareParticipant: p
        }
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
    visitDeclareId(ctx: any) {
        return processChildren(this, ctx, (item) => {
            if (item.identifier) {
                return {
                    id: item.identifier
                };
            }
        });
    };
    visitDeclareOrder(ctx: any) {
        return processChildren(this, ctx, (item) => {
            if (item.identifier) {

                return {
                    order: parseFloat(item.identifier)
                };
            }
        });
    }

    visitDeclareDefaultParticipant(ctx: any) { return { style: "default" }; };
    visitDeclareActor(ctx: any) { return { style: "actor" }; };
    visitDeclareBoundary(ctx: any) { return { style: "boundary" }; };
    visitDeclareControl(ctx: any) { return { style: "control" }; };
    visitDeclareEntity(ctx: any) { return { style: "entity" }; };
    visitDeclareDatabase(ctx: any) { return { style: "database" }; };
    visitDeclareCollections(ctx: any) { return { style: "collections" }; };
}


