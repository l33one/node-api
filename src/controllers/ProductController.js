const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query; // Para receber paramentos get
        // Comentado para alterar a resposta para retornar um paginate
        //const products = await Product.find();// usar {} para passar where
        const products = await Product.paginate({}, {page, limit: 10 });
        return res.json(products);
    },
    
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // new: true, retorna dados após atualização
        // new: false, retorna dados antes da atualização
        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
    
}
