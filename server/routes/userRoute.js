const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.post("/register", async(req, res) => {

    const newuser  = new User({ first_name : req.body.first_name , last_name : req.body.last_name, email : req.body.email, password : req.body.password})

    try {
        const user = await newuser.save()
        res.send("User Registered Successfully")
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/login", async(req, res) =>{

    const {email, password} = req.body

    try {
        const user = await User.findOne({email : email, password : password})
        if(user) {
            const temp = {
                first_name : user.first_name,
                last_name : user.last_name,
                email : user.email,
                _id : user._id,
            }
            res.send(temp)
        } else {
            return res.status(400).json({ message: "Login Failed "})
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports=router