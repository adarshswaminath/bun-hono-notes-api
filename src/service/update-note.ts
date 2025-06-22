import { Note } from "../models/Notes.model.js";

export const updateNote = async (id: number, title: string, content: string) => {
    const note = await Note.findByPk(id);
    await note?.update({ title, content });
    return note;
};