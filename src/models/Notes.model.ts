import { DataTypes, Model } from "sequelize";
import type { NoteAttribute } from "../types/notes.js";
import { sequelizeInstance } from "../config/db.js";

export class Note extends Model<NoteAttribute> implements NoteAttribute {
    declare id?: number;
    declare title: string;
    declare content: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}


Note.init({
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    title: {type: DataTypes.STRING,allowNull: false},
    content: {type: DataTypes.STRING,allowNull: false},
    createdAt: {type: DataTypes.DATE,allowNull: false},
    updatedAt: {type: DataTypes.DATE,allowNull: false}
},{sequelize: sequelizeInstance,modelName: "Notes",timestamps: true})