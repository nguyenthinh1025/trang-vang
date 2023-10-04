const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const { v4: uuidv4 } = require("uuid");
const models = initModel(sequelize);

const CreateImageBusiness = async (req, res) => {
  try {
    let { media } = req.body;
    const arrMedia = [];

    for (const img of media) {
      const createdImg = await models.Images.create({
        imageId: uuidv4(),
        businessId: img.businessId,
        imageUrl: img.imageUrl,
      });

      arrMedia.push(createdImg);
    }
    succesCode(res, arrMedia, "Thêm hình ảnh doanh nghiệp thành công");
  } catch (error) {
    failCode(res, " Lỗi backend");
  }
};
const UpdateAvatarBusiness = async (req, res) => {
  // try {
    let { id, avatar } = req.body;

    const result = await models.Businesses.update(
      {
        avatar,
      },
      {
        where: {
          businessId: id,
        },
      }
    );
    succesCode(res, result, "Thêm avatar doanh nghiệp thành công");
  // } catch (error) {
  //   failCode(res, " Lỗi backend");
  // }
};

module.exports = { CreateImageBusiness, UpdateAvatarBusiness };
