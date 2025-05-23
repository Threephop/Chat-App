import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

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

        if(newUser){
            //generate a token here if needed
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            
            res.status(201).json({
                message: "User created successfully",
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ message: "User not created" });
        }

    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); //// password is empty string if user not found

        if(!user || !isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            message: "User logged in successfully",
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
            sameSite: 'strict',
            secure : process.env.NODE_ENV !== 'development'
        });
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("Internal Server Error");
    }
}