import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { handleCreateNote } from "./controller/handle-create-note.js";
import { sequelizeInstance } from "./config/db.js";
import { handleNoteById } from "./controller/handle-note-by-id.js";
import { handleAllNotes } from "./controller/handle-all-notes.js";
import { handleDeleteNote } from "./controller/handle-delete-note.js";
import { handleUpdateNote } from "./controller/handle-update-note.js";

const app = new Hono();
await sequelizeInstance.sync();
app.get("/notes", (c) => handleAllNotes(c));
app.get("/note/:id", (c) => handleNoteById(c));
app.post("/note", (c) => handleCreateNote(c));
app.delete("/note/:id", (c) => handleDeleteNote(c));
app.put("/note/:id", (c) => handleUpdateNote(c));

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
