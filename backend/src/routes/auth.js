const { signup, login, logout, forgotPassword, resetPassword } = require('../controllers/Auth.controller')
const v1 = '/api/v1/auth';

module.exports = function (app) {
    //user signup
    app.post(
        `${v1}/signup`,
        signup
    )

    //user login
    app.post(
        `${v1}/login`,
        login
    )

    // user logout
    app.delete(
        `${v1}/logout`,
        logout
    )

    // user forgot password
    app.post(
        `${v1}/forgot-password`,
        forgotPassword
    )

    // user forgot password
    app.post(
        `${v1}/reset-password`,
        resetPassword
    )
}