const jwt = require('jsonwebtoken');


const jwtwebmiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;  

    if (!authorization) return res.status(401).json({ error: 'Token not found' });

    const token = authorization.split(' ')[1];  
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '12345'); 
        req.user = decoded;
        next();
    } catch (err) {
        console.log('JWT Verification Error:', err);
        res.status(401).json({ error: 'Invalid token' });
    }
};

// FUNCTION TO GENERATE TOKEN
const generatetoken = (userdata) => {
    return jwt.sign(userdata, process.env.JWT_SECRET || '12345', { expiresIn: '2h' }); // Ensure secret is a string
};

module.exports = { jwtwebmiddleware, generatetoken };
