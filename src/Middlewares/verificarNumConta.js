const {buscarConta} = require('../Funções Genéricas/buscarConta')

function verificarNumContas(req,res,next) {
    const {numero_conta} = req.query;
    const {numeroConta} = req.params;
    if (numero_conta){
        const result = buscarConta(numero_conta);
        if (!result) return res.status(404).json({mensagem:'Conta bancária não encontada!'});
        next();
    };
    if (numeroConta){
        const result = buscarConta(numeroConta);
        if (!result) return res.status(404).json({mensagem:'Conta bancária não encontada!'});
        next();
    };
};

module.exports={verificarNumContas};