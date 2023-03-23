const {buscarConta } = require("../Funções Genéricas/buscarConta");
let {contas} = require('../Banco de Dados/bancodedados')

function excluirConta(req,res) {
    const {numeroConta} = req.params;
    const conta = buscarConta(numeroConta);
    if (conta.saldo === 0) {
    const indiceConta = contas.findIndex(conta=>{
        return Number(conta.numero) === Number(numeroConta);
    });
    contas.splice(indiceConta,1);
    return res.status(204).json({});
    }else return res.status(400).json({mensagem:"A conta só pode ser removida se o saldo for zero!"});
};

module.exports={excluirConta};