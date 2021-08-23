const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const MyGraphQLSchema = require('./schema/scehma')
// const connect = require('./mongo')

const mongoose = require('mongoose')
const DB_URI = "mongodb+srv://rohan:rohan@cluster0.mi8y3.mongodb.net/project001?retryWrites=true&w=majority";

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', (event) => {
    console.log('Connected to DB')
})

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