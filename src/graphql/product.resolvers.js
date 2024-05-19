const getProduct = (_, { id }) => {
  return {
    id: id,
    name: 'Producto a',
    price: 100.0,
    description: 'Lipsun dolor sit anet',
    image: 'http://image.png',
    createdAt: new Date().toISOString()
  }
}

const getProducts = (_, args) => {
  return [];
}


const addProduct = () => {
  return null;
}

module.exports = { getProduct, getProducts, addProduct };
