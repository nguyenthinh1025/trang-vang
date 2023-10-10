const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { v4: uuidv4 } = require("uuid");

const getListAdvertisements = async (req, res) => {
  try {
    let result = await models.Advertisements.findAll({include :'image', order: [['money', 'ASC']] });
    succesCode(res, result, "Lấy Danh Sách Quảng Cáo Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const createAdvertisements = async (req, res) => {
  try {
    let {
      userName,
      userPhone,
      businessName,
      career,
      productService,
      createDate,
    } = req.body;

    let result = await models.Advertisements.create({
      adId: uuidv4(),
      userName,
      userPhone,
      businessName,
      career,
      productService,
      createDate,
      status: "pending",
    });
    succesCode(res, result, "Thêm Mới Quảng Cáo Doanh Nghiệp Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const updateStatusAdvertisements = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await models.Advertisements.update(
      {
        status: "update",
      },
      {
        where: {
          adId: id,
        },
      }
    );
    succesCode(
      res,
      result,
      "Chờ cập nhật quảng cáo!!!"
    );
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const updateAdvertisements = async (req, res) => {
  try {
    let { id,  image, startDate, endDate, website, money } = req.body;
    let result = await models.Images.create({
      imageId: uuidv4(),
      imageUrl: image,
    });
    let result1 = await models.Advertisements.update(
      {
        status: "active",
        startDate,
        endDate,
        website,
        money,
        imageId : result.imageId
      },
      {
        where: {
          adId: id,
        },
      }
    );
    let adver = await models.Advertisements.findOne({where:{adId:id}})
    succesCode(
      res,
      adver,
      "Cập nhật trạng thái hoạt động quảng cáo thành công!!!"
    );
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};


module.exports = {
  getListAdvertisements,
  createAdvertisements,
  updateStatusAdvertisements,
  updateAdvertisements
};
