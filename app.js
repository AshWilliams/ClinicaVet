// IMOPRT DE DEPENDENCIAS //
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var moment = require('moment')
var jquery = require('jquery')
var q = require('q')

//Aqui se importa todos los archivos de la carpeta rutas
var customerRoute = require('./routes/customer')
var petRoute = require('./routes/pet')
var appointmentRoute = require('./routes/appointment')
var app = express()

app.io = require('socket.io')()
require('./routes/socketio-manager.js')(app.io)

//Conexion a mongo a traves de promesas para evitar el warning:
mongoose.Promise = global.Promise

//SI NO EXISTE VARIABLE DE ENTORNO PORT ES QUE SE EJECUTA DESDE LOCALHOST//
//Make sure to encode '=' characters as %3D
if (process.env.PORT) {
  mongoose.connect('mongodb://veterinariauniacc:OEK537dCeKsfr1DCPOl3T9ts8wXjBEYCDbcg7vvdtNLOB0wkk80n7aDLRquLHY4vrQyue7iMK2JzHkUs3TrKUw%3D%3D@veterinariauniacc.documents.azure.com:10255/petstore?ssl=true')
} else {
  mongoose.connect('mongodb://veterinariauniacc:OEK537dCeKsfr1DCPOl3T9ts8wXjBEYCDbcg7vvdtNLOB0wkk80n7aDLRquLHY4vrQyue7iMK2JzHkUs3TrKUw%3D%3D@veterinariauniacc.documents.azure.com:10255/petstore?ssl=true')

  //mongoose.connect(process.env.COSMOSDB_URI)
  //mongoose.connect('mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/petstore?ssl=true')
  //mongoose.connect("mongodb://petstore:JTLrkXr89ec9HtH3hSCo1Tu3pZHjlTJTwc3L6qv1mIW46bAbgW4y60yH8PdjXFuPrTIj16Fqlm8ir8bsammlYQ%3D%3D@petstore.documents.azure.com:10255/petstore?ssl=true", {useMongoClient: true})
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'files')))

//Base route
//Crea una ruta base para todas las rutas que corresponden a la api
app.use('/api', customerRoute)
app.use('/api', petRoute)
app.use('/api', appointmentRoute)

//Front End
app.all('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
})

// Descomentar linea para insertar datos de citas para pruebas, mantener comentado si los datos ya fueron insertados una vez //
//require('./insertdata/appointment');

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // log the error
  console.log(err)
  res.sendStatus(err.status || 500)
})

module.exports = app
