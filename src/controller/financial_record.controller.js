const recordService = require('../services/financial_record.service')

const create = async (req, res) => {

    const {description, registration_date, type, registration_value, registration_status} = req.body;

    if(!description || !registration_date || !type || !registration_value || !registration_status){
        res.status(400).send("Campo não preenchido, preencha todos os campos do formulário");
    }

    const financial_record = await recordService.createRecord(req.body);

    if(!financial_record){
        return res.status(400).send({erro: 'Error Creating financial_record'})
    }

    res.status(201).send({
        message: "Criação de registro feita com sucesso", 
        financial_record: {
            id: financial_record._id,
            description, 
            registration_date, 
            type, 
            registration_value,
            registration_status
        }
    })
}

module.exports = {create}