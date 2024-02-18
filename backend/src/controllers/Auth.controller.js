const User = require('../models/User')
const { createUsername, errorResponse, hashString } = require('../utils')

/**
 * @action      POST
 * @desc        Register User
 * @access      Public
 */

exports.signup = async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;

    if(!first_name || !last_name || !password || !email)
        return next(new errorResponse('Please provide all required fields', 400))

    const name = first_name + ' ' + last_name;

    const userExist = await User.findOne({email});

    if(userExist)
        return next(new errorResponse('Email already registered.', 400))
        
    let username = createUsername(name);
    let usernameSearch = {};
        usernameSearch.username = {$regex : `^${username}` , $options: 'si' }
    let usernameCount = await User.countDocuments(usernameSearch);

    if(usernameCount > 0)
        username += `${usernameCount}`;

    await User.create({
        name,
        email,
        username,
        password
    })

    res.status(200).json({
        success: true,
        message: "Successfully created account."
    });
}

/**
 * @action      POST
 * @desc        Login User
 * @access      Public
 */

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password)
        return next(new errorResponse('Please provide all fields.', 400))


    const user = await User.findOne({email});

    if(!user) return next(new errorResponse('Email or Password is invalid.', 401))

    const isPasswordMatched = await user.matchPassword(password);

    if(!isPasswordMatched) return next(new errorResponse('Email or Password is invalid.', 401))

    // Create token
    const token = user.getSignedJwtToken();
    const oneDay = 1000 * 60 * 60 * 24;

    const options = {
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
      signed: true,
      sameSite: 'strict',
      httpOnly: true
    };
  
    res
      .status(200)
      .cookie('token', token, options)
      .json({
        success: true,
        message: "Successfully Loggedin.",
        data: {
            token
        }
      });

}

/**
 * @action      Delete
 * @desc        Logout User
 * @access      Public
 */

exports.logout = async (req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true
    });
    
    res.status(200).json({ msg: 'User logged out!' });
}

/**
 * @action      POST
 * @desc        Forgot User Password
 * @access      Public
 */

exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findOne({email});

    if(!user) return next(new errorResponse('Email is not registered.', 404))

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset url
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/auth/resetpassword/${resetToken}`;
  
    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;


    res.status(200).json({
        status: 'success',
        data: message
    })
}

/**
 * @action      POST
 * @desc        Reset User Password
 * @access      Public
 */

exports.resetPassword = async (req, res, next) => {
    const { email, password, token } = req.body;

    if(!email || !password || !token)
        return next(new errorResponse('Provide required fields.', 400))

    const user = await User.findOne({email})

    if(!user) return next(new errorResponse('Email not registered.', 404))

    const current_date = new Date();

    if(
        user.resetPasswordToken === hashString(token) &&
        user.resetPasswordExpire > current_date
    ){
        user.password = password
        user.resetPasswordToken = null
        user.resetPasswordExpire = null

        await user.save();

        res.status(200).json({
            status: 'success',
            message: "Successfully reset password."
        })
    }else{
        return next(new errorResponse('Invalid Token', 400))
    }

    
}

