const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'manager', 'user'], deafault: 'user'}
}, {timestamps: true}
);

const User = mongoose.model("users", userSchema);

module.exports = User;