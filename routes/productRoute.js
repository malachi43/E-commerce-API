const express = require('express')
const {authorizePermissions,authorizeUser} = require('../middlewares/authenticate')
const router = express.Router()
const {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    uploadImage
} = require('./../controllers/productController')

const {getSingleProductReviews} = require('../controllers/reviewController')

router.post('/', authorizeUser,authorizePermissions('admin'), createProduct)

router.get('/', getAllProducts)

router.post('/uploadImage',authorizeUser, authorizePermissions('admin'),uploadImage)

router.get('/:productId',getSingleProduct)

router.patch('/:productId',authorizeUser,authorizePermissions('admin'), updateProduct)

router.delete('/:productId', authorizeUser,authorizePermissions('admin'),deleteProduct)

router.get('/:productId/reviews', getSingleProductReviews)

module.exports = router