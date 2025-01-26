import express from 'express'
import {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany,
} from './companyService.js'

const companyRoute = express.Router()

companyRoute.get('/', async (req, res, next) => {
    getAllCompanies()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => next(error))
})

companyRoute.get('/:id', async (req, res, next) => {
    const { id } = req.params

    getCompanyById(id)
        .then((result) => {
            res.json(result)
        })
        .catch(next)
})

companyRoute.post('/add', async (req, res, next) => {
    const data = req.body
    createCompany(data)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch(next)
})

companyRoute.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const data = req.body

    updateCompany(id, data)
        .then((result) => {
            res.json(result)
        })
        .catch(next)
})

companyRoute.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    deleteCompany(id)
        .then(() => {
            res.status(204).send()
        })
        .catch(next)
})

export default companyRoute
