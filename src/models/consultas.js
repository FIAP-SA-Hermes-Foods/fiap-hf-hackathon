import mongoose from "mongoose";
import { medicoSchema } from "./medicos.js";

const consultaSchema = new mongoose.Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    paciente: {type: String, required: true},
    email: {type: String},
    cpf: {type: Number},
    horario: {type: String},
    medico: medicoSchema
    
}, {
    versionKey: false
});

const consulta = mongoose.model("consultas", consultaSchema);

export default consulta;