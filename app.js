const express = require('express');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    fs.readFile('./free.json', 'utf-8' , (err, data) => {
        if (err) throw err;

        const read = JSON.parse(data);

        res.render('index', {data : read});
        console.log(data);
    })
})

app.listen(8080, () => {
    console.log('Processing ongoing.....');
});