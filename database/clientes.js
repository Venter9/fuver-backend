import fs from 'fs';
import { CAMINHO_ARQUIVO_CLIENTE } from './conection.js';


export let salvaCliente = (cliente) => {
    const dados = JSON.parse(fs.readFileSync(CAMINHO_ARQUIVO_CLIENTE, 'utf-8') || '[]');
    dados.push(cliente);
    fs.writeFileSync(CAMINHO_ARQUIVO_CLIENTE, JSON.stringify(dados, null, 2));
    console.log('Cliente salvo com sucesso.');

}