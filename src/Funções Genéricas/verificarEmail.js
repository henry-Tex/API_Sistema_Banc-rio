const {contas} = require('../Banco de Dados/bancodedados');

function verificarEmail(email) {
    const result = contas.find(conta=>{
        return conta.usuario.email === email
    });     
    if (result === undefined) return false;
    return result.usuario.email; 
};

module.exports={verificarEmail};