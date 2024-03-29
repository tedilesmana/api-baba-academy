const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const uploadData = require('express-fileupload');
var path = require("path");

//connection mongodb
// connect mongo
mongoose.connect('mongodb://localhost/db_dtcjavascript')
    .then(db => console.log('db_conected'))
    .catch(err => console.log(err))

app.use(uploadData());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
let corsOptions = {
    origin: '*',
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'tokenshop']
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "public")));

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Berhasil menjalankan server pada port 8000')
})