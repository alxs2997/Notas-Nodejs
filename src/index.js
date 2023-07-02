const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//inicializaciones
const app = express();

//seccion de configuracion
app.set('port', process.env.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

//seccion middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));
//Todo lo anterior nos permitira poder autenticar al usuario


//seccion de variables globales


//seccion de rutas


//seccion de archivos estaticos


//seccion de escucha del servidor}

app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto:', app.get('port'));
});