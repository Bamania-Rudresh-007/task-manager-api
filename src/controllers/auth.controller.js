import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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


const login = async(req, res, next) => {

    try{
        const {email , password} = req.body;

        if(!password){
            return res.status(400).json({
                message: "Password is required",
            })
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                    message: "User not found"
                })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                meessage: "Invalid token, access denied",
            })
        }
        
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        res.json({
            message: "Login Successfull",
            token,
        })
    }catch(error){
        next(error);
    }
}


export {signUp, login}