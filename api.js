const Products = require("./products");

module.exports = {
  listProducts,
  getProduct,
  createProduct
};
async function listProducts(req, res) {
  
  const {offset = 0,limit=25} =req.query
  try {
    res.json(await Products.list({
      offset:Number(offset),
      limit:Number(limit)
    }));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
async function getProduct(req,res,next){
   const { id } = req.params
   try {
      const product = await Products.get(id)
      if(!product)return next()
      res.json(product)
   } catch (error) {
      req.status(500).json({error:error.message})
      
   }

next()

}

async function createProduct(req,res,next){
   const product =  await Products.create(req.body)
   res.json(product)
}