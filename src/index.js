const express = require('express');


const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
//const User = require('./schema/userSchema');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})


app.listen(ServerConfig.PORT,async () => {
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}...!!`);
    
    //const newUser = await User.create({
    //       email: 'a@b.com',
    //       password: '123456',
    //       firstName:'Jonathan',
    //       lastName: 'Majors',
    //       mobileNumber: '123123120'
    // });

    //console.log("Created new user");
    //console.log(newUser);

});


//34.5.12.8:5500 -> socket  address for other laptop
//localhost:5500-> socket address fpr own laptop        