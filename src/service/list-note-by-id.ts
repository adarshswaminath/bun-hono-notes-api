import { Note } from "../models/Notes.model.js";

export const listNoteById = async(id: number) => {
    const note = await Note.findByPk(id);
    return note
}