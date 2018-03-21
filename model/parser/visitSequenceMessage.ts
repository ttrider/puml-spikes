import { Diagram, Participant } from "../document";


export const expression = /^\s*(?:(?:(?:\"([^"]+)")|([^\s<\\\/\[-]+))(?:\s+as\s+(?:(?:\"([^"]+)")|([^\s<\\\/\[-]+)))?)(?:(?:\s*(x|o)?)(<<?|\\\\?|\/\/?)?(-*)(\[#[^\]]+\])?(-*)(>>?|\\\\?|\/\/?)?(x|o)?)\s*(?:(?:\"([^"]+)")|([^\s\:]+))(?:\s+as\s+(?:(?:\"([^"]+)")|([^\s\:]+)))?(?:\s*\:(.+?)?)?$/im;
export const mappings: { [name: string]: number } = {
    "leftQuotedTitle": 1,
    "leftTitle": 2,
    "leftQuotedId": 3,
    "leftId": 4,
    "leftTerminator": 5,
    "leftIndicator": 6,
    "leftLine": 7,
    "color": 8,
    "rightLine": 9,
    "rightIndicator": 10,
    "rightTerminator": 11,
    "rightQuotedTitle": 12,
    "rightTitle": 13,
    "rightQuotedId": 14,
    "rightId": 15,
    "message": 16
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