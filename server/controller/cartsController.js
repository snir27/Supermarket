const Cart = require("../models/Cart");

const saveCartToDB = async (req, res) => {
  try {
    const { totalPrice, products } = req.query;
    const cart = await Cart.create({
      products,
      totalPrice,
    });
    if (cart) {
      res.status(200).send("Cart is saved");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  saveCartToDB
};
