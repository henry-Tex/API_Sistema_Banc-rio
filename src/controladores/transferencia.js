const {transferencias} = require('../Banco de Dados/bancodedados');
const { buscarConta } = require('../Funções Genéricas/buscarConta');
const { geradorDeData } = require('../Funções Genéricas/geradorDeData');

function tranferencia(req,res) {
    const {numero_conta_origem,numero_conta_destino,valor,senha} = req.body;
    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) return res.status(400).json({mensagem:"Todos campos obrigatórios devem ser preenchidos"});
    const contaDeOrigem = buscarConta(numero_conta_origem);
    const contaDeDestino = buscarConta(numero_conta_destino);
    if (!contaDeOrigem) return res.status(404).json({mensagem:"Conta bancária de origem não encontada!"});
    if (!contaDeDestino) return res.status(404).json({mensagem:"Conta bancária de destino não encontada!"});
    if (contaDeOrigem.usuario.senha !== senha) return res.status(403).json({mensagem:"A senha do banco informada é inválida!"});
    const saldoResultante = contaDeOrigem.saldo-valor;
    if (saldoResultante < 0) return res.status(400).json({mensagem:"Não há saldo disponível para transferência"});
    contaDeOrigem.saldo = contaDeOrigem.saldo - valor;
    contaDeDestino.saldo = contaDeDestino.saldo + valor;
    const data = geradorDeData();
    transferencias.push({
        data,
        numero_conta_origem,
        numero_conta_destino,
        valor
    });
    return res.status(204).json({});
};

module.exports={tranferencia};