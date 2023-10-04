const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const { v4: uuidv4 } = require("uuid");
const models = initModel(sequelize);

const updateCertificates = async (req, res) => {
    try {
  let { certificateId, imageUrl } = req.body;
  let image = await models.Images.create({
    imageId: uuidv4(),
    imageUrl: imageUrl,
  });
  let certificates = await models.Certificates.update(
    {
      imageId: image.imageId,
    },
    {
      where: {
        certificateId: certificateId,
      },
    }
  );

  succesCode(
    res,
    { certificates, image },
    "Cập nhật hình ảnh chứng chỉ thành công"
  );
    } catch (error) {
      failCode(res, "Lỗi Backend");
    }
};

module.exports = { updateCertificates };
