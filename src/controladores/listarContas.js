const {contas} = require('../Banco de Dados/bancodedados')

function listarContas(req,res) {
    if (contas.length===0) return res.status(200).json(contas);
    return res.status(200).json(contas);
};
module.exports={listarContas};