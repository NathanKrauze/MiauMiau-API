import { existSessionDB } from "../repositories/auth.repository.js"

export async function validateAuth(req, res, next) {

    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).send({message: "Token not sended"});

    try {
        const session = await existSessionDB(token);
        if (!session.rows[0]) return res.status(401).send({message: "Unauthorized"});
        res.locals.userId = session.rows[0].user_id;

        next();
    } catch (err) {
        res.status(500).send(err);
    }
}