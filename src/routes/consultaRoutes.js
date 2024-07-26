import express from "express";
import ConsultaController from "../controllers/consultaController.js";

const routes= express.Router();

routes.get("/consultas", ConsultaController.listarConsultas);
routes.get("/consultas/busca", ConsultaController.listarConsultasPorMedico);
routes.get("/consultas/:id", ConsultaController.listarConsultaPorID);
routes.post("/consultas", ConsultaController.cadastrarConsulta);
routes.put("/consultas/:id", ConsultaController.atualizarConsulta);
routes.delete("/consultas/:id", ConsultaController.removerConsulta);

export default routes;

