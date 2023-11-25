const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');


//Defining the userSchema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

//Defining the generateAuthToken method
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: '7d' });
    return token;
};

//Defining the User model
const User = mongoose.model('User', userSchema);

//Defining the validate function
const validate = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label('First Name'),
        lastName: joi.string().required().label('Last Name'),
        email: joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
    });
    return schema.validate(data);
};

module.exports = { User, validate };