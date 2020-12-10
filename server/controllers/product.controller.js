// const { Person } = require('../models/person.model');
const { Product } = require('../models/product.model');



    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
Product.create({
title,
price,
desc
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}



module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}


module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}


module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedproduct => response.json(updatedproduct))
        .catch(err => response.json(err))
}


module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
