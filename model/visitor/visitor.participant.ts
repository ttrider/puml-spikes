import { getText, processChildren } from "./visitor.utilities";
//import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
import { Note, Participant } from "../document";

export class ParticipantVisitor {

    visitDeclareParticipant(ctx: any) {

        const p = new Participant("");

        processChildren(this, ctx, (item) => {
            if (item.identifier) {
                p.id = item.identifier;
            }
            if (item.alias) {
                p.title = item.alias;
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

    visitDeclareDefaultParticipant(ctx: any) { return { style: "default" }; };
    visitDeclareActor(ctx: any) { return { style: "actor" }; };
    visitDeclareBoundary(ctx: any) { return { style: "boundary" }; };
    visitDeclareControl(ctx: any) { return { style: "control" }; };
    visitDeclareEntity(ctx: any) { return { style: "entity" }; };
    visitDeclareDatabase(ctx: any) { return { style: "database" }; };
    visitDeclareCollections(ctx: any) { return { style: "collections" }; };
    
    visitDeclareOrder(ctx: any) {
        return processChildren(this, ctx, (item) => {
            if (item.identifier) {

                return {
                    order: parseFloat(item.identifier)
                };
            }
        });
    }

}


