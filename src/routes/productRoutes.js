const express = require('express')
const router = express.Router()
const productController = require('../controllers/productControllers')
const Customer = require('../models/Customer')
const Product = require('../models/Product')
// const verifyJWT = require('../middleware/verifyJWT')

const {customersData,productsData} = require('../data/mockup')
Product.insertMany(productsData)

router
  .route('/') //verifyJWT,
  .get(productController.getAllProducts)
  .post(productController.createNewProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct)

router.route('/:id').get(productController.getAllProducts)

module.exports = router
