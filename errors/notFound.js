const statusCodes = require('http-status-codes');
const CustomErroAPI = require('./customErroAPI');

class NotFoundError extends CustomErroAPI{
    constructor(message){
        super(message)
        this.statusCode = statusCodes.StatusCodes.NOT_FOUND
    }
}

module.exports = NotFoundError