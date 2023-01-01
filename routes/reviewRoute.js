const express = require('express')
const router = express.Router()
const {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
} = require('./../controllers/reviewController')
const {authorizeUser, check} = require('./../middlewares/authenticate')

router.get('/', getAllReviews)
router.get('/:reviewId', getSingleReview)
router.post('/', authorizeUser, createReview)
router.patch('/:reviewId', authorizeUser,updateReview)
router.delete('/:reviewId',authorizeUser, deleteReview)


module.exports = router