const express = require('express')
const app = express();
const db = require('./db')
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body




app.get('/', function (req, res) {
    res.send('Welcome to my Home .. How can i help you')
  })





//Import the router files
const personRoutes = require('./routes/personRoutes');
const MenuRoute = require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menu', MenuRoute)


app.listen(PORT, () => console.log("listning on port 3000"))