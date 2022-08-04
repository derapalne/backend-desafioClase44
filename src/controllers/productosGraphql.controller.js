import { getById, getAll, add, updateById, deleteById, deleteAll } from "../utils/index.js";

const getProdId = async (req, res) => {
    let respuesta = null;
    const id = req.params.id;
    const query = req.body.query;
    if (id != undefined) {
        // console.log("hooolaaaa");
        respuesta = await getById(id);
    } else {
        respuesta = await getAll();
    }
    // console.log("datos devueltos por el servidor en peticion GET prod/", respuesta, id);
    res.status(200).json(respuesta);
};
const postProd = async (req, res) => {
    console.log("POST PROD");
    const prod = req.body.prod;
    const respuesta = await add(prod);
    // console.log(respuesta);
    if (respuesta) {
        res.status(201).json(respuesta);
    } else {
        res.status(400).json(respuesta);
    }
};

const putProdId = async (req, res) => {
    console.log("PUT PROD ID");
    const prod = req.body.prod;
    const id = req.params.id;
    const respuesta = await updateById(id, prod);
    res.status(200).json(respuesta);
};

const deleteProdId = async (req, res) => {
    const id = req.params.id;
    console.log("DELETE PROD ID", { id });
    let respuesta = null;
    if (id == "all") {
        respuesta = await deleteAll();
    } else {
        respuesta = await deleteById(id);
    }
    console.log("RESPUESTA DELETE: ", respuesta);
    res.status(200).json(respuesta);
};

const graphqlRoutes = { getProdId, postProd, putProdId, deleteProdId };
export {graphqlRoutes};