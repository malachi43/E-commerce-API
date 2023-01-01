const statusCodes = require('http-status-codes')
const path = require('path')

const notFoundMiddleware = (req,res)=>{
    res.status(statusCodes.StatusCodes.NOT_FOUND).sendFile(path.join(__dirname, '../public/notFound.html'))
}

module.exports = notFoundMiddleware