import { postCatDB } from "../repositories/cats.repository.js";

export async function postCats(req, res){
    const {name, photo, characteristics} = req.body;
    const {userId} = res.locals;
    try{
        await postCatDB(name, photo, characteristics, userId);
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function getCats(req, res){
    try{
        res.send('ok')
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function getCatById(req, res){
    try{
        res.send('ok')
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function updateCatDisponibility(req, res){
    try{
        res.send('ok')
    }catch(err){
        res.status(500).send(err.message);
    }
}