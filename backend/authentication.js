const jwt = require('jsonwebtoken');

// Middleware to validate JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, 'secret_supportingpaws');
        req.user = verified.user;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = authenticateToken;
