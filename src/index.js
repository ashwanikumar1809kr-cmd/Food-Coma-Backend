const express = require('express');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./Routes/userRoute');
const cartRouter = require('./Routes/cartRoute');
//const User = require('./schema/userSchema');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true }));

//Routing mdilleware
// if your req route starts with /users then handle it using userRouter
app.use('/users', userRouter); // connects the router to the server
app.use('/carts', cartRouter);

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

//localhost:5500/users -GET
//local host: 5500/carts/736876235 -GET