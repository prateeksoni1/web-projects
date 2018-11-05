const route = require('express').Router()
const db = require('../db')

route.post('/accounts/', (req, res) => {
    db.searchPerson(req.body.username, req.body.password)
        .then((accounts) => {
            if (accounts.length > 0) {
                res.send({
                    msg: "OK"
                })
            } else {
                res.send({
                    msg: "FAILED"
                })
            }
               
        })
        .catch((err) => {
            res.send({error: err})
        })
})

exports = module.exports = {
    route
}