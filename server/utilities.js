const userModal = require("./model/usermodel");
const bcrypt = require("bcryptjs");

const checkExistingUser = async (username)=> {
    let existingUser = false;
    await userModal.find({username: username}).then((userData)=> {
        if(userData.length) {
            existingUser = true;
        }
    });
    return existingUser;
}

const generatePasswordHash = (password) => {
    const salt = 10;
    return new Promise((resolve, reject)=> {
         bcrypt.genSalt(salt).then((hashSalt)=> {
            bcrypt.hash(password, hashSalt).then((passwordHash)=> {
                resolve(passwordHash);
            })
        })
    });
}

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017";
const port = process.env.PORT || 3001;
const secretKey = process.env.SECRET_KEY || "New_Project";

module.exports = {
    checkExistingUser, generatePasswordHash,
    dbUrl, port, secretKey
};