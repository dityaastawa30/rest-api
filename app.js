const express = require('express');
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 8000

app.set('view engine', 'hbs')
app.set('json spaces', 2)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.jsonp({
        status: true,
        message: 'REST API READY!'
    })
})

// Handling 404
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + '/views/404.html')
})

app.listen(PORT, () => {
    console.log('Express listen on port : ' + PORT)
})