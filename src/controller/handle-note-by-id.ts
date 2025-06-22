import type { Context } from "hono";
import { listNoteById } from "../service/list-note-by-id.js";

export const handleNoteById = async (c: Context) => {
  try {
    const { id } = c.req.param();
    const note = await listNoteById(Number(id));
    return c.json({
      "status": 200,
      "message": "Note fetched successfully",
      "data": note
    });
  } catch (error) {
    return c.json({ error: "Something went wrong" }, { status: 500 });
  }
};
