import {medico} from "../models/medicos.js";

class MedicoController {

    static async listarMedicos (req, res) {

        try {

            const listaMedicos = await medico.find({}); 
            res.status(200).json(listaMedicos);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao listar médicos!`});
        }
    };

    static async listarMedicoPorID (req, res) {

        try {
            const id = req.params.id;
            const medicoEncontrado = await medico.findById(id); 
            res.status(200).json(medicoEncontrado);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao encontrar médico!`});
        }
    };

    static async cadastrarMedico (req, res) {

        try {

            const novoMedico = await medico.create(req.body);
            res.status(201).json({message: "Médico cadastrado com sucesso!", medico: novoMedico});

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao cadastrar médico!`});
        }
    };

    static async atualizarMedico (req, res) {

        try {

            const id = req.params.id;
            await medico.findByIdAndUpdate(id, req.body); 
            res.status(200).json({message: "Médico atualizado com sucesso!"});   

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao atualizar médico!`});
        }
    };

    static async removerMedico (req, res) {

        try {

            const id = req.params.id;
            await medico.findByIdAndDelete(id); 
            res.status(200).json({message: "Médico excluido com sucesso!"}); 

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao excluir médico!`});
        }
    };
};

export default MedicoController;