const {depositos} = require('../Banco de Dados/bancodedados');

function buscarDepositos(numero_conta) {
    const result = depositos.filter(deposito=>{
        return Number(deposito.numero_conta)===Number(numero_conta)
    });
    return result;
};

module.exports={buscarDepositos}