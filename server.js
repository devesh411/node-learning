const express = require('express')
const app = express();
const db = require('./db')

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

app.listen(3000, () => console.log("listning on port 3000"))