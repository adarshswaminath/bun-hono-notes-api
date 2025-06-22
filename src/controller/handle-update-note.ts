import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";
import { updateNote } from "../service/update-note.js";

export async function handleUpdateNote(c: Context) {
    try {
        const { id } = c.req.param();
        const { title, content } = await c.req.json();
        const res = updateNote(Number(id), title, content);
        return c.json({
            "status": 200,
            "message": "Note updated successfully",
            "data": res
        });
    } catch (error) {
        return c.json({ error: "Something went wrong" }, { status: 500 });
    }
}