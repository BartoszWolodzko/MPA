import express from "express";
import { getProductByBarcode } from "./product.js";
const productsRoute = express.Router()

productsRoute.get('/barcode/:barcode', async (req, res) => {
    const barcode = req.params.barcode;

    const product = await getProductByBarcode(barcode);

    res.send(product);
});

export default productsRoute;