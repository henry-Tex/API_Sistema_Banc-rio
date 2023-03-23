const {banco} = require('../Banco de Dados/bancodedados')

function verificarSenha(req,res,next) {
    const {senha} = banco
    const {senha_banco} = req.query;
    if (!senha_banco) return res.status(403).json({mensagem:'A senha do banco não foi informada'});
    if (senha_banco !== senha) return res.status(403).json({mensagem:'A senha do banco informada é inválida!'});
    next();
};

module.exports={verificarSenha};