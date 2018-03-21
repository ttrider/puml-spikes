import { Diagram, Document } from "./document";


// @startuml <text>
const startuml = /^\s*(\@startuml)(.+?)?$/im;
function visitStartuml(context: IContext, results: Results) {

    const diagram = new Diagram();
    if (results.name) {
        diagram.name = results.name;
    }
    context.values.diagram = diagram;
    return true;
}

const enduml = /^\@enduml\s*$/im;
function visitEnduml(context: IContext, results: Results) {
    (<Document>context.values.document).diagrams.push(context.values.diagram);
    delete context.values.diagram;
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
                    handler: visitStartuml,
                    mappings: {
                        "name": 2
                    },
                    pushState: ["diagram"]
                }]
        },
        "diagram": {
            expressions: [
                {
                    expression: enduml,
                    handler: visitEnduml,
                    mappings: {},
                    popState: 1
                }
            ]
        }
    };

interface IContext {
    stateStack: states[];
    values: { [name: string]: any };
    state: states;
}


class Parser implements IContext {
    stateStack: states[] = ["doc"];
    values: { [name: string]: any } = {};

    get state(): states {
        return this.stateStack[this.stateStack.length - 1];
    }

    constructor(public source: string) {
        this.values.document = new Document();
    }

    parse(): Document {

        let value = this.source;

        while (value) {
            value = this.process(value);
        }

        if (this.stateStack.length != 1 && this.stateStack[0] != "doc") {
            throw new Error("something went wrong - we are not in the 'doc' state");
        }


        return this.values.document;
    }



    process(value: string) {

        if (this.state) {
            const current = pt[this.state];

            if (!current) {
                throw Error("unknown state");
            }

            for (const exp of current.expressions) {

                const matches = exp.expression.exec(value);

                if (matches && matches.length) {

                    const results = new Results(matches, exp.mappings, exp.keepCRLF);

                    if (exp.handler(this, results)) {
                        value = results.getNextValue(value);
                        if (exp.pushState && exp.pushState.length) {
                            for (const stateName of exp.pushState) {
                                this.stateStack.push(stateName);
                            }
                        }
                        if (exp.popState !== undefined) {
                            for (let i = 0; i < exp.popState; i++) {
                                this.stateStack.pop();
                            }
                        }
                        return value;
                    }
                }
            }
        }

        throw new Error("syntax error");
    }

}

export function parse(diagram: string): Document {

    const p = new Parser(diagram);

    return p.parse();
}


class Results {
    [x: string]: any;
    constructor(source: RegExpExecArray, mapping: { [name: string]: number }, keepCRLF?: boolean) {
        if (source && source.length && mapping) {
            for (const key in mapping) {
                if (mapping.hasOwnProperty(key)) {
                    const index = mapping[key];
                    if (index < source.length) {
                        const v = source[index];
                        if (v && typeof v === "string") {
                            this[key] = v.trim();
                        }
                        else
                            this[key] = v;
                    }
                }
            }

            const index = source.index + source[0].length + ((keepCRLF) ? 0 : 1);
            this.getNextValue = (value: string): string => {
                if (!value) {
                    return value;
                }
                return value.substring(index);
            };
        } else {
            this.getNextValue = (value: string): string => { return value; }
        }
    }


    getNextValue: (value: string) => string;
}




interface ExpressionHandler {
    expression: RegExp;
    handler: (context: IContext, results: Results) => boolean;
    mappings: { [name: string]: number };

    pushState?: states[];
    popState?: number;

    keepCRLF?: boolean
}