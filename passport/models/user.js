const Sequelize = require('sequelize'),
      passportLocalSeq = require('passport-local-sequelize')

const db = new Sequelize('passport_tutorial', 'admin', '1234', {
    dialect: 'mysql'
})

const User = db.define('User', {
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
    }
})

passportLocalSeq.attachToUser(User)

db.sync()
    .then(() => console.log('db synced'))
    .catch((err) => console.error(err))

module.exports.User = User