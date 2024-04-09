module.exports = {
    isLoggedIn: function (req, res, next) {
        req.email ? next() : res.status(401);
        next(new Error('Não autorizado'));
    }
}