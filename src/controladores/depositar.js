const {depositos} = require('../Banco de Dados/bancodedados');
const { buscarConta } = require('../Funções Genéricas/buscarConta');
const { geradorDeData } = require('../Funções Genéricas/geradorDeData');

function depositar(req,res) {
    const {numero_conta,valor} = req.body;
    const conta = buscarConta(numero_conta);
    if (!numero_conta || !valor) return res.status(400).json({mensagem:"O número da conta e o valor são obrigatórios!"});
    if (!conta) return res.status(400).json({mensagem:"O número da conta não existe"});
    if (valor <= 0) return res.status(400).json({mensagem:"Não é possível depositar um valor zerado ou negativo"});
    const data = geradorDeData()
    conta.saldo = Number(conta.saldo) + Number(valor);
    depositos.push({
        data,
        numero_conta,
        valor
    });
    return res.status(204).json({});
};

module.exports={depositar};