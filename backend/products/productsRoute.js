import express from 'express'
import { getProducts } from './products.js'
const productsRoute = express.Router()

productsRoute.get('/', async (req, res) => {
    const products = await getProducts()
    res.send(products)
})

export default productsRoute
