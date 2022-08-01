import ProductoDto  from "../dtos/index.js";
import { config } from "../utils/index.js";
import ProductosFactory  from "../factories/index.js";

const createDao = async () => {
    const factory = new ProductosFactory();
    // console.log("hola");
    const dao = await factory.createDao(config.DB);
    //console.log("hola", dao);
    return dao;
}

export default class ProductosRepo {
    constructor() {
        return (async () => {
            const dao = await createDao();
            this.dao = dao;
            return this;})();
    }

    async add(prod) {
        console.log(this.dao.id);
        const dto = new ProductoDto(prod);
        return this.dao.save(dto);
    }

    async getAll() {
        const dtos = await this.dao.getAll();
        return dtos.map((dto) => new ProductoDto(dto));
    }

    async getById(id) {
        const daoResponse = await this.dao.getById(id);
        const dto = new ProductoDto(daoResponse);
        return dto;
    }

    async updateById(id, prod) {
        const dto = new ProductoDto(prod);
        return this.dao.updateById(id, dto);
    }

    async deleteById(id) {
        return this.dao.deleteById(id);
    }

    async deleteAll() {
        return this.dao.deleteAll();
    }
}
