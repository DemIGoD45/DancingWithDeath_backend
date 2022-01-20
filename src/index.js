const express = require('express');

const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(express.json());

// routes
app.use('/api/cita', require('./routes/index'));


// starting server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ',app.get('port'));
})