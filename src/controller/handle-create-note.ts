import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";
import { createNote } from "../service/create-note.js";

export const handleCreateNote = async (c: Context) => {
  try {
    const { title, content } = await c.req.json();
    const note = await createNote(title, content);
    return c.json({
      "status": 200,
      "message": "Note created successfully",
      "data": note
    });
  } catch (error) {
    return c.json({ error: "Something went wrong" }, { status: 500 });
  }
};
