import { Note } from "../models/Notes.model.js";

export const createNote = async (title: string, content: string) => {
   try {
    const getAllNotes = await Note.create({ title, content });
    return getAllNotes;
   } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
    
   }
};

