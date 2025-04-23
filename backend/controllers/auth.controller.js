import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        if(password !== confirmPassword){ 
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ username });
        if(user){
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // https://avatar-placeholder.iran.liara.run

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const login = (req, res) => {
    console.log("Login User");
    res.send("Login User");
}

export const logout = (req, res) => {
    console.log("Logout User");
    res.send("Logout User");
}