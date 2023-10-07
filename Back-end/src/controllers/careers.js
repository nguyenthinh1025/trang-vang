const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const getBussinessByCareers = async (req, res) => {
  try {
    const { title } = req.params;
    const business = await models.Careers.findAll({
      where: {
        careerName: {
          [Op.like]: `%${title}%`,
        },
      },
      include: ["business"],
    });

    succesCode(
      res,
      business,
      `Lấy Danh Sách Công Ty Theo ${title} Thành Công!!!`
    );
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const getAllCareers = async (req, res) => {
  try {
    let result = await models.Careers.findAll({
      include: [
        "business",
        {
          model: models.Businesses,
          as: "business",
          include: [{ model: models.Images, as: "Images" }],
        },
      ],
    });
    succesCode(res, result, `Lấy Danh Sách Ngành Nghề Thành Công!!!`);
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const createCareers = async (req, res) => {
  try {
    const { careerId, careerName, description, businessId, imageId } = req.body;
    let result = await models.Careers.create({
      careerId: uuidv4(),
      careerName,
      description,
      businessId,
      imageId,
    });
    succesCode(res, result, `Tao Ngành Nghề Thành Công!!!`);
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const searchCareersBusiness = async (req, res) => {
  const { name } = req.params;

  const decodedName = decodeURIComponent(name); 
  try {
    const result = await models.Careers.findAll({
      model: models.Careers,
      as: "Careers",
      where: {
        careerName: {
          [Op.like]: `%${decodedName}%`,
        },
      },
      include: [
        "business",
        {
          model: models.Businesses,
          as: "business",
          include: [
            {
              model: models.Careers,
              as: "Careers",
              where: {
                careerName: {
                  [Op.like]: `%${decodedName}%`,
                },
              },
            },
            "Locations",
            "Users",
            "Reviews",
            "Images",
            "Certificates",
            {
              model: models.Certificates,
              as: "Certificates",
              include: [{ model: models.Images, as: "image" }],
            },
          ],
        },
      ],
    });

    const businesses = result.map((category) => category.business);
    const advertisement = await models.Advertisements.findAll({      
      where: {
        career: {
          [Op.like]: `%${decodedName}%`,
        },
      },
      include: "image",
      order: [["stt", "ASC"]],
    });
    succesCode(
      res,
      { name, businesses, advertisement },
      `Lấy Danh Sách Công Ty Theo Ngành Nghề Thành Công!!!`
    );
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};
module.exports = { getBussinessByCareers, getAllCareers, createCareers , searchCareersBusiness};
