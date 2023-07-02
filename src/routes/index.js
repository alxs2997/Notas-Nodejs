const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.render('index', {titulo: '<h1>Inicio con HBS</h1>'})
});

app.get("/equipo", (req, res) => {
    res.render('equipo', {
        equipo: [
            {
                id: 1,
                nombre: 'Juanito',
                habilidad: ['Javascript', 'Node.js']
            },
            {
                id: 2,
                nombre: 'Pedrito',
                habilidad: ['Php', 'Laravel']
            }
        ]
    })
});

app.get('/servicio', (req, res) => {
    res.render('servicio', {
        servicio: {
            estado: false,
            nombre: 'Servicio de programación'
        }
    })
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Página no encontrada"
    })
})