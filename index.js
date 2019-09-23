const express = require('express')
const path = require('path')

const logger = require('./middleware/logger')

const app = express()

//init MiddleWare
//app.use(logger)

//using static folder
app.use(express.static(path.join(__dirname, 'public')))

// Memeber api route
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is on ${PORT}`))
