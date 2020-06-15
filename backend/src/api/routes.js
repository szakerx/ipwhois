import Router from "express";

import handler from "./details/handler.js";

const routes = Router();

routes.get("/details/:ip", handler.getInformation);


export default routes;