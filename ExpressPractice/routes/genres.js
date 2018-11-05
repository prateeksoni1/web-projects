const express = require('express')
const route = express.Router()

let genres = [
    {
        id: 1,
        name: 'HORROR',
    },
    {
        id: 2,
        name: 'ACTION',
    },
    {
        id: 3,
        name: 'COMEDY',
    },
    {
        id: 4,
        name: 'SCI-FI',
    },
]

route.get('/api/genres', (req, res) => {
    res.send(genres)
})

route.get('/api/genres/:id', (req, res) => {
    
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    
    if(!genre) {
        res.status(404).send("Not found")
        return
    }
    res.send(genre)
})

route.post('/api/genres', (req, res) => {
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    if (!validate(genre)) res.status(400).send("Invalid input")
    else {
        genres.push(genre)
        res.send(genre)
    }
})

route.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    
    if(!genre) {
        res.status(404).send("Not found")
        return
    }
    if (!validate(genre)) {
        res.status(400).send("Invalid input")
        return  
    }
    genre.name = req.body.name
    res.send(genre)
})

route.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    
    if(!genre) {
        res.status(404).send("Not found")
        return
    }
    if (!validate(genre)) {
        res.status(400).send("Invalid input")
        return  
    }
    const index = genres.indexOf(genre)
    genres.splice(index, 1)
    res.send(genre)
}) 

