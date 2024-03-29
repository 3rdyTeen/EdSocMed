const jwt = require('jsonwebtoken')
const { errorResponse } = require('../utils')
const User = require('../models/User')

exports.protect = async (req, res, next) => {
    let token;

    // check headers
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        // Set token from Bearer token in header
        token = req.headers.authorization.split(' ')[1];
    }
    // check cookies
    else if (req.cookies.token) {
        token = req.cookies.token;
    }
    
    // Make sure token exists
    if(!token)
        return next(new errorResponse('Not authorized to access this route', 401));

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decoded.id);
        
        next();
    } catch (err) {
        return next(new errorResponse('Not authorized to access this route', 401));
    }
}