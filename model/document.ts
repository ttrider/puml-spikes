

export class Document {

    diagrams: Diagram[] = [];
}

export class Diagram {
    name: string | null = null;
    items: DiagramItem[] = [];
}

export class DiagramItem {
    name: string | null = null;
}

export class Note extends DiagramItem {
    content: string | null = null;
}