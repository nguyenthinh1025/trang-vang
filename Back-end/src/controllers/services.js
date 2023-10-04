const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { v4: uuidv4 } = require("uuid");
const updateServices = async (req, res) => {
  try {
    const { serviceId, serviceName, description, products } = req.body;
    let result = await models.Services.update({
      serviceId,
      serviceName,
      description,
      products ,
    }, {
        where:{
            serviceId
        }
    });
    for (const product of products) {
        await models.Products.update(
          { productName: product.productName },
          { where: { serviceId, productId: product.productId } }
        );
      }
    succesCode(res, result, "Lấy Danh Sách Công Ty Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const createServices = async (req, res) => {
  // try {
    const {  serviceName, description , businessId} = req.body;
    let service = await models.Services.create({
      serviceId:uuidv4(),
      serviceName,
      description,
    });
    let businessService = await models.BusinessServices.create({
      businessServiceId:uuidv4(),
      businessId,
      serviceId:service.serviceId ,
    });
    succesCode(res, {service, businessService}, "Tạo Mới Sản Phẩm Dịch Vụ Thành Công!!!");
  // } catch (error) {
  //   errorCode(res, "Lỗi Backend");
  // }
};

module.exports ={updateServices, createServices}