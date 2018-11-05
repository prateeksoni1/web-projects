const route = require('express').Router()

route.get('/', (req, res) => {
    if (req.user) {
        return res.send('Visible to logged in users only' + `Hello ${req.user.username}`)
    }
    return res.redirect('/login')
})

exports = module.exports = route