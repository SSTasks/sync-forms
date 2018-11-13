module.exports = function errorHandler(err, req, res, next) {
    console.log(err);

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    // res.status(err.statusCode || 500);
    // res.render('error');

    if (err.message === 'Username is already in use') {
        return res.status(err.statusCode).send(err.message);
    } else if (err.statusCode === 401) {
        return res.redirect('/login');
    } else {
        return res.sendStatus(500);
    }
}
