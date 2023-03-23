const {buscarConta} = require('../Funções Genéricas/buscarConta')

function verificarSenhaCliente(req,res,next) {
    const {numero_conta,senha} = req.query;
    const result = buscarConta(numero_conta);
    if (Number(result.usuario.senha) !== Number(senha)) return res.status(401).json({mensagem: "A senha informada é inválida!"})
    next();
};

module.exports={verificarSenhaCliente};