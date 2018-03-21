import { Diagram, Document } from "../document";


// @enduml
export const expression = /^\s*(\@startuml)(.+?)?$/im;

export const mappings: { [name: string]: number } = {
    "name": 2
};

export const pushState: states[] = ["diagram"];

export const popState: number = 0;

export function handler(context: IContext, results: IResults) {

    const diagram = new Diagram();
    if (results.name) {
        diagram.name = results.name;
    }
    context.values.diagram = diagram;
    return true;
}

export const keepCRLF: boolean = false;