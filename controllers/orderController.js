const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const Order = require('../models/Order')
const Product = require('../models/Product')
const utils = require('../utils/')

const fakeStripeAPI = async ({amount, currency})=>{
    
    const clientSecret = require('crypto').randomBytes(16).toString('hex')
    
    return {clientSecret, amount}
}

const getAllOrders = async (req,res)=>{

    const orders = await Order.find({})
    
    res.status(StatusCodes.OK).json({numOfOrders: orders.length, orders})
}

const getSingleOrder = async (req,res)=>{
    const {orderId} = req.params
    const order = await Order.findOne({_id: orderId})

    if(!order){
        throw new CustomError.NotFoundError(`No order with id: ${orderId}`)
    }
 
    utils.checkPermission(req.user, order.user)

    res.status(StatusCodes.OK).json({order})
}

const getCurrentUserOrders = async (req,res)=>{

    const {userId} = req.user

    const orders = await Order.find({user: userId})

    res.status(StatusCodes.OK).json({numOfOrders: orders.length, orders})
}

const createOrder = async (req,res)=>{
  
    const {tax, shippingFee, items:cartItems} = req.body
   
    if(!cartItems || cartItems.length === 0){
       throw new CustomError.BadRequestError(`No cart items provided`)
    }

    if(!tax || !shippingFee){
        throw new CustomError.BadRequestError(`Please provided tax and shipping fee`)
    }

   let orderItems = []
   let subtotal =  0

   for(let item of cartItems){
    const product = await Product.findOne({_id: item.product})

    if(!product){
        throw new CustomError.NotFoundError(`No product with id: ${item.product}`)
    }

  const {name, image, price, _id} = product

    let orderItem = {
        name,
        image,
        price,
        amount:  item.amount,
        product: _id
    }

    //add orderItem to orderItems array
    orderItems.push(orderItem)

    //calculating the subtotal for each product
    subtotal += price * item.amount

   }
    const total = tax + shippingFee + subtotal

    const paymentIntent = await fakeStripeAPI({
        amount: total,
        currency: 'usd'
    })

   const order = await Order.create({
    tax,
    shippingFee,
    subtotal,
    total,
    orderItems,
    user: req.user.userId,
    clientSecret: paymentIntent.clientSecret,
})
   
    res.status(StatusCodes.CREATED).json({order, clientSecret: order.clientSecret})
}

const updateOrder = async (req,res)=>{
    const { body:{ paymentIntentId }, params:{ orderId } } = req
   
    if(!paymentIntentId){
        throw new CustomError.BadRequestError(`Please provide payment intent`)
    }

    const order = await Order.findOne({_id: orderId})

    if(!order){
        throw new CustomError.NotFoundError(`No order with id: ${orderId}`)
    }

    utils.checkPermission(req.user, order.user)
    order.paymentIntentId = paymentIntentId,
    order.status = 'paid'

    await order.save()

   
    res.status(StatusCodes.OK).json({order})
}


module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}