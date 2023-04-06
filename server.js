require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://adityadubey:adityadubey@cluster0.bzu5sg9.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology : true}).catch((error) => console.log(`error while connecting to mongoDb with error ${error}`))
// mongoose.connect(
//     `mongodb+srv://adityadubey:${process.env.DB_PASSWORD}@cluster0.bzu5sg9.mongodb.net/?retryWrites=true&w=majority`,
//     { useUnifiedTopology: true, useNewUrlParser: true},
//     () => console.log('connected to mongodb.')
// );

// middileware
app.use(express.json());

// routes
const auth_routes = require('./routes/auth.route');
const user_routes = require('./routes/user.route');

app.use('/v1/auth', auth_routes);
app.use('/v1/user', user_routes);



app.listen(3000, () => console.log('server is running..'));