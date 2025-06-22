import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";

export const deleteNote = async (c: Context) => {
    try {
        const { id } = c.req.param();
        const note = await Note.findByPk(id);
        return c.json({
            "status": 200,
            "message": "Note deleted successfully",
            "data": note
        });
    } catch (error) {
        return c.json({ error: "Something went wrong" }, { status: 500 });
    }
};