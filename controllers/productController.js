const Product = require('./../models/Product')
const CustomError = require('./../errors')
const {StatusCodes} = require('http-status-codes')
const path = require('path')


const createProduct = async (req,res)=>{
    req.body.user = req.user.userId
    const product = await Product.create(req.body)
   res.status(StatusCodes.CREATED).json({product})
}

const getAllProducts = async (req,res)=>{
  const products = await Product.find({})
  .populate({path:'reviews'})


  res.status(StatusCodes.OK).json({numberOfProducts: products.length, products})
}

const updateProduct = async (req,res)=>{
    const {productId} = req.params
    const product = await Product.findOneAndUpdate({_id: productId}, req.body, {new: true, runValidators: true})
    
    if(!product){

        throw new CustomError.NotFoundError(`No product with id: ${productId}`)
    }

     res.status(StatusCodes.OK).json({product})
}

const deleteProduct = async (req,res)=>{
   const {productId} = req.params
   const product = await Product.findOne({_id: productId})

   if(!product){

        throw new CustomError.NotFoundError(`No product with id: ${productId}`)
    }

    await product.remove()

 res.status(StatusCodes.OK).json({msg: `Success! Product removed`})

}

const getSingleProduct = async (req,res)=>{
   const {productId} = req.params
   const product = await Product.findOne({_id: productId})
   .populate({path:'reviews'})
   

   if(!product){
    throw new CustomError.NotFoundError(`No product with id: ${productId}`)
   }
   
   res.status(StatusCodes.OK).json({product})
}

const uploadImage = async (req,res)=>{

    if(!req.files){
        throw new CustomError.BadRequestError(`No file to upload`)
    }

    if(!req.files.image.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError(`Not an image`)
    }

    const maxSize = 1024 * 1024

    if(req.files.image.size > maxSize){
        throw new CustomError.BadRequestError(`Please upload image smaller than 1MB`)
    }
    
    const {name: fileName, mv: moveFileTo} = req.files.image
    
    const imagePath = path.join(__dirname, `./../public/uploads/${fileName}`)

    await moveFileTo(imagePath)
  
    res.status(StatusCodes.OK).json({image: `/uploads/${fileName}`})
    
}
module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    uploadImage
}