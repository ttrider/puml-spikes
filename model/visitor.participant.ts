import { getText} from "./visitor.utilities";
//import { Document, Diagram, Note, SequenceMessage, Connector, Participant } from "./document";
import { Note } from "./document";

export class NoteParticipant {
    visitDeclareDefaultParticipant(ctx: any) { return { style: "default" }; };
    visitDeclareActor(ctx: any) { return { style: "actor" }; };
    visitDeclareBoundary(ctx: any) { return { style: "boundary" }; };
    visitDeclareControl(ctx: any) { return { style: "control" }; };
    visitDeclareEntity(ctx: any) { return { style: "entity" }; };
    visitDeclareDatabase(ctx: any) { return { style: "database" }; };
    visitDeclareCollections(ctx: any) { return { style: "collections" }; };
}


