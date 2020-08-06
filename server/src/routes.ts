import { Router } from "express";
import Classes from "./controllers/classes";
import Connections from "./controllers/connections";

const route = Router();

const classes = new Classes();
const connections = new Connections();

route.post("/classes", classes.create);
route.get("/classes", classes.index);

route.post("/connections", connections.create);
route.get("/connections", connections.index);

export default route;
