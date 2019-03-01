import express = require('express');
import ForgeRSA from './ForgeRSA';
import bodyParser = require("body-parser");

// Create a new express application instance
const app: express.Application= express();
let forgeRSA = new ForgeRSA();

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Proyecto GIWEB Back END');
});

//Crear par de llaves RSA y retorna un hash junto con la lalve publica en formato PEM
app.get('/publicKey',function(req,res){
    res.send(forgeRSA.crearRSAKey());
});

//Recibe mensajeEncriptado y hash en el body de la peticion
//retorna mensaje desencriptado si el hash existe
//retorna mensa de error en caso contrario
app.post('/desencriptarMensaje',function(req,res){
    let mensajeEncriptado = req.body.mensaje;
    let hash = req.body.hash;
    let mensajeOriginal=null;
    try{
        mensajeOriginal=forgeRSA.desencriptarMensaje(mensajeEncriptado,hash);
    }catch(error){
        res.status(404).send(error);
        return;
    }
    res.send(mensajeOriginal);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});

//forgeRSA.crearRSAKey();


