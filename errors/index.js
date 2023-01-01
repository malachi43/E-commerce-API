const BadRequestError = require('./badRequest')
const NotFoundError = require('./notFound')
const UnauthenticateError = require('./unauthenticate')
const UnauthorizeError = require('./unauthorize')
const CustomErroAPI = require('./customErroAPI')


module.exports = {
    BadRequestError,
    NotFoundError,
    UnauthenticateError ,
    CustomErroAPI,
    UnauthorizeError
}