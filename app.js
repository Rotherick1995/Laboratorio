const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const medicoRoutes = require('./routes/medicoRoutes');
const pacientesRoutes = require("./routes/pacienteRoutes");
const solicitudRoutes = require("./routes/solicitudRoutes");
const tarealaboratorioRoutes = require('./routes/tarealaboratorioRoutes');
const reportRoutes = require('./routes/reportRoutes');
const tpruebaRoutes = require('./routes/tpruebaRoutes');
const tdetallesolicitudRoutes = require('./routes/tdetallesolicitudRoutes');
const resultadoRoutes = require('./routes/tresultadosRoutes');
const cors=require('cors');
app.use(cors());
app.use(express.json());  

// Usar las rutas
app.use("/api", pacientesRoutes);
app.use('/api', medicoRoutes);  
app.use('/api', solicitudRoutes);  
app.use("/api", reportRoutes);
app.use('/api', tarealaboratorioRoutes);
app.use('/api', tpruebaRoutes);
app.use('/api', tdetallesolicitudRoutes);
app.use('/api', resultadoRoutes);
const puerto = 2000;
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});