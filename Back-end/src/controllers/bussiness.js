const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const { succesCode, errorCode, failCode } = require("../reponse/reponse");
const models = initModel(sequelize);
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../routes/sendEmail");
const getBussiness = async (req, res) => {
  try {
    let result = await models.Businesses.findAll({
      include: [
        "location",
        "category",
        "Images",
        "Careers",
        "Users",
        {
          model: models.BusinessKeywords,
          as: "BusinessKeywords",
          include: [{ model: models.Keywords, as: "keyword" }],
        },
      ],
    });
    succesCode(res, result, "Lấy Danh Sách Công Ty Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const createImageBussiness = async (req, res) => {
  try {
    const { businessId, imageUrl } = req.body;
    let result = await models.Images.create({
      imageId: uuidv4(),
      businessId,
      imageUrl
    });
    succesCode(res, result, "Tạo hình ảnh cho doanh nghiệp thảnh công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};
const getBussinessById = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await models.Businesses.findOne({
      where: {
        businessId: id, // Assuming businessId is the column you want to filter by
      },
      include: [
        "Careers",
        {
          model: models.Careers,
          as: "Careers",
          include: [{ model: models.Images, as: "image_Image" }],
        },
        "Images",
        "Certificates",
        "Locations",
        "Users",
        "BusinessServices",
        {
          model: models.BusinessServices,
          as: "BusinessServices",
          include: [
            {
              model: models.Services,
              as: "service",
            },
            {
              model: models.Services,
              as: "service",
              include: [
                {
                  model: models.Products,
                  as: "Products",
                },
              ],
            },
          ],
        },
        "Certificates",
        {
          model: models.Certificates,
          as: "Certificates",
          include: [{ model: models.Images, as: "image" }],
        },
      ],
    });
    succesCode(res, result, "Lấy Danh Sách Công Ty Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};
const getListBussiness = async (req, res) => {
  try {
    let result = await models.Businesses.findAll({
      include: ["Images", "Users"],
    });
    succesCode(res, result, "Lấy Danh Sách Công Ty Thành Công!!!");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const updateStatusActiveBussiness = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await models.Businesses.update(
      {
        status: "active",
      },
      {
        where: {
          businessId: id,
        },
      }
    );
    let result1 = await models.Users.findOne({
      where: {
        businessId: id,
      },
    });
    let hashedPassword = await bcrypt.hashSync("123456", 10);
    let result2 = await models.Users.update(
      {
        password: hashedPassword,
      },
      {
        where: {
          businessId: id,
        },
      }
    );

    // Find the updated record in Users table
    let updatedUser = await models.Users.findOne({
      where: {
        businessId: id,
      },
    });
    let findBusiness = await models.Businesses.findOne({
      where: {
        businessId: id,
      },
    });
    const email = updatedUser.email;
    const fullName = updatedUser.fullName;
    const password = bcrypt.compareSync("123456", updatedUser.password);
    const business = findBusiness.businessName;
    sendEmail(
      email,
      "Đăng kí tài khoản thành công",
      `<!DOCTYPE html>
      <html lang="vi">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width,initial-scale=1"> 
          <title>Chúc Mừng Chiến Dịch Duyệt Thành Công</title>
          <style>
              body {
                  font-family: Arial, sans-serif
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px
              }
      
              .header {
                  background-color: #18dcff;
                  color: #fff;
                  text-align: center;
                  padding: 10px
              }
      
              .content {
                  padding: 20px
              }
              .footer {
                  margin-top: 50px;
                  background-color: #18dcff; /* Màu vàng */
                  color: white; /* Màu chữ */
                  text-align: center;
                  padding: 20px 10px;
                  border-radius: 0 0 5px 5px;
                  font-size: 18px;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              <div class="header">
                  <h1>Chúc Mừng</h1>
              </div>
              <div class="content">
                  <p>Xin chào <span style="font-weight: 800">${
                    fullName === null ? "doanh nghiệp" : fullName
                  }</span>,</p>
                  <p>Chào mừng bạn đến với Trang Vàng!</p>
                  <p>Doanh nghiệp <span style="font-weight: 800">${business}</span> đã được duyệt thành công và đăng trên trang chủ cộng đồng. Bạn đã trở thành một phần quan trọng của cộng đồng, và chúng tôi mong rằng bạn sẽ có những trải nghiệm thú vị và tìm kiếm được các hoạt động phù hợp.</p>
                  <p>- Tài khoản: <span style="font-weight: 700;">${email}</span></p>
                  <p>- Mật khẩu: <span style="font-weight: 700;">123456</span></p>
                  <div>
                      <p>Vui lòng nhấn vào đường liên kết <span><a href="http://localhost:3000/signin">trangvang.com</a></span> để truy cập vào doanh nghiệp của bạn. </p>
                  </div>
                  <p>Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, đừng ngần ngại hãy liên hệ với đội người hỗ trợ của chúng
                      tôi.</p>
                  <p>Chúc bạn có những trải nghiệm tuyệt vời!</p>
                  <p>Trân trọng,<br> <br>Trang Vàng</p>
                  <div class="footer">
                  Trang Vàng
              </div>
              </div>
          </div>
      </body>
      
      </html>`
    );

    succesCode(
      res,
      { findBusiness, updatedUser, email },
      "Duyệt doanh nghiệp hoạt động thành công!!!"
    );
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

const getCategoryIdAndLocationId = async (businessId) => {
  try {
    const business = await models.Businesses.findOne({
      attributes: ["categoryId", "locationId"],
      where: {
        businessId: businessId,
      },
    });

    if (!business) {
      throw new Error("Không tìm thấy doanh nghiệp với businessId đã cho.");
    }

    return business;
  } catch (error) {
    throw new Error(`Lỗi khi lấy categoryId và locationId: `);
  }
};
const createBusiness = async (req, res) => {
  try {
    const {
      businessName,
      businessNameEng,
      operator,
      address,
      phone,
      email,
      website,
      description,
      rating,
      numberOfRatings,
      establishedYear,
      tax,
      employees,
      fax,
      phoneOperator,
      emailOperator,
      province,
      createDate,
      // images,
      careers,
      services,
      category,
      locations,
      certificates,
      fullName,
      emailuser,
      phoneuser,
      position,
      zalouser,
    } = req.body;

    // Create the business
    const business = await models.Businesses.create({
      businessId: uuidv4(),
      businessName,
      businessNameEng,
      operator,
      address,
      phone,
      email,
      website,
      description,
      rating,
      numberOfRatings,
      establishedYear,
      tax,
      employees,
      fax,
      province,
      createDate,
      phoneOperator,
      emailOperator,
      services,
      category,
      locations,
      certificates,
      fullName,
      emailuser,
      phoneuser,
      zalouser,
      position,
      status: "pending",
    });

    // const createdImages = [];
    // for (const image of images) {
    //   const imageId = uuidv4();
    //   const createdImage = await models.Images.create({
    //     imageId,
    //     businessId: business.businessId,
    //     imageUrl: image.imageUrl,
    //   });
    //   createdImages.push(createdImage)
    // }

    const createdCareers = [];

    for (const career of careers) {
      const careerId = uuidv4();
      const createdCareer = await models.Careers.create({
        careerId,
        careerName: career.careerName,
        businessId: business.businessId,
        description: "string",
      });

      createdCareers.push(createdCareer);
    }
    const createdServices = [];

    for (const service of services) {
      const createdService = await models.Services.create({
        serviceId: uuidv4(),
        serviceName: service.serviceName,
        description: service.serviceName,
      });

      createdServices.push(createdService);

      const createdBussinessService = await models.BusinessServices.create({
        businessServiceId: uuidv4(),
        businessId: business.businessId,
        serviceId: createdService.serviceId,
      });
    }

    const createdCategory = [];

    for (const cate of category) {
      const createCategory = await models.Categories.create({
        categoryId: uuidv4(),
        categoryName: cate.categoryName,
        description: cate.categoryName,
        businessId: business.businessId,
      });

      createdCategory.push(createCategory);
    }
    const createdLocations = [];

    for (const location of locations) {
      const createLocation = await models.Locations.create({
        locationId: uuidv4(),
        locationName: location.locationName,
        description: location.locationName,
        businessId: business.businessId,
      });

      createdLocations.push(createLocation);
    }
    const createdCertificates = [];

    for (const certificate of certificates) {
      const createCertificates = await models.Certificates.create({
        certificateId: uuidv4(),
        certificateName: certificate.certificateName,
        businessId: business.businessId,
      });

      createdCertificates.push(createCertificates);
    }

    const createUser = await models.Users.create({
      userId: uuidv4(),
      fullName: fullName,
      email: emailuser,
      phone: phoneuser,
      zalo: zalouser,
      position: position,
      businessId: business.businessId,
    });

    succesCode(
      res,
      {
        business,
        careers: createdCareers,
        services: createdServices,
        category: createdCategory,
        locations: createdLocations,
        certificates: createdCertificates,
        user: createUser,
      },
      "Tạo business thành công"
    );
  } catch (error) {
    console.error(error);
    errorCode(res, "Lỗi Backend");
  }
};

const updateBusiness = async (req, res) => {
  try {
    let { id } = req.params;
    const {
      businessName,
      businessNameEng,
      operator,
      address,
      phone,
      email,
      website,
      description,
      rating,
      numberOfRatings,
      establishedYear,
      tax,
      employees,
      fax,
      province,
      createDate,
      phoneOperator,
      emailOperator,
      fullName,
      emailuser,
      phoneuser,
      zalouser,
      position,
    } = req.body;

    const result = await models.Businesses.update(
      {
        businessName,
        businessNameEng,
        operator,
        address,
        phone,
        email,
        website,
        description,
        rating,
        numberOfRatings,
        establishedYear,
        tax,
        employees,
        fax,
        province,
        createDate,
        phoneOperator,
        emailOperator,
      },
      {
        where: {
          businessId: id,
        },
      }
    );

    const result1 = await models.Users.update(
      {
        fullName,
        email: emailuser,
        phone: phoneuser,
        zalo: zalouser,
        position,
      },
      {
        where: {
          businessId: id,
        },
      }
    );
    const business = await models.Businesses.findOne({
      where: {
        businessId: id,
      },
    });
    const user = await models.Users.findOne({
      where: {
        businessId: id,
      },
    });
    succesCode(res, { business, user }, "Thành công");
  } catch (error) {
    errorCode(res, "Lỗi Backend");
  }
};

module.exports = {
  getBussiness,
  getListBussiness,
  createBusiness,
  getBussinessById,
  updateStatusActiveBussiness,
  updateBusiness,
  createImageBussiness
};
