const statusCodes = require('http-status-codes');
const CustomErroAPI = require('./customErroAPI');

class UnauthenticateError extends CustomErroAPI{
    constructor(message){
        super(message)
        this.statusCode = statusCodes.StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticateError