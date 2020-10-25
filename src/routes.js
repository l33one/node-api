const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

/* Será recriado chamado do controller
routes.get('/',(req, res) => {
    // Era apenas para teste
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React Native',
        url: 'http://github.com/facbook/react-native',
    });
    
    res.send('Hello Rocketseat');
}); 
*/

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;