const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

let port = process.env.PORT || 3333



app.use(cors())
app.use(express.json())
app.use(routes)

app.use(express.static(__dirname + '/uploads'));

//Catch All
app.use( (err, req, res, next) => {
        res.status(err.status || 500)
        res.json({error: err.message})
})

app.listen(port, () => {
    console.log("Server is running.")
})

