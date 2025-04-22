import express from 'express';

const route = express.Router();

route.get('/login', (req, res) => {
    res.send('Login route');
});

export default route;