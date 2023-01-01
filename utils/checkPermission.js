const customError = require('./../errors')

const checkPermission = (requestingUser, userResourceId)=>{
    console.log(userResourceId.toString())
    if(requestingUser.role === 'admin') return

   //note we use userResource.id instead of userResource._id inorder to convert id to a string, because userResource._id returns an object
    if(requestingUser.userId === userResourceId.toString()) return 
    
    throw new customError.UnauthorizeError(`You cannot access this resource`)
}

module.exports = checkPermission