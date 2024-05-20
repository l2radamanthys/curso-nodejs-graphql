const { getProduct, getProducts, addProduct, deleteProduct, updateProduct } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory } = require('./category.resolvers');

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
    products: getProducts
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
  }
}

module.exports = resolvers;
