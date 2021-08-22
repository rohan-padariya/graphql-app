const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

var books = [
    {
        id: '1',
        name: '1name',
        genre: '1genre',
    },
    {
        id: '2',
        name: '2name',
        genre: '2genre',
    },
    {
        id: '3',
        name: '3name',
        genre: '3genre',
    },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // args.id
                return books.find(book => book.id == args.id)
            }
        }
    }
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
