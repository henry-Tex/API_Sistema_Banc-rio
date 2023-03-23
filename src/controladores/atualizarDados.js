const { buscarConta } = require('../Funções Genéricas/buscarConta');
const { verificarCPF } = require('../Funções Genéricas/verificarCPF');
const { verificarEmail } = require('../Funções Genéricas/verificarEmail');

function atualizarDados(req,res) {
    const {numeroConta} = req.params;
    const {nome,cpf,data_nascimento,telefone,email,senha} = req.body;
    let verificarConta = buscarConta(numeroConta);
    if (isNaN(Number(numeroConta))) return res.status(404).json({mensagem: 'O numero da conta não é válido'});
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) return res.status(400).json({mensagem: "Todos campos obrigatórios devem ser preenchidos"});
    if (verificarCPF(cpf) && cpf !== verificarConta.usuario.cpf) return res.status(400).json({mensagem: "O CPF informado já existe cadastrado!"});
    if (verificarEmail(email) && email !== verificarConta.usuario.email) return res.status(400).json({mensagem: "O E-mail informado já existe cadastrado!"});
        verificarConta.usuario.nome = nome;
        verificarConta.usuario.cpf = cpf;
        verificarConta.usuario.data_nascimento = data_nascimento;
        verificarConta.usuario.telefone = telefone;
        verificarConta.usuario.email = email;
        verificarConta.usuario.senha = senha;
    return res.status(204).json();
};

module.exports={atualizarDados};