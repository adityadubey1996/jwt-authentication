require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());


app.post('/login',(req,res) => {
    const {userName, password} = req.body;
    if(userName === 'aditya_dubey', password === '1234'){
const access_token = jwt.sign({sub : userName}, process.env.JWT_ACCESS_SECRET, {expiresIn : process.env.JWT_ACCESS_TIME})
return res.status(200).json({status : true, message : "noice", data : {access_token}});
    }

    return res.status(401).json({status : false, messsage : 'trying it out'});
})

app.get('/dashBoard',verifyToken, (req,res) => {
    return res.status(200).json({status : true, message : 'dashboard'})
})

function verifyToken(req,res,next){
    try{
    

        const token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.decode(token, process.env.JWT_ACCESS_SECRET);
        req.userData = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({status : false, messsage : 'try your luck next time',  error} )
    }
}

app.listen(3000, () => console.log('listening at 3000'));