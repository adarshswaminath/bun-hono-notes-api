import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";

export const WriteNote = async (c: Context) => {
  try {
    const { title, content } = await c.req.json();
    console.log("API HIT", title, content);
    const note = await Note.create({ title:title, content:content });
    await note.reload()
    return c.json({
      "status": 200,
      "message": "Note created successfully",
      "data": note
    });
  } catch (error) {
    console.log("error", error);
    return c.json({ error: "Something went wrong" }, { status: 500 });
  }
};
