const Product = require('../models/Product')
const Review = require('../models/Review')
const CustomError = require('../errors')
const {StatusCodes} = require('http-status-codes')
const utils = require('../utils')

const createReview = async (req,res)=>{
    const {product: productId} = req.body
    const {userId} = req.user
  
    const isProductPresent = await Product.findOne({_id: productId})

    if(!isProductPresent){
        throw new CustomError.NotFoundError(`No product with id: ${productId}`)
    }

    const alreadySubmittedReview = await Review.findOne({product: productId, user: userId}) 

    if(alreadySubmittedReview){
        throw new CustomError.BadRequestError(`Already submitted review for the product`)
    }
     req.body.user = userId
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({review})
}

const getAllReviews = async (req,res)=>{
    
    const reviews = await Review.find({})
    .populate({path: 'user', select: 'name'})
    .populate({path: 'product', select: 'name company price'})

    res.status(StatusCodes.OK).json({reviews, count: reviews.length})
}
const getSingleReview = async (req,res)=>{
   const {reviewId} = req.params
    const review = await Review.findOne({_id: reviewId})
    .populate({path: 'user', select: 'name'})
    .populate({path: 'product', select: 'name company price'})
    
    if(!review){
        throw new CustomError.NotFoundError(`No review with id: ${reviewId}`)
    }
   res.status(StatusCodes.OK).json({review})
}

const updateReview = async (req,res)=>{

    const {comment, title, rating} = req.body;
    
    const {reviewId} = req.params;

    const review = await Review.findOne({_id: reviewId})

    if(!review){
        throw new CustomError.NotFoundError(`No review with id: ${reviewId}`)
    }

    utils.checkPermission(req.user, review.user)

    review.comment = comment;
    review.title = title;
    review.rating = rating;

    await review.save();

    res.status(StatusCodes.OK).json({ review });

}

    
    const deleteReview = async (req,res)=>{
    
    const {reviewId} = req.params

    const review = await Review.findOne({_id: reviewId})
   
    if(!review){
        throw new CustomError.NotFoundError(`No review with id: ${reviewId}`)
    }


     utils.checkPermission(req.user, review.user)

     await review.remove()

     res.status(StatusCodes.OK).json({msg:`success! review removed`})
}
const getSingleProductReviews = async (req,res)=>{
    const {productId} = req.params

    const reviews = await Review.find({product: productId})

    res.status(StatusCodes.OK).json({count: reviews.length, reviews})
}
module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    getSingleProductReviews
}