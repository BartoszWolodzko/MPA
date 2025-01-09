import express from "express";
import configuration from "./configuration.js";

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(configuration.PORT, ()=>{
    console.log(`App started on port ${configuration.PORT}`)
})
