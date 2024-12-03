import fs from 'fs';
import { CAMINHO_ARQUIVO_CLIENTE } from './conection.js';
import { log } from 'console';

//create
export let salvaCliente = (cliente) => {
    const dados = JSON.parse(fs.readFileSync(CAMINHO_ARQUIVO_CLIENTE, 'utf-8') || '[]');
    dados.push(cliente);
    fs.writeFileSync(CAMINHO_ARQUIVO_CLIENTE, JSON.stringify(dados, null, 2));
    console.log('Cliente salvo com sucesso.');

}
// Update
export let atualizaCliente = (uuid, novoCliente) => {
    try {
        const dados = JSON.parse(fs.readFileSync(CAMINHO_ARQUIVO_CLIENTE, 'utf-8') || '[]');
        const indice = dados.findIndex(cliente => cliente.uuid === uuid);
        if (indice === -1) {
            console.log('Cliente não encontrado.');
            return false;
        }
        dados[indice] = { ...dados[indice], ...novoCliente };
        fs.writeFileSync(CAMINHO_ARQUIVO_CLIENTE, JSON.stringify(dados, null, 2));
        console.log('Cliente atualizado com sucesso.');
        return true;
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error.message);
        return false;
    }
};
// Delet
export let deletaCliente = (uuid) => {
    try {
        const dados = JSON.parse(fs.readFileSync(CAMINHO_ARQUIVO_CLIENTE, 'utf-8') || '[]');
        const novoDados = dados.filter(cliente => cliente.uuid !== uuid);
        if (dados.length === novoDados.length) {
            console.log('Cliente não encontrado.');
            return false; 
        }
        fs.writeFileSync(CAMINHO_ARQUIVO_CLIENTE, JSON.stringify(novoDados, null, 2));
        console.log('Cliente deletado com sucesso.');
        return true; 
    } catch (error) {
        console.error('Erro ao deletar cliente:', error.message);
        return false; 
    }
};
// Read UUID
export let buscaClientePorUUID = (uuid) => {
    try {
        const dados = JSON.parse(fs.readFileSync(CAMINHO_ARQUIVO_CLIENTE, 'utf-8') || '[]');
        const cliente = dados.find(cliente => cliente.uuid === uuid);
        if (!cliente) {
            console.log('Cliente não encontrado.');
            return null; 
        }
        return cliente; 
    } catch (error) {
        console.error('Erro ao ler cliente:', error.message);
        return null; 
    }
};
// Read CPF/CNPJ
export let buscaClientePorCPFouCNPJ = (cpfOuCnpj,tipoDocumunto) => {
    try {
        const dados = JSON.parse(fs.readFileSync(CAMINHO_ARQUIVO_CLIENTE, 'utf-8') || '[]');
        const cliente = dados.find(cliente => {
           return cliente.documentoComercial === tipoDocumunto && cliente.documento === cpfOuCnpj
        }
        );
        if (!cliente) {
            console.log('Cliente não encontrado com esse CPF ou CNPJ.');
            return null; 
        }
        return cliente; 
    } catch (error) {
        console.error('Erro ao buscar cliente por CPF/CNPJ:', error.message);
        return null; 
    }
};

