import { buildSchema } from "graphql";

export default buildSchema(`
    type Producto {
        id: ID!
        title: String,
        price: Int,
        description: String
    }
    input ProductoInput {
        title: String,
        price: Int,
        description: String
    }
    type Query {
        getById(id: ID!): Producto,
        getAll(campo: String, valor: String): [Producto],
    }
    type Mutation {
        add(datos: ProductoInput): ID,
        updateById(id: ID!, datos: ProductoInput): ID,
        deleteById(id: ID!): ID,
        deleteAll: Int 
    }

`)