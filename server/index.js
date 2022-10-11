const express=require('express')
const app =express()
const cors=require('cors')
const {graphqlHTTP}=require('express-graphql')
require('dotenv').config()
const connectDB=require('./config/db')
const schema =require('./schema/schema')

app.use(cors())

connectDB()

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='development'
}))

app.listen(process.env.PORT,()=>{
    console.log('server is runnion')
})