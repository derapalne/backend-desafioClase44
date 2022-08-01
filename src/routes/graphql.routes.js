import { Router } from "express";
import { graphqlRoutes } from "../controllers/index.js"

const routerGraphql = Router();

routerGraphql.get("/prod/:id?", graphqlRoutes.getProdId);

routerGraphql.post("/prod", graphqlRoutes.postProd);

routerGraphql.put("/prod/:id", graphqlRoutes.putProdId);

routerGraphql.delete("/prod/:id", graphqlRoutes.deleteProdId);


export default routerGraphql;
