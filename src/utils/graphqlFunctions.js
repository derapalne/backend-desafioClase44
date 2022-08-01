import ProductosService from "../services/index.js"
const service = new ProductosService();

const getProducto = async ({id}) => {
    return await service.getById(id);
}

const getProductos = async () => {
    return await service.getAll();
}

const createProducto = async ({datos}) => {
    return await service.add(datos);
}

const updateProducto = async ({id, datos}) => {
    return await service.updateById(id, datos);
}

const deleteProducto = async ({id}) => {
    return await service.deleteById(id);
}

