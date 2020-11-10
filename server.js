const express = require('express');
const app = express();

//app.listen(5000);
app.listen(process.env.PORT);

app.get('/', (req, res) => {
    res.send('this is the home page');
})