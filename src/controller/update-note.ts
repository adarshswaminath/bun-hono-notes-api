import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";

export async function updateNote(c: Context) {
    try {
        const { id } = c.req.param();
        const { title, content } = await c.req.json();
        const note = await Note.findByPk(id);
        await note?.update({ title, content });
        return c.json({
            "status": 200,
            "message": "Note updated successfully",
            "data": note
        });
    } catch (error) {
        return c.json({ error: "Something went wrong" }, { status: 500 });
    }
}