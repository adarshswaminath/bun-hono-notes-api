import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { WriteNote } from './controller/write-note.js'
import { sequelizeInstance } from './config/db.js'
import { GetNoteById } from './controller/get-note-by-id.js'
import { GetAllNotes } from './controller/get-all-notes.js'
import { Note } from './models/Notes.model.js'
import { deleteNote } from './controller/delete-note.js'
import { updateNote } from './controller/update-note.js'

const app = new Hono()
await sequelizeInstance.sync({alter: true}).then(() => console.log("Database synced"))
app.get("/notes", (c) => GetAllNotes(c))
app.get("/notes/:id",(c) => GetNoteById(c))
app.post('/notes', (c) => WriteNote(c))
app.delete("/notes/:id", (c) => deleteNote(c));
app.put("/note/:id", (c) => updateNote(c))

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
