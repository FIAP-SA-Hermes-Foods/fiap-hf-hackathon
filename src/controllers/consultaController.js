import { medico } from "../models/medicos.js";
import consulta from "../models/consultas.js";

class ConsultaController {

    static async listarConsultas (req, res) {

        try {

            const listaConsultas = await consulta.find({}); 
            res.status(200).json(listaConsultas);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao listar consultas!`});
        }
    };

    static async listarConsultaPorID (req, res) {

        try {
            const id = req.params.id;
            const consultaEncontrada = await consulta.findById(id); 
            res.status(200).json(consultaEncontrada);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao encontrar consulta!`});
        }
    };

    static async cadastrarConsulta (req, res) {

        const novaConsulta = req.body;

        try {

            const medicoEncontrado = await medico.findById(novaConsulta.medico);
            const consultaCompleta = {...novaConsulta, medico: {...medicoEncontrado._doc}};
            const consultaCriada = await consulta.create(consultaCompleta);
            res.status(201).json({message: "Consulta cadastrada com sucesso!", consulta: novaConsulta});

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao cadastrar consulta!`});
        }
    };

    static async atualizarConsulta (req, res) {

        try {

            const id = req.params.id;
            await consulta.findByIdAndUpdate(id, req.body); 
            res.status(200).json({message: "Consulta atualizada com sucesso!"});   

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao atualizar consulta!`});
        }
    };

    static async removerConsulta (req, res) {

        try {

            const id = req.params.id;
            await consulta.findByIdAndDelete(id); 
            res.status(200).json({message: "Consulta excluida com sucesso!"}); 

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao excluir consulta!`});
        }
    };

    static async listarConsultasPorMedico (req, res) {
        const medicos = req.query.medicos;
        try {
            const consultasPorMedico = await consulta.find({medicos: medicos});
            res.status(200).json(consultasPorMedico);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha ao listar consultas por medico!`});
        }
      
    }
};

export default ConsultaController;