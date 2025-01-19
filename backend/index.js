import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import configuration from "./configuration.js";
import productsRoute from "./products/productsRoute.js";
import productRoute from "./product/productRoute.js";
import companyRoute from "./company/companyRoute.js";

const app = express()
app.use(helmet())
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/products', productsRoute)
app.use('/product', productRoute)
app.use('/company', companyRoute)

app.listen(configuration.PORT, ()=>{
    console.log(`App started on port ${configuration.PORT}`)
})
