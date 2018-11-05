const Sequelize = require('sequelize')

const db = new Sequelize(
    'userdb', 'admin', '1234', {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.error(err))

exports = module.exports = {
    db,
    Users
}