import { db } from "../database/database.connection.js";

export function existSessionDB(token) {
    return db.query(`SELECT "userId" FROM sessions WHERE token=$1;`, [token]);
};

export function createSessionDB(userId, token) {
    return db.query(
        `INSERT INTO sessions (user_id, token) VALUES ($1, $2);`,
        [userId, token]
    );
};