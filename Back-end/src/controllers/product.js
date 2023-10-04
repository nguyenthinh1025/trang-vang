const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { v4: uuidv4 } = require("uuid");

const createProduct = async (req, res) => {
    try {
  let { products } = req.body;
  const arrProduct = [];
  for (const product of products) {
    const pro = await models.Products.create({
      productId: uuidv4(),
      productName: product.productName,
      description: product.description,
      serviceId: product.serviceId,
    });
    arrProduct.push(pro);
  }
  succesCode(res, arrProduct, "Thêm Sản Phẩm Thành Công!!!");
    } catch (error) {
      errorCode(res, "Lỗi Backend");
    }
};

module.exports = { createProduct };
