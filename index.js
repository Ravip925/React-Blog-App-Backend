const express = require('express');

const app = express();

const routerData = require('./Routes/Data');

const cors = require('cors');

app.use(cors());

app.use('/api',routerData)

app.listen(process.env.PORT || 8080, () => {
    console.log("Application is running");
})