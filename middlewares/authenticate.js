const CustomErrors = require('../errors')
const jwt = require('../utils')
const CustomError = require('../errors')

const authorizeUser = (req,res,next)=>{
      const token = req.signedCookies.token

     if(!token){
       throw new CustomError.UnauthorizeError(`Not authorized to access this route`)
     }

     try {
      const payload = jwt.isTokenValid(token)
      req.user = payload
      next()
     } catch (error) {
      throw new CustomError.UnauthenticateError(`Not authorized to access this route`)
     }
   
}

const authorizePermissions = (...roles)=>{
  
   return (req,res,next)=>{
       if(roles.includes(req.user.role))
       {
         return next()
       }
       throw new CustomError.UnauthorizeError(`Access to admins only`)
   }
     
}

module.exports = {
    authorizeUser,
    authorizePermissions
}