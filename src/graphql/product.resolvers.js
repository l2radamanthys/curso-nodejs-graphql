const ProductsService = require('./../services/product.service');
const service = new ProductsService();


const getProduct = (_, { id }) => {
  return service.findOne(id);
}

const getProducts = async (_, args) => {
  const products = await service.find({});
  return products;
}

const addProduct = (_, { dto }) => {
  return service.create(dto);;
}

const updateProduct = async (_, { id, dto }) => {
  return service.update(id, dto);
}

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
