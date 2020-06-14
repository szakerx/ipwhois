import Router from "express";

import handler from "./information/handler.js";

const routes = Router();

routes.get("/information/:ip", handler.getInformation);


export default routes;