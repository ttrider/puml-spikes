


export class Document {

    diagrams: Diagram[] = [];
}

export class Diagram {
    name: string | null = null;
    items: DiagramItem[] = [];
}

export class DiagramItem {
    constructor(public type: "note") { }
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