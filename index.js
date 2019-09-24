const express = require('express')
const path = require('path')
const exphbs =  require('express-handlebars')
const logger = require('./middleware/logger')

const app = express()

//init MiddleWare
//app.use(logger)

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Handlebar Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//using static folder
app.use(express.static(path.join(__dirname, 'public')))

// Member api routes
app.use('/api/members', require('./routes/api/members'))



const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is on ${PORT}`))
