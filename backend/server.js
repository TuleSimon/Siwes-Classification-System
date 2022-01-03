const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users')
const studentRouter = require('./routes/student')
const supervisorRouter = require('./routes/supervisor')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

try{
    mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});
}
catch(e){
    console.log(e)
}


app.use('/users', usersRouter);
app.use('/students', studentRouter);
app.use('/supervisors', supervisorRouter);


app.listen(port, () => {
    console.log('server is running on port: '+port);
});