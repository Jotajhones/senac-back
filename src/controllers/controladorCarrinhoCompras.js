// const CarrinhoCompras = require('../models/modeloCarrinhoCompras');
// const Produto = require('../models/modeloProduto');

// const criarCarrinhoCompras = async (req, res) => {
//     try{
//         const idPproduto = req.body.idPproduto;
//         const { quantidadePedidos, valorTotal } = req.body;

//         if(!idPproduto) throw new Error('ID do Produto é obrigatório');
//         const produto = await Produto.findByPk(idPproduto);
//         if(!produto)throw new Error('Produto não encontrado');

//         const novoCarrinhoCompras = await CarrinhoCompras.create({ quantidadePedidos, valorTotal, idProduto: idPproduto });

//         res.status(201).json(novoCarrinhoCompras);
//     }catch (error){
//         res.status(400).json({ error: error.message })
//     }
// }

// const obterCarrinhoCompras = async (req, res) => {
//     try{ 
//     const carrinhoCompras = await findAll();

//     res.status(201).json(carrinhoCompras)
//     }catch (error){
//         res.status(400).json({ error: error.message })
//     }
// }

// module.exports = { criarCarrinhoCompras, obterCarrinhoCompras }