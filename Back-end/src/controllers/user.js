const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await models.Users.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      const checkPass = bcrypt.compareSync(password, user.password);
      if (checkPass) {
        let token = jwt.sign({ user }, "BAOMAT", { expiresIn: '1d' })
        succesCode(res, {token, user}, "Đăng nhập thành công");
      } else {
        failCode(res, "Pasword không chính xác");
      }
    } else {
      failCode(res, "Email không chính xác");
    }
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

module.exports = { login };
