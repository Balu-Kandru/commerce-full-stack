const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    },
    quantities:{
        type: String,
        required: true,
        default:1
    },
    price:{
        type: String,
        required: true
    },
    name:{
        type:String,
        require:true
    }
});
const cartModal = mongoose.model("cart", cartSchema);
module.exports = cartModal;