import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const VerifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json('Token não fornecido');
    } else {
        [ , token ] = token.split(' ');
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userEmail = decoded.email; 
        req.userPassword = decoded.password; 
        return next();
    } catch (error) {
        res.status(401).json('Você precisa fazer login!'  + error);
    }
}; 

export default VerifyToken;     