const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes/api').route)
app.use('/', express.static(path.join(__dirname, 'public_static')))

app.listen(8888, () => {
    console.log("Server started at http://localhost:8888")
})

