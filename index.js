import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar la DB
db.authenticate()
    .then(() => console.log("DB Conectada"))
    
    .catch(error => console.log(error))

//Definir puerto 
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req,res, next) => {
    res.locals.actualYear = new Date().getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
})

//Agregar body parsers para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta public
app.use(express.static('public'))

//Agregar router
app.use('/',router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})