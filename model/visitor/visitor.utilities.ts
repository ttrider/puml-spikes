export function getText(ctx: any, trim: boolean = false): string | null {
    let value: string = ctx.getText();
    if (trim && value) {
        value = value.trim();
    }
    return value;
}

export function applyMixin(target: any, mixin: any) {
    Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
        target.prototype[name] = mixin.prototype[name];
    });
    return target;
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

export function processChildren(visitorInstance: any, ctx: any, handler: (value: any) => void) {
    return processResults(visitorInstance.visitChildren(ctx), handler);
}

export function appendChildren(visitorInstance: any, ctx: any, item: any) {
    const ch = visitorInstance.visitChildren(ctx);
    ch.push(item);
    return ch;
}

function processResults(result: Array<any> | any, handler: (value: any) => void): any {
    if (!result) {
        return result;
    }
    if (Array.isArray(result)) {
        const ret = [];
        for (const item of result) {
            ret.push(processResults(item, handler));
        }
        return ret;
    }
    return handler(result);
}
