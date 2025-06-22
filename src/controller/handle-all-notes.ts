import type { Context } from "hono";
import { Note } from "../models/Notes.model.js";
import { allNotes } from "../service/list-all.js";

export const handleAllNotes = async (c: Context) => {
  try {
    const note = await allNotes()
    return c.json({
      status: 200,
      message: "Notes fetched successfully",
      data: note
    })
  } catch (error) {
    return c.json({ error: "Something went wrong" }, { status: 500 });
  }
};
