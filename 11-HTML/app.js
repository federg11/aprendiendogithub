const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log("se prendio");
});
app.use(express.static(path.join(__dirname, "public")));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});