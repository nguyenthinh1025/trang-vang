const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const { succesCode, errorCode, failCode } = require('../reponse/reponse');
const models = initModel(sequelize)
const { Op } = require('sequelize');
const { v4: uuidv4 } = require("uuid");
const getBussinessByCareers = async (req, res) => {
    try {
        const { title } = req.params; 
        const result = await models.Careers.findAll({
            where: {
                careerName: {
                    [Op.like]: `%${title}%`
                }
            },
            include: ['business'] 
        });
        
        succesCode(res, result, `Lấy Danh Sách Công Ty Theo ${title} Thành Công!!!`);
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}

const getAllCareers = async(req,res)=>{
    try {
       
        let result = await models.Careers.findAll({  include: ['business',{
            model: models.Businesses,
            as: 'business',
            include: [{ model: models.Images, as: 'Images' }],
          }] })
        succesCode(res, result, `Lấy Danh Sách Ngành Nghề Thành Công!!!`)
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}


const createCareers = async(req,res)=>{
    try {
       const {careerId,careerName,description,businessId,imageId} = req.body;
        let result = await models.Careers.create({
            careerId:uuidv4(),
            careerName,
            description,
            businessId,
            imageId
        })
        succesCode(res, result, `Tao Ngành Nghề Thành Công!!!`)
    } catch (error) {
        errorCode(res, "Lỗi Backend");
    }
}


module.exports = {getBussinessByCareers,getAllCareers ,createCareers}