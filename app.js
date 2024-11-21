const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT;
const path = require('path');
// RUTAS
const ContactsRoutes = require('./src/routes/contacts.routes');
const UsersRoutes = require('./src/routes/users.routes');
const LoginRoutes = require('./src/routes/login.routes');
const TenantRoutes = require('./src/routes/tenants.routes');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}

// para servir contenido estatico
app.use(express.static(path.join(__dirname, 'src', 'controllers', 'frontend')));
app.use(cors(corsOptions));

// RUTAS DE CONTACTOS
app.use('/contactos', ContactsRoutes);
// RUTA DE USUARIOS
app.use('/users', UsersRoutes);
// RUTA DE LOGIN
app.use('/login', LoginRoutes);
// RUTA DE TENANTS
app.use('/tenants', TenantRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
