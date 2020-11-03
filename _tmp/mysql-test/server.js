const express = require ('express'); 
const mysql = require ('mysql'); 
const SimpleCrypto = require('simple-crypto-js').default; 
const bodyParser = require('body-parser'); 

const port = process.env.port || 3000; 
const app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const key = "testing"; 
const simpleCrypto = new SimpleCrypto(key); 

var connection = mysql.createConnection({
    host     : 'sql9.freemysqlhosting.net', 
    user     : 'sql9373649', 
    password : 'NkWCPxnUvd', 
    database : 'sql9373649'
}); 

function encryptPassword(password){
    const pass = simpleCrypto.encrypt(password); 
    return pass; 
} 
function transformDate(date){
    date = date || new Date(); 
    return date.toISOString().split('T')[0]; 
}

app.post('/api/signup', (req, res) => {
    console.log(req.body); 
    const{username, password} = req.body;
    
    const pwd = encryptPassword(password); //write function: encrypt
    const date = transformDate(new Date());  //write function: transform mysql date format 
    console.log(username,pwd);  

    connection.connect(); 
    connection.query('INSERT INTO user VALUES ("", ?, ?, date)', [username, pwd, date], function (error, results, fields){
        connection.end(); 
        if(error) throw error; 
        res.json(results); 
    });
 
 }); 
app.get('/', async (req, res) => {
    connection.connect(); 
    connection.query('SELECT * FROM budget', function(error, results, fields){
        connection.destroy(); 
        if(error) throw error; 
        res.json(results); 
    }); 

}); 

app.listen(port, ()=>{
    console.log(`Server on port ${port}`); 
}); 