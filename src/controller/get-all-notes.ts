import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";

export const GetAllNotes = async (c: Context) => {
  try {
    const note = await Note.findAll();
    return c.json({
      status: 200,
      message: "Notes fetched successfully",
      data: note
    })
  } catch (error) {
    return c.json({ error: "Something went wrong" }, { status: 500 });
  }
};
