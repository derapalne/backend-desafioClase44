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
        getProducto(id: ID!): Producto,
        getProductos(): [Producto],
    }
    type Mutation {
        createProducto(datos: ProductoInput): Producto,
        updateProducto(id: ID!, datos: ProductoInput): Producto,
        deleteProducto(id: ID!): Producto,
    }

`)