import express from "express";
import MedicoController from "../controllers/medicoController.js";

const routes= express.Router();

routes.get("/medicos", MedicoController.listarMedicos);
routes.get("/medicos/:id", MedicoController.listarMedicoPorID);
routes.post("/medicos", MedicoController.cadastrarMedico);
routes.put("/medicos/:id", MedicoController.atualizarMedico);
routes.delete("/medicos/:id", MedicoController.removerMedico);

export default routes;

