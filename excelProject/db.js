const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'accmgr',
    password: '123456',
    database: 'users'
})

function searchPerson(username, password) {
    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM accounts WHERE username like ? and password like ?`,
             [username, password],
            function (err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            } 
        )
    }).catch((err) => {
        console.log(err)
    })
}

exports = module.exports = {
    searchPerson
}