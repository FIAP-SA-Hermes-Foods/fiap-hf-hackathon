import express from "express";
import consultas from "./consultaRoutes.js";
import medicos from "./medicoRoutes.js";

const routes = (app)=> {
    
    app.route("/").get((req, res)=> res.status(200).send ("Agendar Consulta.js"));
    app.use(express.json(), consultas, medicos);

}

export default routes;