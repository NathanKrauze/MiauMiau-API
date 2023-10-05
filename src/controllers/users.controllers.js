import { getUsersCatsDB } from "../repositories/users.repository.js";

export async function getUsersCats(req, res){
    const {userId} = res.locals
    try{
        const usersCats = await getUsersCatsDB(userId);
        res.send(usersCats.rows)
    }catch(err){
        res.status(500).send(err.message);
    }
}