import { getCatByIdDB, getCatsDB, postCatDB, updateCatDisponibilityDB } from "../repositories/cats.repository.js";

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
        const cats = await getCatsDB();
        res.send(cats.rows)
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function getCatById(req, res){
    const {id} = req.params;
    try{
        const { rows: [cat]} = await getCatByIdDB(id)
        res.send(cat)
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function updateCatDisponibility(req, res){
    const {id} = req.params;
    const { available } = req.body;
    const {userId} = res.locals;
    try{
        const {rows:[result]} = await updateCatDisponibilityDB(id, available, userId);
        if(!result) return res.status(401).send({message: "you can only update your own cats!"})
        res.send('ok')
    }catch(err){
        res.status(500).send(err.message);
    }
}