import { db } from "../database/database.connection.js";

export function postCatDB(name, photo, characteristics, userId){
    return db.query(`INSERT INTO cats (name, photo, characteristics, tutor_id) VALUES($1, $2, $3, $4)`,[name, photo, characteristics, userId])
}

export function getCatsDB(){
    return db.query(`SELECT id, name, photo FROM cats;`)
}

export function getCatByIdDB(id){
    return db.query(`
    SELECT cats.id, cats.name, cats.photo, cats.characteristics, users.name AS username, users.phone AS user_phone 
        FROM cats
	    JOIN users ON users.id = cats.tutor_id
	    WHERE cats.id = $1;`
    ,[id])
}

export function updateCatDisponibilityDB(id, available, userId){
    return db.query(`UPDATE cats set available = $1 WHERE id = $2 AND tutor_id = $3 RETURNING id;`,[available, id, userId])
}