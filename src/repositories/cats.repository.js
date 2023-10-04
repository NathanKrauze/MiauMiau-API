import { db } from "../database/database.connection.js";

export function postCatDB(name, photo, characteristics, userId){
    return db.query(`INSERT INTO cats (name, photo, characteristics, tutor_id) VALUES($1, $2, $3, $4)`,[name, photo, characteristics, userId])
}