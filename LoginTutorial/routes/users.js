const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')
const User = require('./db').User

route.get('/', (req, res) => {
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch(err => console.error(err))
})

route.post('/', async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    console.log(username, password)
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)
    User.create({
        username: username,
        password: hashed
    })
        .then((user) => res.status(200).send(user))
        .catch((err) => console.error(err))
})

module.exports = route