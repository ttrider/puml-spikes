


export class Document {

    diagrams: Diagram[] = [];
}

export class Diagram {
    name: string | null = null;
    items: DiagramItem[] = [];
    participants?: { [name: string]: Participant };



    addParticipant(participant: Participant): Participant {

        if (!participant || !participant.id) { return participant; }

        if (!this.participants) {
            participant.index = 0;
            this.participants = {};
            this.participants[participant.id] = participant;
            return participant;
        }

        participant.index = Object.keys(this.participants).length;

        const existing = this.participants[participant.id];

        if (existing) {
            existing.merge(participant);
            return existing;
        }

        this.participants[participant.id] = participant;
        return participant;
    }
}

export class DiagramItem {
    constructor(public type
        : "note"
        | "sequence_message"
        | "connector"
        | "participant"
    ) { }

    shape?: "default" | "rectangle" | "hexagon";

}

export class Note extends DiagramItem {

    constructor() {
        super("note");
    }
    content?: string;
    location: "Left" | "Right" | "Over" = "Left";
    color?: string;
    anchors?: string[];

}

export class SequenceMessage extends DiagramItem {
    connector?: Connector;
    constructor() {
        super("sequence_message");
    }
}

export class Connector extends DiagramItem {
    source?: string;
    target?: string;
    style: "solid" | "dotted" = "solid";
    text?: string;
    constructor() {
        super("connector");
    }
}

export class Participant extends DiagramItem {

    style?: "default" | "actor" | "boundary" | "control" | "entity" | "database" | "collections";
    color?: string;
    title?: string;
    constructor(public index: number, public id: string) {
        super("participant");
    }

    merge(other: Participant): Participant {
        if (other) {
            if (!this.style && other.style) {
                this.style = other.style;
            }
            if (!this.color && other.color) {
                this.color = other.color;
            }
            if (!this.title && other.title) {
                this.title = other.title;
            }
        }


        return this;
    }

}