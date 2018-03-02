export class Document {

    diagrams: Diagram[] = [];
}

export class Diagram {
    name: string | null = null;
    sealed: boolean = false;
}