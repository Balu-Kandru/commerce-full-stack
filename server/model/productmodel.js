const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{
        type:String
    },
    category: {
        type:String
    },
    price: {
        type:Number
    },
    is_purchased:{
        type:Boolean,
        default:false
    },
    quantities:{
        type: String,
        required: true,
        default:1
    }

});
const itemModal = mongoose.model("items", itemSchema);
module.exports = itemModal;