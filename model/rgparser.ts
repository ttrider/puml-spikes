import { Diagram, Document } from "./document";


// @startuml <text>
const startuml = /^\s*(\@startuml)(.+?)?$/im;
function visitStartuml(context: Context) {

    if (!context.results) return false;

    if (context.results.length < 3) return false;

    const diagram = new Diagram();
    const name = context.results[2];
    if (name) {
        diagram.name = name.trim();
    }

    const document = context.getValue("document") as Document;
    document.diagrams.push(diagram);
    context.setValue("diagram", diagram);
    context.pushState("diagram");

    return true;
}

const enduml = /^\@enduml\s*$/im;
function visitEnduml(context: Context) {

    context.deleteValue("diagram");
    context.popState();
    return true;
}

const declareParticipant = /^\s*((participant)|(actor)|(boundary)|(control)|(database)|(entity)|(collections))\s*((\"[^"]+")|([^\s]+))(\s+as\s+((\"[^"]+")|([^\s]+)))?\s*(order\s+(\d+))?\s*(#\w+)?\s*$/im;

type states = undefined | "doc" | "diagram";

const pt: {
    [name: string]: {
        expressions: Array<ExpressionHandler>
    }
} = {

        "doc": {
            expressions: [
                {
                    expression: startuml,
                    handler: visitStartuml
                }]
        },
        "diagram": {
            expressions: [
                {
                    expression: enduml,
                    handler: visitEnduml
                }
            ]
        }
    };


function process(context: Context, value: string) {

    if (context.state) {
        const current = pt[context.state];

        if (!current) {
            throw Error("unknown state");
        }

        for (const exp of current.expressions) {

            const results = exp.expression.exec(value);
            if (results && results.length) {

                const rc = new Context(context, results);
                if (exp.handler(rc)) {
                    value = value.substring(results.index + results[0].length + 1);
                    return value;
                }
            }
        }
    }

    throw new Error("syntax error");
}


export function parse(diagram: string): Document {

    const context = new Context();
    context.pushState("doc");
    context.setValue("document", new Document());
    let text = diagram;


    while (text) {
        text = process(context, text);
    }

    if (context.state != "doc") {
        throw new Error("something went wrong");
    }

    const doc = context.getValue("document");

    return doc;
}


interface Dict {
    [key: string]: any // Must accomodate all members
}

class Context implements Dict {

    private data: { [name: string]: any } = {};
    private stateStack: states[] = [];

    constructor(private parent?: Context, public results?: RegExpExecArray) {
    }

    getValue(name: string): any {

        let value = this.data[name];
        if (value !== undefined) {
            return value;
        }

        if (this.parent) {
            return this.parent.getValue(name);
        }
        return undefined;
    }

    setValue(name: string, value: any): any {

        this.data[name] = value;
        return value;
    }

    deleteValue(name: string) {
        delete this.data[name];
    }

    pushState(state: states): states {
        if (this.parent) {
            return this.parent.pushState(state);
        }
        this.stateStack.push(state);
        return state;
    }
    popState(): states {
        if (this.parent) {
            return this.parent.popState();
        }
        return this.stateStack.pop();
    }

    get state(): states {
        if (this.parent) {
            return this.parent.state;
        }
        return this.stateStack[this.stateStack.length - 1];
    }

}

interface ExpressionHandler {
    expression: RegExp;
    handler: (context: Context) => boolean;
}