const express = require('express')
const router = express.Router()
const {authorizePermissions,authorizeUser} = require('../middlewares/authenticate')
const {getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword} = require('../controllers/userController')


    router.get('/', authorizeUser, authorizePermissions('admin'), getAllUsers)
    router.patch('/updateUser',authorizeUser, updateUser)
    router.patch('/updateUserPassword',authorizeUser, updateUserPassword)
    router.get('/showMe',authorizeUser, showCurrentUser)
    router.get('/:userId',authorizeUser,getSingleUser)

    module.exports = router