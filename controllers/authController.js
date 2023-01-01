const User = require('./../models/User')
const CustomError = require('./../errors')
const utils = require('./../utils')
const { StatusCodes } = require('http-status-codes')

const register = async (req,res)=>{
  
    const {name, password, email } = req.body

    if(!name || !email || !password){
        throw new CustomError.BadRequestError(`Please provide name, email and password`)
    }

    //first registered user is an admin
    const emailAlreadyExists = await User.findOne({email})

    if(emailAlreadyExists){
        throw new CustomError.BadRequestError(`Email already exists`)
    }

    const isFirstAccount = await User.countDocuments({}) === 0

    const role = isFirstAccount ? 'admin' : 'user'

    const user = await User.create({name, password, email, role})

    const tokenUser = utils.createTokenUser(user)
     
    utils.attachCookiesToResponse(res, tokenUser)

    res.status(StatusCodes.CREATED).json({user: {
        name: user.name, 
        userId: user._id, 
        role: user.role
    }})
   
}

const login = async (req,res)=>{

   const {email, password} = req.body

   if(!email || !password){
    throw new CustomError.BadRequestError(`Please provide email and password`)
   }

   const user = await User.findOne({email})

   if(!user){
    throw new CustomError.UnauthorizeError(`No user with this email`)
   }
   
   const isPasswordMatch = await user.comparePassword(password)
   
   if(!isPasswordMatch){
    throw new CustomError.UnauthorizeError(`password is incorrect`)
   }

   const tokenUser = utils.createTokenUser(user)

   utils.attachCookiesToResponse(res, tokenUser )

   res.status(StatusCodes.OK).json({user: {
    name: user.name, 
    userId: user._id, 
    role: user.role
   }})
}

const logout = async = async (req,res)=>{

        res.cookie('token', 'null', {
            httpOnly: true,
            expires: new Date(Date.now())
           })
        
        res.status(StatusCodes.OK).json({msg: `You're logged out`})
           
    

   
          
   
}

module.exports = {
    register,
    login,
    logout
}