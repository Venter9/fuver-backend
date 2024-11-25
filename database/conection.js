import fs from 'fs';
import path from 'path';

export const CAMINHO_ARQUIVO_CLIENTE = path.resolve('clientes.json');


// Verifica existencia de arquivos JSON, cria eles caso necessario
export let preparaDB = () => {
    try {
        if (!fs.existsSync(CAMINHO_ARQUIVO_CLIENTE)) {
            fs.writeFileSync(CAMINHO_ARQUIVO_CLIENTE, JSON.stringify([], null, 2));
            console.log('Arquivo de clientes criado.');
        } else {
            console.log('Arquivo de clientes já existe.');
        }
    } catch (erro) {
        console.error('Erro ao preparar clientes:', erro.message);
    }
};