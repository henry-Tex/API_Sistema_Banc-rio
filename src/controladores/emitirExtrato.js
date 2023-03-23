const {buscarSaques} = require('../Funções Genéricas/buscarSaques');
const {buscarDepositos} = require('../Funções Genéricas/buscarDepositos');
const { transfEnviadas, transfRecebidas } = require('../Funções Genéricas/buscarTransferencias')

function emitirExtrato(req,res) {
    const {numero_conta} = req.query;
    const saques = buscarSaques(numero_conta);
    const depositos = buscarDepositos(numero_conta);
    const transferenciasEnviadas = transfEnviadas(numero_conta);
    const transferenciasRecebidas = transfRecebidas(numero_conta);
        
    res.status(200).json({depositos,saques,transferenciasEnviadas,transferenciasRecebidas});
};

module.exports={emitirExtrato};