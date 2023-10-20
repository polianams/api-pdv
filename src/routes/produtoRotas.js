const express = require("express");
const rotas = express();

const produtoSchema = require("../schemas/produtoSchema");
const validarRequisicao = require("../middleware/validarRequisicaoMiddleware");
const verificarUsuarioLogado = require("../middleware/autenticacaoMiddleware");
const { cadastrarProduto } = require("../controller/produtos/cadastrar");
const { atualizarProduto } = require("../controller/produtos/atualizar");
// const { listarProdutos } = require("../controller/produtos/listar");
const{deletarProduto} = require("../controller/produtos/deletar")

rotas.post("/produto", validarRequisicao(produtoSchema), cadastrarProduto);
rotas.get("/produto/:id");
rotas.put("/produto/:id", validarRequisicao(produtoSchema), atualizarProduto);
rotas.delete("/produto/:id",verificarUsuarioLogado, deletarProduto);

module.exports = rotas;
