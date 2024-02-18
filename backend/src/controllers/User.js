const { errorResponse } = require('../utils')
const User = require('../models/User')

exports.getAllUsers = (req, res, next) => {
    const aa =  req.user;
    res.json({
        aa
    })
}