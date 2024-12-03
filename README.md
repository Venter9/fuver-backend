# Fruver 🥑 - Formulário de Delivery 


# Requisitos
Node.js
npm

# Como testar
Na root rodar os seguintes comandos

npm install
npm start
----------------------------

# Estrutura:
 Node.js - utilizado para subir o servidor e organizar as rotas
 Banco de dados - Por enquanto o codigo utiliza um arquivo JSON como banco de dados, mas a arquitetura foi feita pensando em adicionar um banco SQL
# Funcionamento:
 Rotas:
    POST /clientes - recebe o formulario do Fruver (front) e adiciona o novo cliente ao banco
    GET /clientes - recebe uma chave de objeto e busca o cliente para devolver para o front (Ainda não implementado)
    GET / - Simples healthcheck no projeto
# Arquitetura:
   A ideia é separar o projeto em camadas, uma camada de controle, uma de serviços e uma de banco de dados
      Controle - Recebe as requisições e direciona para camada de serviço
      Serviço - Aplica regra de negocios e formatações
      Banco de dados - faz toda a integração com o banco de dados
# Funções:

   PreparaDB - Chamada ao iniciar o projeto, faz um check dos arquivos utilizados como DB. Quando o sql for implementado essa função pode ser utilizada pra preparar as conexões com o banco e verificar o funcionamento
   cadastrarClientes - Camada de serviço, usa a função mapeiaFormularioParaCliente para transformar o formulario em um objeto estruturado para o banco de dados. Também chama a camada de banco de dados
   salvaCliente - Camada de banco de dados, adiciona um novo cliente ao banco.
   
   O servidor roda na porta 8080
