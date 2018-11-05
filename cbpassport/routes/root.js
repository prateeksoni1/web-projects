const route = require('express').Router()
const Users = require('../db').Users
const passport = require('../passport')

route.get('/signup', (req, res) => {
    res.render('signup')
})
route.get('/login', (req, res) => {
    res.render('login')
})
route.post('/signup', (req, res) => {
    Users.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name
    }).then((user) => {
        res.redirect('/login')
    }).catch((err) => console.log(err))
})
route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
}))

exports = module.exports = route