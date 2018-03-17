import { getText, processChildren, appendChildren } from "./visitor.utilities";
import { Note } from "../document";

export class CommonVisitor {
    visitColor(ctx: any) {

        const color = ctx.getText();
        if (color) {
            return {
                color: color.toLowerCase()
            };
        }
        return null;
    };

    visitSimpleIdentifier(ctx: any) {
        return {
            identifier: ctx.getText()
        };
    };

    visitQuotedIdentifier(ctx: any) {
        const txt = ctx.getText() as string;
        return {
            identifier: txt.substr(1, txt.length - 2)
        };
    };


    visitTitleAsIdIdentifier(ctx: any) {
        const data: string[] = [];
        processChildren(this, ctx, (item) => {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });

        return {
            alias: data[0],
            identifier: data[1]
        };
    };
    visitIdAsTitleIdentifier(ctx: any) {
        const data: string[] = [];
        processChildren(this, ctx, (item) => {
            if (item.identifier) {
                data.push(item.identifier);
            }
        });

        return {
            alias: data[1],
            identifier: data[0]
        };
    };
}


