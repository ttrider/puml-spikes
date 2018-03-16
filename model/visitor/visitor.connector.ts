import { getText, processChildren} from "./visitor.utilities";
import { Note, Connector } from "../document";

export class NoteConnector {

    visitConnector(ctx: any) {

        const connector = new Connector();
        let reversed: boolean = false;

        processChildren(this, ctx, (item) => {

            if (item.style) {
                connector.style = item.style;
            }
            if (item.reversed) {
                reversed = item.reversed;
            }
        });

        return { connector: connector, reversed: reversed };
    };

    visitConnectorSolid(ctx: any) { return { style: "solid" }; };
    visitConnectorSolidReverse(ctx: any) { return { reversed: true, style: "solid" }; };
    visitConnectorDotted(ctx: any) { return { style: "dotted" }; };
    visitConnectorDottedReverse(ctx: any) { return { reversed: true, style: "dotted" }; };
}


