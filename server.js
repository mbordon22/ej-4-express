const express = require("express");
const path = require("path");
const app = express();

const PUERTO = 3000;

// Middleware para poner el contenido de un form post en req.body
app.use(express.urlencoded({ extended: true }));

// Middleware para archivos de imagen, css, scripts, etc ("recursos estáticos")
app.use(express.static(__dirname));

//Redirige al index con el formulario
app.get("/", function(req, res){
    res.sendFiles(path.join(__dirname, "index.html"));
});

//Recibe los datos del formulario por el metodo post y responde algo
app.post("/saludar", function(req, res){
    res.send(`<h1>Hola ${req.body.usuario} '${req.body.apodo}' ${req.body.apellido} </h1>`);
})

app.listen(PUERTO, function(){

    console.log(`Escuchando en el puerto ${PUERTO} ....`);
});