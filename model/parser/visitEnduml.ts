import { Diagram, Document } from "../document";


// @startuml <text>
export const expression = /^\@enduml\s*$/im;

export const mappings: { [name: string]: number } = {};

export const pushState: states[] = [];

export const popState: number = 1;

export function handler(context: IContext, results: IResults) {

    (<Document>context.values.document).diagrams.push(context.values.diagram);
    delete context.values.diagram;
    return true;
}

export const keepCRLF: boolean = false;