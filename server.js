const express = require('express'); //Importa biblioteca express que ajuda o node com rotas e view
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express(); 

// Fazer app permitir receber dados em Json
app.use(express.json());
// Para permitir acesso a partir de outros domínios
app.use(cors()); 
// Iniciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true , useUnifiedTopology: true }
);

//require('./src/models/Product'); // Comentado pois usando a biblioteca require-dir, já será importado tudo desta pasta
requireDir('./src/models');

// Removido para ser usado pelo componente controller
// const Product = mongoose.model('Product');

// Movido para o arquivo routes.js, para organizar a estrutura do app
/*
//Criar a primeira rota
app.get('/',(req, res) => {
    //Testando salvar um documento no mongodb
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React Native',
        url: 'http://github.com/facbook/react-native',
    });

    // Req: Pega autentiacao, ip, usuario, nevegador pegar com o req
    // Res: é a resposta dadda a requisição
    res.send('Hello Rocketseat');
    // npm install -D nodemon -> para não precisar ficar reiniciando o node.
    // Alterar o package.json com o script para chamar o nodemon "dev":"nodemon server.js"
    // executar o script com o comando npm run dev
});

*/

// Rotas
// Coringa que recebe todo tipo de requisição
app.use('/api', require('./src/routes'));
app.listen(3001);

