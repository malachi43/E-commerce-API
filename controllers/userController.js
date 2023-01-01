const User = require('./../models/User')
const CustomError = require('./../errors')
const {StatusCodes} = require('http-status-codes')
const utils = require('./../utils')

const getAllUsers = async (req,res)=>{

   const users = await User.find({role: 'user'}).select('-password')

   res.status(StatusCodes.OK).json({numberOfUsers: users.length, users})
}

const getSingleUser = async (req,res)=>{
    const {userId} = req.params
    const user = await User.findOne({_id: userId}).select('-password')

    if(!user){
        throw new CustomError.NotFoundError(`No user with this id: ${userId} `)
    }
   
    utils.checkPermission(req.user, user._id)

    res.status(StatusCodes.OK).json({user})
}

const showCurrentUser = (req,res)=>{
    const {name, userId, role}= req.user
    res.status(StatusCodes.OK).json({user: {name, role, userId}})
}

const updateUser = async (req,res)=>{
    const {name, email} = req.body

    if(!name || !email){
        throw new CustomError.BadRequestError(`Please provide name and email`)
    }

    const user = await User.findOneAndUpdate(
        {_id: req.user.userId}, 
        {name, email}, 
        {new: true, runValidators: true}
    )
     
    const tokenUser = utils.createTokenUser(user)

    utils.attachCookiesToResponse(res, tokenUser)

    res.status(StatusCodes.OK).json({Updated_User: user})
}

const updateUserPassword = async (req,res)=>{
    const {oldPassword, newPassword} = req.body

    if(!oldPassword || !newPassword){
        throw new CustomError.BadRequestError(`Please provide both values`)
    }

    const user = await User.findOne({_id: req.user.userId})

    const isPasswordMatch = await user.comparePassword(oldPassword)

    if(!isPasswordMatch){
        throw new CustomError.UnauthenticateError(`Invalid Credentials`)
    }

    user.password = newPassword
    
    await user.save()

    res.status(StatusCodes.OK).json({msg: `Password successfully updated`})

   
    
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}
