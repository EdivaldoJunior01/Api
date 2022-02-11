
const res = require("express/lib/response");
const {v4: uuid} = require("uuid")
const Lojas = require('../models/Lojas.js');

module.exports = {
    async index(request, response) {
        try {
            const lojas = await Lojas.find();//find busca uma info no banco
            return response.status(200).json({ lojas });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    },
    async store(request, response) {
        const { razao, cnpj, namefantasia } = request.body;

        if (!razao || !cnpj || !namefantasia) {
            return response.status(400).json({ error: "Missing razao, cnpj or namefantasia." })
        }
        const loja = new Lojas({
            _id: uuid(),
            razao,
            cnpj,
            namefantasia
        })
        try {
            await loja.save();//save insere um info no bd
            return response.status(201).json({ message: "Loja added succesfully!" });
        } catch (err) {
            response.status(400).json({ error: err.message });
        }
    },
    async update(request, response) {
        const { razao, cnpj, namefantasia } = request.body;
        if (!razao && !cnpj && !namefantasia) {
            return response
            .status(400)
            .json({ error: "Your must inform a new razao, cnpj or namefantasia." })
        }
        if (razao) response.loja.razao = razao; 
        if (cnpj) response.loja.cnpj = cnpj; 
        if (namefantasia) response.loja.namefantasia = namefantasia; 

        try{
            await response.loja.save();
            return response.status(200).json({message: "Loja update successfully"})
            
        }catch(err){
            response.status(500).json({error:err.message});
        }
    },
    async delete(request, response){
        try{
            await response.loja.remove();
            return response.status(200).json({message: "Loja deleted successfully"})

        }catch(err){
            response.status(500).json({error:err.message});
        }
    },
 
};
