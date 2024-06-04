const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');

// router.post('/carrinhoCompras', controladorCarrinhoCompras.criarCarrinhoCompras);

router.post('/produtos', controladorProduto.criarProduto);
router.get('/produtos', controladorProduto.obterProdutos);
router.get('/produtos/:produtoId', controladorProduto.obterProduto);
router.delete('/produtos', controladorProduto.apagarProduto);
router.put('/produtos', controladorProduto.editProduto);

module.exports = router;
