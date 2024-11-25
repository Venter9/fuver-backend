import express from 'express'
import cors from 'cors'
import { cadastrarCliente } from './service/cadastro.js';
import { preparaDB } from './database/conection.js';

preparaDB()

var app = express()
app.use(express.json());
app.use(cors())

// Health check
app.get('/', (req, res) => {
    res.send('Servidor rodando!')
})

// Busca de clientes
app.get('/clientes', (req, res) => {
    res.send('requisição GET à homepage')
})

// Salvar clientes
app.post('/clientes', (req, res) => {
    let body = req.body
    try {
        cadastrarCliente(body)
    } catch (error) {
        console.error('Erro ao salvar cliente')
        res.status(500).json({error:'Erro ao salvar cliente'})
        return
    }
    res.send('requisição POST à homepage')
})

app.listen(8080, function () {
    console.log('Servidor iniciado na porta 8080')
})