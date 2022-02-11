const mongoose = require('mongoose');
const lojaSchema = new mongoose.Schema({
    _id:{
        type: 'string',
        require: true,
    },
    razao:{
        type:'string',
        require: true,
    },
    cnpj:{
        type:'string',
        require: true,
    },
    namefantasia:{
        type:'string',
        require: true,
    }
});

module.exports = mongoose.model("Lojas", lojaSchema);