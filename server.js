const express = require('express');
const bodyParser = require('body-parser');
require('./data/database'); // Adjust the path accordingly
require('dotenv').config()
// const taskRoute = require('./routes/task');


const app = express();
// const userRoute = require('./routes/users');
app.use(bodyParser.json());
app.use(express.json())
// app.use(userRoute);
// Add other routes as needed
// app.use(taskRoute)

// Connect to MongoDB when the application starts


const port = process.env.PORT || 3000;

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-Width, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));



app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
