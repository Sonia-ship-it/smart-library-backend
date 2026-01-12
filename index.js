const express = require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const bookRoutes=require('./src/books/book.route')
const orderRoutes=require('./src/orders/order.route')
const userRoutes=require('./src/users/user.route')
const adminRoutes=require('./src/stats/admin.stats')
dotenv.config()
require('./config')
const app = express()
const port=process.env.PORT || 4000;
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173', 'https://smart-library-six.vercel.app'],
    credentials: true
}))
app.get('/', (req, res) => {
    res.send('Book store server is running')
})
app.use('/api/books', bookRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/auth',userRoutes)
app.use('/api/admin',adminRoutes)
app.listen(port, () => console.log(`Server running successful ${port}`))