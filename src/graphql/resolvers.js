const { getProduct, getProducts, addProduct, deleteProduct, updateProduct, getProductsByCategory } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory, getCategories } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');


const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/)


const resolvers = {
  Query: {
    hello: () => 'Hola mundo',
    getPerson: (_, args) => `Hello my name is ${args.name}, I'm ${args.age} years old.`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => 'Palabra',
    getBoolean: () => true,
    getID: () => '121313424234',
    getNumbers: (_, args) => args.numbers,
    // Products
    product: getProduct,
    products: getProducts,
    // Category
    category: getCategory,
    categories: getCategories,
  },
  Mutation: {
    // Auth
    login,
    // Products
    addProduct,
    updateProduct,
    deleteProduct,
    // Category
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
}

module.exports = resolvers;
