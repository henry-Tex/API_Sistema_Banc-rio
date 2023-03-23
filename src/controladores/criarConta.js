let {contas,numeroConta} = require('../Banco de Dados/bancodedados')
const { verificarCPF } = require("../Funções Genéricas/verificarCPF");
const { verificarEmail } = require("../Funções Genéricas/verificarEmail");

function criarConta(req,res) {
    const {nome,cpf,data_nascimento,telefone,email,senha}=req.body;
    if (!nome,!cpf,!data_nascimento,!telefone,!email,!senha)return res.status(400).json({mensagem: "Todos campos obrigatórios devem ser preenchidos"});
    if (verificarCPF(cpf))return res.status(400).json({mensagem: "O CPF informado já existe cadastrado!"});
    if (verificarEmail(email))return res.status(400).json({mensagem: "O E-mail informado já existe cadastrado!"});
    numeroConta = numeroConta++
    contas.push ({
        numero: numeroConta.toString(),
        saldo: 0,
        usuario:{
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha}
    });
    return res.status(204).json({});
};

module.exports={criarConta};