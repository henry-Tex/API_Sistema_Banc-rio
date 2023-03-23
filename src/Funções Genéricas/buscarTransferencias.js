const {transferencias} = require('../Banco de Dados/bancodedados');

function transfEnviadas(numero_conta) {
    const result = transferencias.filter(transferencia=>{
        return Number(transferencia.numero_conta_origem)===Number(numero_conta)
    });
    return result;
};

function transfRecebidas(numero_conta) {
    const result = transferencias.filter(transferencia=>{
        return Number(transferencia.numero_conta_destino)===Number(numero_conta)
    });
    return result;
};

module.exports={transfEnviadas,transfRecebidas};