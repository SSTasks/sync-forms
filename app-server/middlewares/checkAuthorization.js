module.exports = function checkAuthorization(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    // return res.redirect('/');
    return res.sendStatus(401);
}