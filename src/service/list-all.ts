import { Note } from "../models/Notes.model.js";

export const allNotes = async () => {
  const note= await Note.findAll();
  return note;
};
