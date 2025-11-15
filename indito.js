
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('<h1>Szia! Ez a Mesés Receptkönyv főbejárata!</h1>');
});

app.listen(port, () => {
    console.log(`A Mesés Receptkönyv már fut a http://localhost:${port} címen!`);
});