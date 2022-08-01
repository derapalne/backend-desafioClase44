import axios from "axios";
import { config } from "../utils/index.js";

(async () => {
    try {
        const postProducto = await axios.post(`http://localhost:${config.PORT}/api/prod`, {
            prod: { title: "Azucar Mascabo", price: 400, description: "Riquísima" },
        });
        const productoId = postProducto.data;
        const getProductos = await axios.get(`http://localhost:${config.PORT}/api/prod`);
        const getProductoId = await axios.get(
            `http://localhost:${config.PORT}/api/prod/${productoId}`
        );
        const putProducto = await axios.put(`http://localhost:${config.PORT}/api/prod/${productoId}`, {
            prod: { title: "Azucar Blanca", price: 200, description: "Normal" },
        });
        const deleteProducto = await axios.get(
            `http://localhost:${config.PORT}/api/prod/${productoId}`
        );

        console.log("--------------POSTEAR PRODUCTO--------------");
        console.log(postProducto.data);
        console.log("--------------TRAER PRODUCTOS---------------");
        console.log(getProductos.data);
        console.log(`-------------TRAER PRODUCTO ID ${productoId}------------`);
        console.log(getProductoId.data);
        console.log("--------------MODIFICAR PRODUCTO------------");
        console.log(putProducto.data);
        console.log("---------------BORRAR PRODUCTO--------------");
        console.log(deleteProducto.data);
    } catch (error) {
        console.log(error);
    }
})();
