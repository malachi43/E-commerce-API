const statusCodes = require('http-status-codes')


const errorHandlerMiddleware = (err, req, res, next)=>{

    const CustomError = {
         msg: err.message || `Something went wrong, try again later`,
         statusCode: err.statusCode || statusCodes.StatusCodes.INTERNAL_SERVER_ERROR
    }

    if(err.name === 'ValidationError'){
        const error = Object.values(err.errors).map(item=> item.message).join(', ')
       CustomError.msg = error
    }

    if(err.name === 'CastError'){}

    if(err.code && err.code === 11000){}

res.status(CustomError.statusCode).json({msg: CustomError.msg})

}

module.exports = errorHandlerMiddleware
