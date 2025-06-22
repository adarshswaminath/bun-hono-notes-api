import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";
import { deleteNote } from "../service/delete-note.js";

export const handleDeleteNote = async (c: Context) => {
    try {
        const { id } = c.req.param();
        const res = deleteNote(Number(id));
        return c.json({
            "status": 200,
            "message": "Note deleted successfully",
            "data": res
        });
    } catch (error) {
        return c.json({ error: "Something went wrong" }, { status: 500 });
    }
};