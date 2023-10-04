const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { v4: uuidv4 } = require("uuid");

const getListAdvertisements = async (req, res) => {
  try {
    let result = await models.Advertisements.findAll();
    succesCode(res, result, "Lấy Danh Sách Quảng Cáo Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};


const createAdvertisements =async (req,res) =>{
  try {
    let {
      userName,
      userPhone,
      businessName,
      career,
      productService,
      createDate
     } = req.body;

    let result = await models.Advertisements.create({
      adId:uuidv4(),
      userName,
      userPhone,
      businessName,
      career,
      productService,
      createDate, 
      status:'pending'
    });
    succesCode(res, result, "Thêm Mới Quảng Cáo Doanh Nghiệp Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
}

module.exports = { getListAdvertisements  , createAdvertisements };
