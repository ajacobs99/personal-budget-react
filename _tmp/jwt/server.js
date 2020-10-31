const express = require('express');
const app = express(); 

const jwt = require('jsonwebtoken'); 
const exjwt = require('express-jwt'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 

// const state = {}; 
// const title = ''
// const url = 'index.html'

// history.pushState(state, title, url); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization'); 
    next(); 
}); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 3000; 

const secretKey = 'My super secret key'; 

const jwtMW = exjwt({
    secret: secretKey, 
    algorithms: ['HS256']
}); 

let users = [
    {
        id: 1, 
        username: 'audrey', 
        password: '123'
    }, 
    {
        id: 2, 
        username: 'jacobs', 
        password: '456'
    }
]; 

app.post('/api/login', (req, res) => {
    const{ username, password } = req.body; 

    for(let user of users){
        if (username == user.username && password == user.password){
            let token = jwt.sign({ id : user.id, username: user.username }, secretKey, { expiresIn: '7d'}); 
                res.json({
                    success: true, 
                    err: null, 
                    token
                }); 
                break; 
        }
        else {
                res.status(401).json({
                    success: false, 
                    token: null, 
                    err: 'username or password is incorrect'
                }); 
            }
    }
}); 

app.get('/api/dashboard', jwtMW, (req, res) => {
    res.json({
        success: true, 
        myContent: 'secret content that only logged in people can see!!!'
    });  
}); 

app.get('/api/prices', jwtMW, (req, res) => {
    res.json({
        success: true, 
        myContent: 'This is price!!!'
    });  
}); 
// code exercise 4
app.get('/api/settings', jwtMW, (req, res) => {
    res.json({
        success: true, 
        myContent: 'This is settings!!!'
    });  
}); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
}); 

app.use(function (err, req, res, next){
    if (err.name === 'UnauthorizedError'){
        res.status(401).json({
            success: false, 
            officialError: err,
            err: 'username or password is incorrect 2'
        }); 
    }
    else{
        next(err);  
    }
}); 

app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`); 
}); 