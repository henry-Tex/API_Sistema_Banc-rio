const {saques} = require('../Banco de Dados/bancodedados');

function buscarSaques(numero_conta) {
    const result = saques.filter(saque=>{
        return Number(saque.numero_conta) === Number(numero_conta) 
    });
    return result;
};

module.exports={buscarSaques};