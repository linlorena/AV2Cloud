const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Página Inicial</h1>');
});

app.get('/sobre', (req, res)=>{
    res.send('<h1>Sobre nós</h1>');
});

app.get('/contato', (req, res)=>{
    res.send('<h1>Entre em contato</h1>');
});

app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000');
})

app.get('/produtos', (req, res)=>{
    res.send('<h1>Produtos</h1>');
});
