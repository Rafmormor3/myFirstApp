const express = require('express') //importamos express
const app = express() ;
const cors = require('cors');
const marcaRoutes = require('./routes/indexMarca')
const paisRoutes = require('./routes/indexPais')
const tiendaRoutes = require('./routes/indexTienda')
const userRoutes = require("./routes/indexUser")

require('dotenv').config(); //hay que instalarlo

//configurar la conexion de moongose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main(){
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Database connected');
}
main().catch((err)=>console.log(err));


app.use(cors());
app.use(express.json());

app.use('/marcas',marcaRoutes);
app.use('/paises', paisRoutes);
app.use('/tiendas', tiendaRoutes)
app.use('/users', userRoutes)


// Iniciar el servidor en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${process.env.PORT}`);
});
