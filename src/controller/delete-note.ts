import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";

export const deleteNote = async (c: Context) => {
    try {
        const { id } = c.req.param();
        console.log("id", id);
        const note = await Note.findByPk(id);
        const whol_note = await Note.findAll();
        console.log("Whole Note", whol_note)
        console.log("Note",note)
        return c.json({
            "status": 200,
            "message": "Note deleted successfully",
            "data": note
        });
    } catch (error) {
        console.log("error", error);
        return c.json({ error: "Something went wrong" }, { status: 500 });
    }
};