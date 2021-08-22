const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const MyGraphQLSchema = require('./schema/scehma')
const app = express()
const port = 4000

app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})