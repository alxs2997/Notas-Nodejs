let mongoose = require('mongoose'); //importamos el modulo mongoose

const server = '127.0.0.1:27017';//se le cambia por la ip del servidor en donde se encuentra la base de datos
const database = 'notes-app';//nombre de la base de datos

class Database { //creamos la clase Database
    constructor() {
        this._connect()
    }

    _connect() { //creamos el metodo connect
        mongoose.connect(`mongodb://${server}/${database}`) //conectamos con la base de datos con los parametros declarados anteriormente
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error' + err)//concateamos el error si es que existe
            })
    }
}

module.exports = new Database()