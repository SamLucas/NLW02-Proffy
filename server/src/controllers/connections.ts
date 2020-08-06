import { Request, Response, response } from "express";

import db from "../database/connection";

export default class Connections {
  async index(req: Request, res: Response) {
    const [{ count }] = await db("connections").count("* as count");
    return res.status(201).json({ count });
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db("connections").insert({
      user_id,
    });

    return res.status(201).send();
  }
}
