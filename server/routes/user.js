const express = require("express");
const userModal = require("../model/usermodel");
const {checkExistingUser, generatePasswordHash} = require("../utilities");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res)=> {
    userModal.find({username: req.body.username}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].username, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Unauthorized user");
        }
    })
});

router.post("/signup", async (req, res)=> {
    if(await checkExistingUser(req.body.username)) {
        res.status(400).send("Username exist. Please try with different username");
    } else {
        if(req.body.password.length==0){
            res.status(400).send("please enter all the details");
        }else{
            generatePasswordHash(req.body.password).then((passwordHash)=> {
                userModal.create({username: req.body.username,
                                password: passwordHash})
                                .then(()=> { 
                                    res.status(200).send(`${req.body.username} added successfully`); 
                                }).catch((err)=> {
                                    res.status(402).send(err.message)
                })
            });
        }

    }
    
});



module.exports = router;




///verification
//token secretkey