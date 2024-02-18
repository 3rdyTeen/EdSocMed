const { getAllUsers } = require('../controllers/User')
const { protect } = require('../middleware/auth')

module.exports = (app) => {
    app.use(protect)

    app.get(
        '/api/v1/users',
        getAllUsers
    )
}