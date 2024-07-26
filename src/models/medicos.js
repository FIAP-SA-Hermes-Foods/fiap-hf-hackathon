import mongoose from "mongoose";
   const medicoSchema = new mongoose.Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    crm: {type: String},
    especialidade: {type: String},

   }, {versionKey: false});

const medico = mongoose.model("medicos", medicoSchema);   

export {medico, medicoSchema};
