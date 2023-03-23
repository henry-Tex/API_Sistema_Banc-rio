const {saques} = require('../Banco de Dados/bancodedados');
const { buscarConta } = require('../Funções Genéricas/buscarConta');
const { geradorDeData } = require('../Funções Genéricas/geradorDeData');

function sacar(req,res) {
    const {numero_conta,valor,senha} = req.body;
    if (!numero_conta || !valor || !senha)return res.status(400).json({mensagem:"Todos campos obrigatórios devem ser preenchidos"});
    const conta = buscarConta(numero_conta);
    if (!conta) return res.status(404).json({mensagem:"Conta bancária não encontada!"});
    if (Number(conta.usuario.senha) !== Number(senha)) return res.status(403).json({mensagem:"A senha do banco informada é inválida!"});
    if (valor < 0) return res.status(400).json({mensagem:"O valor informado para saque não pode ser menor que zero!"});
    const saldoResultante = Number(conta.saldo)-Number(valor);
    if (saldoResultante < 0) return res.status(400).json({mensagem:"Não há saldo disponível para saque"});
    const data = geradorDeData();
    conta.saldo = saldoResultante;
    saques.push({
        data,
        numero_conta,
        valor
    });
    return res.status(204).json({});
};

module.exports={sacar};