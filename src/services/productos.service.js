import ProductosRepo from "../repositories/index.js";
const repo = await new ProductosRepo();
export class ProductosService {
    constructor() {}

    async add(prod) {
        return await repo.add(prod);
    }

    async getAll() {
        return await repo.getAll();
    }

    async getCampoValor(campo, valor) {
        return await repo.getCampoValor(campo, valor);
    }

    async getById(id) {
        return await repo.getById(id);
    }

    async updateById(id, prod) {
        return await repo.updateById(id, prod);
    }

    async deleteById(id) {
        return await repo.deleteById(id);
    }

    async deleteAll() {
        return await repo.deleteAll();
    }
}
