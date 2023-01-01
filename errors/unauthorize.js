const statusCodes = require('http-status-codes');
const CustomErroAPI = require('./customErroAPI');

class UnauthorizeError extends CustomErroAPI{
    constructor(message){
        super(message)
        this.statusCode = statusCodes.StatusCodes.FORBIDDEN
    }
}

module.exports = UnauthorizeError