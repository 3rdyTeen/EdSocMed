const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { createJWT, createRandomToken, hashString } = require('../utils');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required.'],
        minlength: 3,
        maxlenth: 50
    },
    email:{
        type: String,
        required: [true, 'Email is requied.'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: [true, 'Password is requied.'],
        minlength: 6
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
     }
})

// Encypt Password
UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }

    this.password = await bcrypt.hashSync(this.password, 10);
})

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compareSync(enteredPassword, this.password);
};

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function() {
    return createJWT({ id:this._id, name: this.name, username:this.username });
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function() {
    // Generate token
    const resetToken = createRandomToken();
  
    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = hashString(resetToken);
    // Set expire
    const tenMinutes = 1000 * 60 * 10;
    this.resetPasswordExpire = new Date(Date.now() + tenMinutes);
  
    return resetToken;
};

module.exports = mongoose.model('User', UserSchema);