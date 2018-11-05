const express = require('express')
const users = require('./routes/users')
const auth = require('./routes/auth')
const config = require('config')
const app = express()

if (!config.get('jwtPrivateKey')) {
    console.error("FATAL ERROR: jwt not found")
    process.exit(1)
}
app.use(express.json())
app.use('/api/users', users)
app.use('/api/auth', auth)
const port = process.env.port || 3000

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))