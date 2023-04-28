const express = require('express')
const router = express.Router()
const productController = require('../controllers/productControllers')
const Customer = require('../models/Customer')
const Product = require('../models/Product')
const verifyJWT = require('../middleware/verifyJWT')

// const {customersData,productsData} = require('../data/mockup')
// Product.insertMany(productsData)

router
  .route('/') //verifyJWT,
  .get(verifyJWT,productController.getAllProducts)
  .post(verifyJWT,productController.createNewProduct)
  .patch(verifyJWT,productController.updateProduct)
  .delete(verifyJWT,productController.deleteProduct)

router.route('/:id').get(verifyJWT,productController.getAllProducts)

module.exports = router
