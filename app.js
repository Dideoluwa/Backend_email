const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const Mail = require('./routes/mail')

app.use("/api", Mail)

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Running at 8000`);
})