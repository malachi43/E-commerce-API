const statusCodes = require('http-status-codes');
const CustomErroAPI = require('./customErroAPI');

class BadRequestError extends CustomErroAPI{
    constructor(message){
        super(message)
        this.statusCode = statusCodes.StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError
