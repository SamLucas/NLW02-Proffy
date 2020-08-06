import { Router } from "express";
import Classes from "./controllers/classes";

const route = Router();

const classes = new Classes();

route.post("/classes", classes.create);
route.get("/classes", classes.index);

export default route;
