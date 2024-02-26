const express  =require('express')
const middleware = require('./middleware')
const api =  require('./api')
const PORT  = process.env.PORT || 1337
const bodyParser =  require('body-parser')


const app = express()
app.use(middleware.cors)
app.use(bodyParser.json())
app.get('/products',api.listProducts)
app.get('/products/:id',api.getProduct)
app.post('/products',api.createProduct)
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`))



