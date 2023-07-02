const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars'); //para esta versión de node es necesario importar los handlebars de esta manera
const methodOverride = require('method-override');
const session = require('express-session');


//inicializaciones
require('./database');

app.engine('handlebars', engine());


//sección de configuracion
// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

//archivos estaticos
app.use(express.static(__dirname + "/public"));

//sección middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));
//Todo lo anterior nos permitira poder autenticar al usuario


//sección de variables globales


//sección de rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//iniciar el servidor

app.listen(port, () => {
    console.log(`servidor escuchando en el puerto: http://localhost:${port}`);
});