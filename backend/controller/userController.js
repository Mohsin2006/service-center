import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, "fggfhhhghffgdg");
}

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const isAvailable = await userModel.findOne({ email });
        if (isAvailable) {
            return res.status(400).json({ success: false, message: "Email id already exists" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be 8 characters" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid Email Id" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            username: username,
            email: email,
            password: hashPassword,
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success: true, token, message: "Registered" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

const login =async (req, res) => {
    const {email, password}=req.body;
    try {
       const user= await userModel.findOne({email})
       if (!user) {
        res.json({success:false, message:"Please Signup first"})
       }
       const match=await bcrypt.compare(password, user.password);
       if (!match) {
        res.json({success:false, message:"Incorrect Password"})
       }
       const token=createToken(user._id)
       res.json({success:true,token, message:"Welcome"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})

    }
}

export { signup, login };
