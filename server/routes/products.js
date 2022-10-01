const express = require("express");
const itemModal = require("../model/productmodel");
const router = express.Router();

router.get("/show", (req, res)=> {
    itemModal.find().then((itemData)=> {
        res.status(200).send({item: itemData});
    });
});
router.post("/add", (req, res)=> {
    itemModal.insertMany(req.body).then((itemData)=> {
        res.status(200).send("Data Added Successfully");
    });
});

router.get("/purchased",(req,res)=>{
    itemModal.find({is_purchased:true}).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post("/buy",(req,res)=>{
    itemModal.findByIdAndUpdate(req.body.id,{is_purchased:true},{price:req.body.price}).then(()=>{
        res.status(200).send("successfully")
    }).catch((err)=>{
        console.log(err)
    })
})
router.get("/:category",(req,res)=>{
    itemModal.find({category:req.params.category}).then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;