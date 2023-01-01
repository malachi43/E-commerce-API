require('dotenv').config()
require('express-async-errors')
//express
const express = require('express')
const app = express()


//other packages
const morgan = require('morgan')

//to access cookie(s) in req.cookies
const cookieParser = require('cookie-parser')

//routers
const authRouter = require('./routes/authRoute')
const productRouter = require('./routes/productRoute')
const reviewRouter = require('./routes/reviewRoute')
const orderRouter = require('./routes/orderRoutes')



//security packages
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')

//middlewares
const fileUpload = require('express-fileupload')
const notFoundMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')
const userRouter = require('./routes/userRoute')

const PORT = process.env.PORT || 5000

//database
const connectDB = require('./db/connect')

app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))

app.use(helmet())
app.use(cors())
app.use(xss())
app.use(mongoSanitize())

app.use(express.static('./public'))
app.use(morgan('tiny'))
//to parse json data and access data on req.body
app.use(express.json())
app.use(fileUpload())
//signing our cookie
app.use(cookieParser(process.env.JWT_SECRET))


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/orders', orderRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)




const startApp = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
    
}

startApp()