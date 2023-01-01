const express = require('express')
const router = express.Router()
const {authorizeUser, authorizePermissions} = require('../middlewares/authenticate')

const {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
} = require('../controllers/orderController')

//Note can can only use authorizePermissions middleware if 'authorizeUser middleware is used
router.get('/', authorizeUser, authorizePermissions('admin'), getAllOrders)

router.post('/', authorizeUser, createOrder)

router.get('/showAllMyOrders', authorizeUser, getCurrentUserOrders)

router.get('/:orderId', authorizeUser, getSingleOrder)

router.patch('/:orderId', authorizeUser, updateOrder)



module.exports = router