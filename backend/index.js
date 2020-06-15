import express from "express";
import routes from "./src/api/routes.js";

const port = 2115;

const app = express();

app.use(routes);

app.listen(port, () => console.log(`App started at port: ${port}`))