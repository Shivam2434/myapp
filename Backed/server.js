require('dotenv').config({path: '../.env'});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencoded = require('body-parser/lib/types/urlencoded');
const cors = require('cors')
const router = require('./router')
const Port = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.options('*', cors())
app.set(Port)
app.use(router)
app.set('db', require('./Database/database'))

app.get('/', (req,res) => {
    res.status(200).json({
        type: 'success',
        message: "Welcome to My APP."
    })
})

app.listen(Port, () => {
    console.log("Server active at port :: ",Port)
})