const express = require('express');
const mongoose = require('mongoose');
const Frase = require('./frase.model');

const app = express();
app.use(express.json());
const db_host = 'localhost';
const db_port = 27017;
const db_db = 'frases';
const mongoURI = `mongodb:\/\/${db_host}:${db_port}/${db_db}`; //mongodb= localhost:27017/frases 27017

mongoose.connect(mongoURI,{ UseNewUrlParser: true});//{UseNewUrlParser: true}

app.get('/',(req, res) => {
    res.send("Programação Web - Hello World");
})

app.get('/Frases',(req, res) => {
    Frase.find({})
        .then((frases) => {
            res.send(frases);
        })
        .catch((err) => {
            res.status(500).send();
        })
})

app.post('/Frases',(req, res) => {
    res.status(201).send();
})

// O id passa como um parametro na url= app.delete('/Frases:id', (req, res) =>{  
app.delete('/Frases/:id', (req, res) => {   
    if (index == -1) {
        res.status(404).send();
    } else {
            frases.splice(index, 1);
            res.status(200).send();
    }
})

app.put('/Frases/:id', (req,res) => {
    let id = req.params.id;
    let frase = req.body;
    let index = frases.findIndex((frase) => frase.id == id);
    if (index == -1) {
        res.status(404).send();
    } else {
            frases[index].autor = frase.autor;
            frases[index].frase = frase.frase;
            res.status(200).send();
    }
})

const port = 8080;
app.listen(port, (err) => {
    if(err) {
        console.error("Erro na aplicação.")
    }
    console.log(`Aplicação rodando na porta: ${port}`)
})