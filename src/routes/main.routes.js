import { Router } from "express";
import { mainRoutes } from "../controllers/index.js"

const routerMain = Router();

routerMain.get("/prod/:id?", mainRoutes.getProdId);

routerMain.post("/prod", mainRoutes.postProd);

routerMain.put("/prod/:id", mainRoutes.putProdId);

routerMain.delete("/prod/:id", mainRoutes.deleteProdId);


export default routerMain;
