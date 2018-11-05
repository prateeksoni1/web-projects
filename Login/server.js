let express = require('express')
, routes = require('./routes')
, app = express()
, user = require('./routes/user')
, db = require('./models')
, http = require('http')
, passport = require('passport')
, passportConfig = require('./config/passport')
, home = require('./routes/home')
, application = require('./routes/application')

app.use('/public', express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')

app.set('port', process.env.PORT || 3003)
app.use(express.urlencoded())
app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.session({ secret: 'goatjsforbettersecurity'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(app.router)

if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

app.get('/', routes.index)