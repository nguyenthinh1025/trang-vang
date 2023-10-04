const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const { succesCode, errorCode, failCode } = require('../reponse/reponse');
const models = initModel(sequelize)
const { Op } = require('sequelize');
const { v4: uuidv4 } = require("uuid");




const getMainCategory = async (req, res) => {
    try {
        const result = await models.MainCategory.findAll({ include: ['Categories'] });
        
        succesCode(res, result, `Lấy Danh Sách MainCategory Thành Công!!!`);
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}
const searchMainCategoryByName = async (req, res) => {
    let {name} = req.params;
    
    // Giải mã chuỗi trước khi sử dụng nó trong truy vấn
    name = decodeURIComponent(name); 
    try {
      const result = await models.Categories.findAll({  
        where: {
          categoryName: {
            [Op.like]: `%${name}%`
          }
        },
        include: ['business'],
      });
  
      const businesses = result.map(category => category.business);
      succesCode(res, businesses, `Lấy Danh Sách MainCategory Thành Công!!!`);
    } catch (error) {
      errorCode(res, "Lỗi Backend");
    }
  }
module.exports ={getMainCategory ,searchMainCategoryByName}