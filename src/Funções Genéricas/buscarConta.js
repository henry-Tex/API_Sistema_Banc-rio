const {contas} = require('../Banco de Dados/bancodedados')

function buscarConta(numConta){
    const result = contas.find(conta=>{
        return Number(conta.numero) === Number(numConta);
    });
    return result;
};

module.exports={buscarConta};