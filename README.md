# MYSQL NODEJS RESTAPI
___

```javascript
require('colors');
const express = require('express');
const app = express();
const morgan = require('morgan');


// Settings

app.set('port', 3000);

// Middlewares
app.use(express.json()); // para entender los objetos json recibidos.
app.use(morgan('dev'));
// Routes
app.use(require('./routes/employees'));

// Server on port 3000
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.blue);
});

```
