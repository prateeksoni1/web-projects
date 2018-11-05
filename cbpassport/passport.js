const passport = require('passport')
const Users = require('./db').Users
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
    done(null, user.username)
})

passport.deserializeUser((username, done) => {
    Users.findOne({
        where: {
            username: username
        }
    })
        .then((user) => {
            if (!user) return done(new Error('No such user'))
            done(null, user)
        })
        .catch((err) => {
            done(err)
        })
})

passport.use(new LocalStrategy((username, password, done) => {
    Users.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (!user || user.password != password) {
            return done(null, false, { message: "Invalid Username or password"})
        }

        return done(null, user)
    }).catch(err => {
        return done(err)
    })
}))

exports = module.exports = passport

