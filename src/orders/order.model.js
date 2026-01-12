const mongoose=require('mongoose')
const orderSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        street: {
            required: true,
            type: String,
        },
        city: {
        required: true,
        type: String,
    },
        country: String,
        state: String, 
        zipcode: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true
        }
    ],
    totalPrice:{
        type: Number,
        required: true,
    }
    }, {
        timestamps: true,
})
const Order=mongoose.model('Order',orderSchema);
module.exports=Order;