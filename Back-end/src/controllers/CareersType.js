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
  const { name, location } = req.params;

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
        {
          model: models.Businesses,
          as: "business",
          include: [
            {
              model: models.Careers,
              as: "Careers",
              where: {
                careerName: {
                  [Op.like]: `%${name}%`,
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
          where: location
            ? {
                address: {
                  [Op.like]: `%${location}%`,
                },
              }
            : {},
        },
      ],
    });
    const currentDate = new Date(); 
    currentDate.setHours(currentDate.getHours() + 7);
    const businesses = result
      .map((category) => category.business)
      .filter((business) => {
        const endDate = new Date(business.endDate); 
        return endDate >= currentDate;
      })
     .sort((a, b) => b.money - a.money);
      const advertisement = await models.Advertisements.findAll({
        where: {
          career: {
            [Op.like]: `%${name}%`,
          },
          endDate: {
            [Op.gte]: currentDate, // Chỉ lấy những quảng cáo có endDate lớn hơn hoặc bằng ngày hiện tại
          },
        },
        include: "image",
        order: [["money", "DESC"]],
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

module.exports = { getCareersType, searchCareersByName };
