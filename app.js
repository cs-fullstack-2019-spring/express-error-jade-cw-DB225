const express = require('express');
const app = express();
const index = require('./routes/index.js');

app.set('view engine','pug');
app.use(express.static('public'));

app.use('/', index);

app.use((request, response) =>{
    response.send("404: page not found");
});

const server = app.listen(7005, () =>{
    console.log(`Server is running ....${server.address().port}`);
});