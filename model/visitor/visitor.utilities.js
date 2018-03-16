"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(ctx, trim) {
    if (trim === void 0) { trim = false; }
    var value = ctx.getText();
    if (trim && value) {
        value = value.trim();
    }
    return value;
}
exports.getText = getText;
function applyMixin(target, mixin) {
    Object.getOwnPropertyNames(mixin.prototype).forEach(function (name) {
        target.prototype[name] = mixin.prototype[name];
    });
    return target;
}
exports.applyMixin = applyMixin;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
function processChildren(visitorInstance, ctx, handler) {
    return processResults(visitorInstance.visitChildren(ctx), handler);
}
exports.processChildren = processChildren;
function appendChildren(visitorInstance, ctx, item) {
    var ch = visitorInstance.visitChildren(ctx);
    ch.push(item);
    return ch;
}
exports.appendChildren = appendChildren;
function processResults(result, handler) {
    if (!result) {
        return result;
    }
    if (Array.isArray(result)) {
        var ret = [];
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var item = result_1[_i];
            ret.push(processResults(item, handler));
        }
        return ret;
    }
    return handler(result);
}
//# sourceMappingURL=visitor.utilities.js.map