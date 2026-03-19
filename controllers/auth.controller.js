import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const signUp = async (req, res, next) => {
    try {
        const {name , email , password, role} = req.body;

        const encryptedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name,
            email,
            role,
            password: encryptedPassword,
        })

        res.json({
            message: "User registered successfully...",
            data: newUser,
        })
    } catch (error) {
        res.json({
            message: error.message
        })   
        next()
    }
}   