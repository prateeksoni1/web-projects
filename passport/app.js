const express = require('express'),
      passport = require('passport'),
      LocalStrategy = require('passport-local'),
      Sequelize = require('sequelize'),
      bodyParser = require('body-parser'),
      passportLocalSequelize = require('passport-local-sequelize'),
      user = require('./models/user').User  


const app = express()

app.use(require('express-session')({
    secret: "Rest in peace",
    saveUninitialized: false,
    resave: false
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/secret', (req, res) => {
    res.render('secret')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    user.register(new user({ username: req.body.username}), req.body.password, (err, user) => {
        if(err) {
            console.log(err)
            return res.status(401).render('register')
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/secret')
        })
    })
})

app.listen(3000, () => console.log('http://localhost:3000'))