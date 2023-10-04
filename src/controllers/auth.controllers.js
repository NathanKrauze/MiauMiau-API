import { v4 as uuid } from "uuid";
import bcrypt from 'bcrypt';
import { createUserDB, getUserByEmailCpfDB } from "../repositories/users.repository.js";

export async function SignUp(req, res){
    const {name, cpf, phone, email, password} = req.body;

    try{
        const user = await getUserByEmailCpfDB(email, cpf);
        if (user.rows[0]) return res.status(409).send({ message: "E-mail or cpf already registered!" })
        
        const hash = bcrypt.hashSync(password, 10);
        await createUserDB(name, cpf, phone, email, hash);
        
        res.sendStatus(201)
    }catch(err){
        res.status(500).send(err.message)
    }
}