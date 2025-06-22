import { Note } from "../models/Notes.model.js";

export const deleteNote = async (id: number) => {
    const note = await Note.findByPk(id);
    await note?.destroy();
    return note;
};