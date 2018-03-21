import { Diagram, Participant } from "../document";

export const expression = /^\s*((?:participant)|(?:actor)|(?:boundary)|(?:control)|(?:database)|(?:entity)|(?:collections))\s*(?:(?:\"([^"]+)")|([^\s]+))(?:\s+as\s+(?:(?:\"([^"]+)")|([^\s]+)))?\s*(?:order\s+(\d+))?\s*(#\w+)?\s*$/im;

export const mappings: { [name: string]: number } = {
    "style": 1,
    "quotedTitle": 2,
    "title": 3,
    "quotedId": 4,
    "id": 5,
    "order": 6,
    "color": 7,
};

export const pushState: states[] = [];

export const popState: number = 0;

export function handler(context: IContext, results: IResults) {

    let id: string;
    let title: string | null = null;

    if (results.quotedTitle !== undefined) {
        if (results.quotedId !== undefined) {
            throw new Error("sytnax error: can't have both title and id in quotes");
        }
        if (results.id !== undefined) {
            id = results.id;
            title = results.quotedTitle;
        }
        else {
            id = results.quotedTitle;
        }
    } else if (results.title !== undefined) {
        if (results.quotedId) {
            id = results.title;
            title = results.quotedId;
        } else if (results.id !== undefined) {
            id = results.id;
            title = results.title;
        }
        else {
            id = results.title;
        }
    }
    else {
        throw new Error("syntax error");
    }

    const p = new Participant(id);
    if (title) {
        p.title = title;
    }
    if (results.style !== undefined) {
        const s = results.style.toLowerCase();
        if (s !== "participant") {
            p.style = s;
        }
        else {
            p.style = "default";
        }
    }
    if (results.order !== undefined) {
        const order = parseFloat(results.order);
        if (order > 0) {
            p.order = order;
        }
    }
    if (results.color !== undefined) {
        p.color = results.color;
    }

    (<Diagram>context.values.diagram).addParticipant(p);

    return true;
}

export const keepCRLF: boolean = false;