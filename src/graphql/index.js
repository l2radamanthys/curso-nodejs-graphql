const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');


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
    getProduct: () => {
      return {
        id: '123',
        name: 'Producto a',
        price: 100.0,
        description: 'Lipsun dolor sit anet',
        image: 'http://image.png',
        createdAt: new Date().toISOString()
      }
    }
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });
  await server.start();
  server.applyMiddleware({ app })
};


module.exports = useGraphql;
