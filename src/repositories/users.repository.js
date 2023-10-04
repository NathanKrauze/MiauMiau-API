import { db } from "../database/database.connection.js";

export function getUserByEmailCpfDB(email, cpf) {
    return db.query(`SELECT * FROM users WHERE email=$1 OR cpf=$2;`, [email, cpf]);
};

export function createUserDB(name, cpf, phone, email, hash) {
    return db.query(
        `INSERT INTO users (name, cpf, phone, email, password) VALUES ($1, $2, $3, $4, $5);`,
        [name, cpf, phone, email, hash]
    );
};
