module.exports = function checkAuthorization(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    let err = new Error('Unauthorized');
    err.statusCode = 401;
    next(err);
}