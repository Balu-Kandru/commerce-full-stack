const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const cors = require("cors");

const userController=require("./routes/user")
const productController=require("./routes/products")
const cartController=require("./routes/cart")
//server

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Database co
mongoose.connect("mongodb+srv://Balu_Kandru:Balu1998@instagram.anvjmni.mongodb.net/commerce?retryWrites=true&w=majority", (res)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.get("/", (req, res)=> {
    res.send("Ecommerce Backend")
});

//middleware
app.use("/user",userController)
app.use("/product",productController)
app.use("/cart",cartController)

app.listen(3001, (err)=> {
    if(!err) {
        console.log("Server started at port 3001")
    } else {
        console.log(err);
    }
});