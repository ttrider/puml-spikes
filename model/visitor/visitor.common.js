"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitor_utilities_1 = require("./visitor.utilities");
var CommonVisitor = /** @class */ (function () {
    function CommonVisitor() {
    }
    CommonVisitor.prototype.visitColor = function (ctx) {
        var color = ctx.getText();
        if (color) {
            return {
                color: color.toLowerCase()
            };
        }
        return null;
    };
    ;
    CommonVisitor.prototype.visitSimpleIdentifier = function (ctx) {
        return {
            identifier: ctx.getText()
        };
    };
    ;
    CommonVisitor.prototype.visitQuotedIdentifier = function (ctx) {
        var txt = ctx.getText();
        return {
            identifier: txt.substr(1, txt.length - 2)
        };
    };
    ;
    CommonVisitor.prototype.visitTitleAsIdIdentifier = function (ctx) {
        var data = [];
        visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });
        return {
            alias: data[0],
            identifier: data[1]
        };
    };
    ;
    CommonVisitor.prototype.visitIdAsTitleIdentifier = function (ctx) {
        var data = [];
        visitor_utilities_1.processChildren(this, ctx, function (item) {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });
        return {
            alias: data[1],
            identifier: data[0]
        };
    };
    ;
    return CommonVisitor;
}());
exports.CommonVisitor = CommonVisitor;
//# sourceMappingURL=visitor.common.js.map