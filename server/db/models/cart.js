const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
    status: {
        type: Sequelize.ENUM("CART", "PURCHASED"),
        allowNull: false,
        defaultValue: "CART"
    }
    
});

module.exports = Cart;
