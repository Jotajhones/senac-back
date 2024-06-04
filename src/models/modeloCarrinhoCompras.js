// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/dbConfig');
// const Produto = require('./modeloProduto');

// const CarrinhoCompras = sequelize.define('CarrinhoCompras', {
//     qtd: {
//         type: DataTypes.NUMBER,
//         allowNull: false,
//     },
//     valorTotal: {
//         type: DataTypes.DOUBLE,
//         allowNull: false,
//     },
// });
// //through option
// CarrinhoCompras.belongsToMany(Produto);
// Produto.belongsToMany(CarrinhoCompras);

// module.exports = CarrinhoCompras;
