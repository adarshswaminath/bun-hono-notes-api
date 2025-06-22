import { Sequelize } from "sequelize";


export const sequelizeInstance = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
    logging: console.log
})

