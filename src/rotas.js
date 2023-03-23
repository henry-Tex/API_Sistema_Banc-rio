const express = require('express');
const rotas = express();

//middlewares
const {verificarSenha} = require('./Middlewares/verificarSenha');
const {verificarNumContas} = require('./Middlewares/verificarNumConta');
const {verificarSenhaCliente} = require('./Middlewares/verificarSenhaCliente');

//controladores
const {listarContas} = require('./controladores/listarContas');
const {consultarSaldo} = require('./controladores/consultarSaldo')
const {emitirExtrato} = require('./controladores/emitirExtrato');
const { atualizarDados } = require('./controladores/atualizarDados');
const { excluirConta } = require('./controladores/excluirConta');
const { criarConta } = require('./controladores/criarConta');
const { depositar } = require('./controladores/depositar');
const { sacar } = require('./controladores/sacar');
const { tranferencia } = require('./controladores/transferencia');

//rotas
rotas.get('/contas',verificarSenha,listarContas);
rotas.get('/contas/saldo',verificarNumContas,verificarSenhaCliente,consultarSaldo);
rotas.get('/contas/extrato',verificarNumContas,verificarSenhaCliente,emitirExtrato);

rotas.put('/contas/:numeroConta/usuario',verificarNumContas,atualizarDados);

rotas.delete('/contas/:numeroConta',verificarNumContas,excluirConta);

rotas.post('/contas',criarConta);
rotas.post('/transacoes/depositar',depositar);
rotas.post('/transacoes/sacar',sacar);
rotas.post('/transacoes/transferir',tranferencia);

module.exports={rotas};
