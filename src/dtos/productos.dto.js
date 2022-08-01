export default class ProductoDto {
    constructor(datos) {
        // console.log("datos desde dto", {title: datos.title,price: datos.price,description: datos.description,});
        console.log("datos desde dto", datos);
        this.title = datos.title;
        this.price = datos.price;
        this.description = datos.description;
    }
}