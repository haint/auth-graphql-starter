const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummy: { type: graphql.GraphQLString }
  }
});

module.exports = RootQueryType;
