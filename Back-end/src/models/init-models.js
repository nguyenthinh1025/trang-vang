const DataTypes = require("sequelize").DataTypes;
const _Advertisements = require("./Advertisements");
const _BusinessServices = require("./BusinessServices");
const _Businesses = require("./Businesses");
const _Careers = require("./Careers");
const _CareersType = require("./CareersType");
const _Categories = require("./Categories");
const _Certificates = require("./Certificates");
const _Events = require("./Events");
const _Favorites = require("./Favorites");
const _Images = require("./Images");
const _Keywords = require("./Keywords");
const _Locations = require("./Locations");
const _MainCategory = require("./MainCategory");
const _Products = require("./Products");
const _Promotions = require("./Promotions");
const _Reviews = require("./Reviews");
const _Services = require("./Services");
const _UserReviews = require("./UserReviews");
const _Users = require("./Users");

function initModels(sequelize) {
  const Advertisements = _Advertisements(sequelize, DataTypes);
  const BusinessServices = _BusinessServices(sequelize, DataTypes);
  const Businesses = _Businesses(sequelize, DataTypes);
  const Careers = _Careers(sequelize, DataTypes);
  const CareersType = _CareersType(sequelize, DataTypes);
  const Categories = _Categories(sequelize, DataTypes);
  const Certificates = _Certificates(sequelize, DataTypes);
  const Events = _Events(sequelize, DataTypes);
  const Favorites = _Favorites(sequelize, DataTypes);
  const Images = _Images(sequelize, DataTypes);
  const Keywords = _Keywords(sequelize, DataTypes);
  const Locations = _Locations(sequelize, DataTypes);
  const MainCategory = _MainCategory(sequelize, DataTypes);
  const Products = _Products(sequelize, DataTypes);
  const Promotions = _Promotions(sequelize, DataTypes);
  const Reviews = _Reviews(sequelize, DataTypes);
  const Services = _Services(sequelize, DataTypes);
  const UserReviews = _UserReviews(sequelize, DataTypes);
  const Users = _Users(sequelize, DataTypes);

  BusinessServices.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(BusinessServices, { as: "BusinessServices", foreignKey: "businessId"});
  Careers.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Careers, { as: "Careers", foreignKey: "businessId"});
  Categories.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Categories, { as: "Categories", foreignKey: "businessId"});
  Certificates.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Certificates, { as: "Certificates", foreignKey: "businessId"});
  Events.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Events, { as: "Events", foreignKey: "businessId"});
  Favorites.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Favorites, { as: "Favorites", foreignKey: "businessId"});
  Images.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Images, { as: "Images", foreignKey: "businessId"});
  Locations.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Locations, { as: "Locations", foreignKey: "businessId"});
  Promotions.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Promotions, { as: "Promotions", foreignKey: "businessId"});
  Reviews.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Reviews, { as: "Reviews", foreignKey: "businessId"});
  Users.belongsTo(Businesses, { as: "business", foreignKey: "businessId"});
  Businesses.hasMany(Users, { as: "Users", foreignKey: "businessId"});
  Careers.belongsTo(CareersType, { as: "careersType", foreignKey: "careersTypeId"});
  CareersType.hasMany(Careers, { as: "Careers", foreignKey: "careersTypeId"});
  Advertisements.belongsTo(Images, { as: "image", foreignKey: "imageId"});
  Images.hasMany(Advertisements, { as: "Advertisements", foreignKey: "imageId"});
  Careers.belongsTo(Images, { as: "image_Image", foreignKey: "image"});
  Images.hasMany(Careers, { as: "Careers", foreignKey: "image"});
  Certificates.belongsTo(Images, { as: "image", foreignKey: "imageId"});
  Images.hasMany(Certificates, { as: "Certificates", foreignKey: "imageId"});
  Products.belongsTo(Images, { as: "image", foreignKey: "imageId"});
  Images.hasMany(Products, { as: "Products", foreignKey: "imageId"});
  Categories.belongsTo(MainCategory, { as: "mainCategory", foreignKey: "mainCategoryId"});
  MainCategory.hasMany(Categories, { as: "Categories", foreignKey: "mainCategoryId"});
  UserReviews.belongsTo(Reviews, { as: "review", foreignKey: "reviewId"});
  Reviews.hasMany(UserReviews, { as: "UserReviews", foreignKey: "reviewId"});
  BusinessServices.belongsTo(Services, { as: "service", foreignKey: "serviceId"});
  Services.hasMany(BusinessServices, { as: "BusinessServices", foreignKey: "serviceId"});
  Products.belongsTo(Services, { as: "service", foreignKey: "serviceId"});
  Services.hasMany(Products, { as: "Products", foreignKey: "serviceId"});
  Favorites.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(Favorites, { as: "Favorites", foreignKey: "userId"});
  UserReviews.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(UserReviews, { as: "UserReviews", foreignKey: "userId"});

  return {
    Advertisements,
    BusinessServices,
    Businesses,
    Careers,
    CareersType,
    Categories,
    Certificates,
    Events,
    Favorites,
    Images,
    Keywords,
    Locations,
    MainCategory,
    Products,
    Promotions,
    Reviews,
    Services,
    UserReviews,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
