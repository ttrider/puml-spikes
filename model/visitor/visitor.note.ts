import { getText, processChildren, appendChildren } from "./visitor.utilities";
import { Note } from "../document";

export class NoteVisitor {
    visitNote(ctx: any) {

        const note = new Note();

        processChildren(this, ctx,  (item) => {
            if (item.noteLocation) {
                note.location = item.noteLocation;
            }
            if (item.noteContent) {
                note.content = item.noteContent;
            }
            if (item.color) {
                note.color = item.color;
            }
            if (item.shape) {
                note.shape = item.shape;
            }
            if (item.anchor) {
                if (note.anchors) {
                    note.anchors.push(item.anchor);
                } else {
                    note.anchors = [item.anchor];
                }
            }
        });
        return { note: note };
    };

    visitNoteLocationRight(ctx: any) { return { noteLocation: "Right" }; };
    visitNoteLocationLeft(ctx: any) { return { noteLocation: "Left" }; };
    visitNoteLocationOver(ctx: any) { return { noteLocation: "Over" }; };
    visitNoteTextLine(ctx: any) { return { noteContent: getText(ctx, true) }; };
    visitNoteTextLines(ctx: any) { return { noteContent: getText(ctx) }; };
    visitNoteAnchor(ctx: any) { return { anchor: getText(ctx, true) } };

    visitSingleLineRNote(ctx: any) { return appendChildren(this, ctx, { shape: "rectangle" }); };
    visitSingleLineHNote(ctx: any) { return appendChildren(this, ctx, { shape: "hexagon" }); };
    visitMultiLineRNote(ctx: any) { return appendChildren(this, ctx, { shape: "rectangle" }); };
    visitMultiLineHNote(ctx: any) { return appendChildren(this, ctx, { shape: "hexagon" }); };
}


