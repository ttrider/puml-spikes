


export class Document {

    diagrams: Diagram[] = [];
}

export class Diagram {
    name: string | null = null;
    items: DiagramItem[] = [];
    participants: { [name: string]: Participant } = {};
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
    constructor(public index: number, public name: string) {
        super("participant");
    }

    merge(other: Participant): Participant {
        if (other) {
            if (other.style) {
                this.style = other.style;
            }
        }


        return this;
    }

}