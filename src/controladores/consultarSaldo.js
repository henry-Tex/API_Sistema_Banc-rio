const { buscarConta } = require('../Funções Genéricas/buscarConta');

function consultarSaldo(req,res) {
    const {numero_conta} = req.query;
    const result = buscarConta(numero_conta);
    const {saldo} = result;
    return res.status(200).json({saldo});
};
module.exports={consultarSaldo};