
type states = undefined | "doc" | "diagram";

interface IContext {
    stateStack: states[];
    values: { [name: string]: any };
    state: states;
}

interface IResults {
    [x: string]: any;
    getNextValue: (value: string) => string;
}


interface ExpressionHandler {
    expression: RegExp;
    handler: (context: IContext, results: IResults) => boolean;
    mappings: { [name: string]: number };

    pushState?: states[];
    popState?: number;

    keepCRLF?: boolean
}


/// title as id
/// (?:(?:\"([^"]+)")|([^\s]+))(?:\s+as\s+(?:(?:\"([^"]+)")|([^\s]+)))? 