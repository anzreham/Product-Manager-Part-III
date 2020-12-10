const ProductController = require('../controllers/product.controller.js');
module.exports = function(app){
  
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
}
