const mongoose = require('mongoose')

const options = {
    timestamps: true
}

const SingleOrderItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
})

const OrderSchema = new mongoose.Schema({
    tax: {
        type: Number,
        required: true
    },
    shippingFee: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    orderItems: {
        type: [SingleOrderItemSchema],
    },
    status: {
        type: String,
        enum: {
            values: ['pending','failed','delivered', 'paid', 'cancelled']
        },
        default: 'pending'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    clientSecret: {
        type: String,
        required: true
    },
    paymentIntentId: {
        type: String,
    }
    
}, options)

module.exports = mongoose.model('Order', OrderSchema)