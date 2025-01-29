import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import configuration from './configuration.js'
import companyRoute from './company/companyRoute.js'
import categoryRoute from './category/categoryRoute.js'

const app = express()
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Global error handler
app.use((err, req, res, next) => {
    if (err instanceof HttpError) {
        return res.status(err.statusCode).json({ error: err.message })
    }

    return res.status(500).json({ error: 'Internal Server Error' })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/company', companyRoute)
app.use('/category', categoryRoute)

app.listen(configuration.PORT, () => {
    console.log(`App started on port ${configuration.PORT}`)
})
