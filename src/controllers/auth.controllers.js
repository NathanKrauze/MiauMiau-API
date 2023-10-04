import { v4 as uuid } from "uuid";
import bcrypt from 'bcrypt';
import { createUserDB, getUserByEmailCpfDB } from "../repositories/users.repository.js";
import { createSessionDB } from "../repositories/auth.repository.js";

export async function signUp(req, res){
    const {name, cpf, phone, email, password} = req.body;

    try{
        const user = await getUserByEmailCpfDB(email, cpf);
        if (user.rows[0]) return res.status(409).send({ message: "E-mail or cpf already registered!" });
        
        const hash = bcrypt.hashSync(password, 10);
        await createUserDB(name, cpf, phone, email, hash);
        
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function signIn(req,res){
    const { email, password } = req.body;

    try {
        const user = await getUserByEmailCpfDB(email);
        if (!user.rows[0]) return res.status(401).send({ message: "E-mail not registered!" });

        const correctPassword = bcrypt.compareSync(password, user.rows[0].password);
        if (!correctPassword) return res.status(401).send({ message: "Incorrect password!" });

        const token = uuid();
        await createSessionDB(user.rows[0].id, token);
        res.send({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}