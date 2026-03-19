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

        const user = User.findOne({email});
        const isMatch = bcrypt.compare(password, user.password);
        
        if(!user || !isMatch){
            res.status(400).json({
                message: "Invalid Email or password"
            })
        }

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_sECRET,
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