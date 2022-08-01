import chai from "chai";
import chaiHttp from "chai-http";
import { config } from "../utils/index.js";

const expect = chai.expect;

chai.use(chaiHttp);
const url = `http://localhost:${config.PORT}`;

let idProd1, idProd2;

describe("Prueba general del CRUD de la app", function () {
    describe("Inicializar la base de datos", function () {
        it("debería borrar todos los datos existentes", function (done) {
            chai.request(url)
                .delete("/api/prod/all/")
                .end((err, res) => {
                    // console.log(res.body);
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it("debería postear el primer producto", function (done) {
            chai.request(url)
                .post("/api/prod")
                .send({ prod: { title: "Té de Mango", price: 270, description: "Tomamangó!!!" } })
                .end((err, res) => {
                    // console.log(res.body);
                    idProd1 = res.body;
                    expect(res).to.have.status(201);
                    done();
                });
        });
        it("debería postear el segundo producto", function (done) {
            chai.request(url)
                .post("/api/prod")
                .send({
                    prod: {
                        title: "Jugo de china del buenó",
                        price: 400,
                        description: "Con pulpa, sin pulpa",
                    },
                })
                .end((err, res) => {
                    // console.log(res.body);
                    idProd2 = res.body;
                    expect(res).to.have.status(201);
                    done();
                });
        });
    });
    describe("Traer productos", function () {
        it("debería traer todos los productos", function (done) {
            chai.request(url)
                .get("/api/prod/")
                .end((err, res) => {
                    // console.log(res.body);
                    expect(res.body).to.have.lengthOf(2);
                    done();
                });
        });
        it("debería traer el primer producto", function (done) {
            chai.request(url)
                .get("/api/prod/" + idProd1)
                .end((err, res) => {
                    // console.log(res.body);
                    expect(res.body).to.have.property("title").to.equal("Té de Mango");
                    expect(res.body).to.have.property("price").to.equal(270);
                    expect(res.body).to.have.property("description").to.equal("Tomamangó!!!");
                    done();
                });
        });
        it("debería traer el segundo producto", function (done) {
            chai.request(url)
                .get("/api/prod/" + idProd2)
                .end((err, res) => {
                    // console.log(res.body);
                    expect(res.body).to.have.property("title").to.equal("Jugo de china del buenó");
                    expect(res.body).to.have.property("price").to.equal(400);
                    expect(res.body).to.have.property("description").to.equal("Con pulpa, sin pulpa");
                    done();
                });
        });
    });
    describe("Modificar productos", function () {
        it("debería modificar el primer producto", function (done) {
            chai.request(url)
                .put("/api/prod/" + idProd1)
                .send({
                    prod: {
                        title: "Quisiera ser una mosca",
                        price: 270,
                        description: "Para pararme en tu piel",
                    },
                })
                .end((err, res) => {
                    // console.log(res.body);
                    expect(res.body).to.equal(1);
                    done();
                });
        });
    });
    describe("Borrar productos", function () {
        it("debería borrar el segundo producto", function (done) {
            chai.request(url)
                .delete("/api/prod/" + idProd2)
                .end((err, res) => {
                    // console.log(res.body);
                    expect(res.body).to.equal(1);
                    done();
                });
        });
    });
});
