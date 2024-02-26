const path = require('path')
const fs =  require('fs').promises

module.exports = {
   list,
   get
}

async function list(opts={}){
   const {offset=0, limit=25} = opts
   const ProductsFile = path.join(__dirname,'./products.json')
   const data =  await fs.readFile(ProductsFile)

   return JSON.parse(data).slice(offset,offset+limit)
}
async function get(id){
   const ProductsFile = path.join(__dirname,'./products.json')
   const data =  await fs.readFile(ProductsFile)

   const products = await JSON.parse(data)

   const product = products.filter(product=>product.id == id)
   if (product) return product

   return null
}