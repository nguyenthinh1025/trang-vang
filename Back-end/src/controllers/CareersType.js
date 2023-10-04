const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const getCareersType = async (req, res) => {
  try {
    const result = await models.CareersType.findAll({
      include: [
        "Careers",
        {
          model: models.Careers,
          as: "Careers",
          include: [{ model: models.Images, as: "image_Image" }],
        },
      ],
    });

    succesCode(res, result, `Lấy Danh Sách Loại Ngành Ngề Thành Công!!!`);
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const searchCareersByName = async (req, res) => {
  let { name } = req.params;

  name = decodeURIComponent(name);
  // try {
  const result = await models.Careers.findAll({
    
    
      model: models.Careers,
      as: "Careers",
      where: {
        careerName: {
          [Op.like]: `%${name}%`,
        },
      },
    

    include: [
      "business",
      {
        model: models.Businesses,
        as: "business",
        include: [{ model: models.Careers, as: "Careers",
        where: {
          careerName: {
            [Op.like]: `%${name}%`,
          },
        },  },'Locations','Users',"Reviews","Images","Certificates",{
          model: models.Certificates,
          as: "Certificates",
          include: [{ model: models.Images, as: "image" }],
        },],
      },
    ],
  });

  const businesses = result.map((category) => category.business);
  succesCode(
    res,
    { name, businesses },
    `Lấy Danh Sách Công Ty Theo Ngành Nghề Thành Công!!!`
  );
  // } catch (error) {
  //   errorCode(res, "Lỗi Backend");
  // }
};
module.exports = { getCareersType, searchCareersByName };
