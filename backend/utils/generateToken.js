import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    
    res.cookie("jwt", token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true, // prevent XSS attacks
        sameSite: 'strict', // prevent CSRF attacks
        secure : process.env.NODE_ENV !== 'development' // use secure cookies in deployment
    })

}

export default generateTokenAndSetCookie;