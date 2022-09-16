const { verifyToken } = require("./verifyTokens");

exports.verifyUser = (req, res, next) => {
   
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).send({ message: "You are not authorized", success: false });
        }
    });
}

exports.verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(403).send({ message: "You are not a admine", success: false });
        }
    });
}