import express from 'express'
import cors from 'cors'
import { atualizarCliente, buscarClientePorCpfouCnpj, buscarClientePorUuid, cadastrarCliente, deletarCliente } from './service/clientes.js';
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
app.get('/clientes/uuid/:uuid', (req, res) => {
    const { uuid } = req.params; 
    const cliente = buscarClientePorUuid(uuid)
    if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado pelo UUID.' });
    }
    res.json(cliente); 
});

app.get('/clientes/:tipo/:doc', (req, res) => {
    const { doc,tipo } = req.params; 
    const cliente = buscarClientePorCpfouCnpj(doc,tipo)
    if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado pelo documento.' });
    }
    res.json(cliente); 
});

// Deletar Clientes
app.delete('/clientes/uuid/:uuid', (req, res) => {
    const { uuid } = req.params; 
    const deletou = deletarCliente(uuid)
    if (!deletou) {
        return res.status(404).json({ mensagem: 'Cliente não deletado.' });
    }
    res.json(deletou); 
});
//update
app.put('/clientes/uuid/:uuid', (req, res) => {
    const { uuid } = req.params; 
    let body = req.body
    const atualizou = atualizarCliente(uuid, body)
    if (!atualizou) {
        return res.status(404).json({ mensagem: 'Cliente não atualizado' });
    }
    res.json(atualizou); 
});
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
