const express = require('express')
const app = express()
const genres = require('./routes/genres')
const Joi = require('joi')
app.use(express.json())

app.use('/api/genres', genres)

app.get('/', (req, res) => {
    res.send('LOL')
})

function validate(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(genre, schema)
}

const port = process.env.port || 3000

app.listen(port, () => console.log(`Listening at port ${port}`))