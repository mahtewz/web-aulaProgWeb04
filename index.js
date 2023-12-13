const express = require('express');
const app = express();
app.use(express.json());

const frases = [
    {id: 10, autor: 'Maria', frase: 'Frase de Maria'},
    {id: 20, autor: 'Joao', frase: 'Frase de Joao'},
    {id: 30, autor: 'Sergio', frase: 'Frase de Sergio'},
    {id: 40, autor: 'Socrates', frase: 'Frase de Socrates'}
]

app.get('/',(req, res) => {

    res.send("Programação Web - Hello World");

})

app.get('/Frases',(req, res) => {

    res.send(frases);

})

app.post('/Frases',(req, res) => {

    //console.log(req.body);
    //res.send('pronto');
    frases.push(req.body);
    res.status(201).send();
})

// O id passa como um parametro na url= app.delete('/Frases:id', (req, res) =>{  
app.delete('/Frases/:id', (req, res) => {   
    let id = req.params.id;
    let index = frases.findIndex((frase) => frase.id == id);
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