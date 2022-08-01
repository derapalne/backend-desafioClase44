import express from "express";
import { config, getById, getAll, add, updateById, deleteAll, deleteById } from "./utils/index.js";
import { routerGraphql, routerMain } from "./routes/index.js";
import { graphqlHTTP } from "express-graphql";
import productosSchema from "./schemas/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routerMain);
app.use("/api/graphql", routerGraphql);
app.use(
    "/graphql",
    graphqlHTTP({
        schema: productosSchema,
        rootValue: {
            getById,
            getAll,
            add,
            updateById,
            deleteAll,
            deleteById,
        },
        graphiql: true,
    })
);

const server = app.listen(config.PORT, () => console.log("http://localhost:" + config.PORT));
server.on("error", (error) => console.log(error));
