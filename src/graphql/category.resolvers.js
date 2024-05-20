const CategoryService = require('./../services/category.service');
const checkJwtGql = require('./../utils/checkJwtGql');
const checkRolesGql  = require('./../utils/checkRolesGql');

const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGql(context);
  checkRolesGql(user, 'admin', 'customer');
  return service.create({
    ...dto,
    image: dto.image.href
  });
}

const getCategory = (_, { id }) => {
  return service.findOne(id);
}

const getCategories = () => {
  return service.find({});
}


module.exports = { addCategory, getCategory, getCategories };
