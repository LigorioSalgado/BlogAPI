const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { errors } = require('celebrate')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1', routes);
app.use(errors())
// /api/v1/users
const PORT = process.env.PORT || 9000 ;

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})