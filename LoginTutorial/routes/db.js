const Sequelize = require('sequelize')
const db = new Sequelize(
    'accounts',
    'admin',
    '1234',
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            min: 0,
            max: 5
        }
    }    
)


const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


db.sync()
    .then(() => console.log("DB synced"))
    .catch((err) => console.error(err))

exports.User = User