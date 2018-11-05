const route = require('express').Router()
const joi = require('joi')
const User = require('./db').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

route.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const user = await User.findAll({
        where: {
            username: req.body.username
        }   
    })
    console.log(user, req.body)
    if (!user) {
        return res.status(400).send("Invalid Username or password")
    } 

    const isValid = await bcrypt.compare(req.body.password, user[0].password)
    console.log(isValid)
    if (!isValid) {
        return res.status(400).send("Invalid Username or password")
    }

    console.log(user[0].id)
    const token = jwt.sign({ id: user[0].id, username: user[0].username}, config.get('jwtPrivateKey')) 
    res.send(token)
})


function validate(user) {
    const schema = {
        username: joi.string().min(4).required(),
        password: joi.string().min(4).required()
    }
    return joi.validate(user, schema)
}

module.exports = route