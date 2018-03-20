

// @startuml <text>
const startuml = /^(\@startuml)(.+?)?$/im;
function visitStartuml(context: Context) { }

const enduml = /^\@enduml\s*$/im;
function visitEnduml(context: Context) { }

const declareParticipant = /^\s*((participant)|(actor)|(boundary)|(control)|(database)|(entity)|(collections))\s*((\"[^"]+")|([^\s]+))(\s+as\s+((\"[^"]+")|([^\s]+)))?\s*(order\s+(\d+))?\s*(#\w+)?\s*$/im;

type states = undefined | "doc" | "diagram";

const pt: {
    [name: string]: {
        state: states,
        expressions: Array<{
            expression: RegExp,
            handler: (context: Context) => void,
            state: states
        }>
    }
} = {

        "doc": {
            state: "doc",
            expressions: [
                {
                    expression: startuml,
                    state: "diagram",
                    handler: visitStartuml
                },
                {
                    expression: startuml,
                    state: "diagram",
                    handler: visitEnduml
                }
            ]
        }

    };


export function parse(diagram: string): Document {

    const context = new Context();
    context.pushState("doc");

    if (context.state)
    {
        const current = pt[context.state];
        current.
    }


    const doc = new Document();




    return doc;
}

class Context {

    private data: { [name: string]: any } = {};
    private stateStack: states[] = [];

    constructor(private parent?: Context) {
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