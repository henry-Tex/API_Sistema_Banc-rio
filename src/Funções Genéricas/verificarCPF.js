const {contas} = require('../Banco de Dados/bancodedados');

function verificarCPF(cpf) {
    const result = contas.find(conta=>{
        return Number(conta.usuario.cpf) === Number(cpf)
    }); 
    if (result === undefined) return false;
    return result.usuario.cpf; 
};

module.exports={verificarCPF};