const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const cors = require("cors");
const { dbUrl, port } = require("./utilities");

const userController=require("./routes/user")
const productController=require("./routes/products")
const cartController=require("./routes/cart");


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Database
mongoose.connect(dbUrl, (res)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.get("/", (req, res)=> {
    res.send("Ecommerce Backend")
});


app.use("/user",userController)
app.use("/product",productController)
app.use("/cart",cartController)

app.listen(port, (err)=> {
    if(!err) {
        console.log("Server started at port: ", port)
    } else {
        console.log(err);
    }
});