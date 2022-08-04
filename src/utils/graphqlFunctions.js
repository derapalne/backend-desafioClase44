import ProductosService from "../services/index.js";
const service = new ProductosService();

const getById = async ({ id }) => {
    return await service.getById(id);
};

const getAll = async (req) => {
    if (req.campo && req.valor) {
        return await service.getCampoValor(campo, valor);
    } else {
        return await service.getAll();
    }
};

const add = async ({ datos }) => {
    return await service.add(datos);
};

const updateById = async ({ id, datos }) => {
    return await service.updateById(id, datos);
};

const deleteById = async ({ id }) => {
    return await service.deleteById(id);
};

const deleteAll = async () => {
    return await service.deleteAll();
}

export { getById, getAll, add, updateById, deleteById, deleteAll };
