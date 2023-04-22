const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
    fs.readFile('./free.json', 'utf-8' , (err, data) => {
        if (err) throw err;

        const read = JSON.parse(data);

        res.render('index', {data : read});
    })
})

app.post('/view' , (req, res) => {
    fs.readFile('./free.json', 'utf-8' , (err, data) => {
        if (err) throw err;

        const read = JSON.parse(data);
        console.log('Step ongoing.....');

        const {name, char, swim} = req.body;

        const id = Math.floor(Math.random() * 10);

        const allData = {
            id : id,
            name: name,
            char : char,
            swim : swim
        }

        read.push(allData);

        fs.writeFile('./free.json', JSON.stringify(read) , err => {
            if (err) throw err;
        })
        res.redirect('/');
        console.log('New Added');
    })
})

app.listen(8080, () => {
    console.log('Processing ongoing.....');
});