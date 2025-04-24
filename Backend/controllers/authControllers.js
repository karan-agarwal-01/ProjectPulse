const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const Register = async (req, res) => {

    const { firstname, lastname, email, username, password, role } = req.body;
    
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "User Already Exists" });

        const hashedPassword = await bcrypt.hash(password, 8);

        const newUser = new User({ firstname, lastname, email, username, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const Login = async (req, res) => {

    const { identifier, password } = req.body;

    try {
        const user = await User.findOne({ $or: [
            {email: identifier},
            {username: identifier}
        ]
        });
        
        if (!user) return res.status(404).json({ message: "User not found!" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({token, user: {id: user._id, firstname: user.firstname, lastname: user.lastname, username: user.username, email: user.email, role: user.role}});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { Register, Login };