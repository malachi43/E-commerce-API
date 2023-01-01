const mongoose = require('mongoose')

const options = {timestamps: true}

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true,'Please provide rating'],
        min: 1,
        max:5
    },
    title: {
        type: String,
        trim: true,
        required: [true,'Please provide product title'],
        maxlength:100
    },
    comment: {
        type: String,
        required: [true,'Please provide review text'],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
}, options)

ReviewSchema.index({user: 1, product: 1},{unique: true})

ReviewSchema.statics.calculateNumOfReviewsAndAverageRating = async function(productId){

    const result = await this.model('Review').aggregate([

        { $match: {product: productId} },
        { $group: {_id: null, averageRating: {$avg: '$rating'}, numOfReviews: {$sum: 1}} }
    ])
  
   
     await this.model('Product').findOneAndUpdate({_id: productId }, {averageRating: Math.ceil(result[0]?.averageRating || 0), numOfReviews : result[0]?.numOfReviews || 0}, {new: true, runValidators: true})

}

ReviewSchema.post('save', async function(){
    await this.model('Review').calculateNumOfReviewsAndAverageRating(this.product)
    
})

ReviewSchema.post('remove', async function(){
    await this.model('Review').calculateNumOfReviewsAndAverageRating(this.product)
    
})

module.exports = mongoose.model('Review', ReviewSchema)