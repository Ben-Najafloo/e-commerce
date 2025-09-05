const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        user_name: String,
        email: String,
        phone: String,
        city: String,
        address: String,
        postal_code: String
    },

    cart: [{
        _id: String,
        title: String,
        price: Number,
        quantity: Number,
        image: String,
        category: String,
        description: String,
        rating: {
            rate: Number,
            count: Number
        }
    }],
    totalPrice: Number,
    status: { type: String, default: "pending" },
    createAt: { type: String, default: Date.now }
})

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;