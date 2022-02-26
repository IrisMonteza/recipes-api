// Aquí solo lo configuro, no lo inicio

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import userRoutes from './routes/user.routes';
import specialRoutes from './routes/special.routes';

import recipesRoutes from './routes/recipes.routes';
const fileUpload = require('express-fileupload');
const app = express();

app.set('port', process.env.PORT || 4000);

// middelwares
app.use(morgan('dev')); //información de las peticiones
app.use(cors()); //Permitir a cualquier servidor conectarse o hacer peticiones
app.use(express.urlencoded({ extended: false })); //Entender los campos que vengan desde un formulario
app.use(express.json()); //Entender los objetos json cuando viene un post con un dato
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(fileUpload());
// routes
app.get('/', (req, res) => {
  res.send(`THE API is at http://localhost: ${app.get('port')}`);
});

app.use(userRoutes);
app.use(specialRoutes);

app.use(recipesRoutes);
export default app;
