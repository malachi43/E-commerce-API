const jwt = require('jsonwebtoken')
const statusCode = require('http-status-codes')

const createToken = (payload)=>{

    return  jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFE_TIME})
   
    
}

const isTokenValid = (token)=>{

    return jwt.verify(token, process.env.JWT_SECRET)


}

const attachCookiesToResponse = (res, user)=>{
    const token = createToken(user)
    const oneDay = 1000 * 3600 * 24

    res.cookie('token', token, {
        expires: new Date(Date.now() + oneDay),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true
    })

}



module.exports = {
    createToken,
    isTokenValid,
    attachCookiesToResponse
}