const express = require('express')
//common JS modules, different than import (2015 modules)
//node does NOT have 2015 modules

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT)