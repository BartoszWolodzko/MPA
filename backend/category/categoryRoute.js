import express from 'express'
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    getChildCategory,
    getPrimeCategory,
    updateCategory,
} from './categoryService.js'

const categoryRoute = express.Router()

categoryRoute.get('/', async (req, res, next) => {
    getAllCategories()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => next(error))
})

categoryRoute.get('/:id', async (req, res, next) => {
    const { id } = req.params

    getCategoryById(id)
        .then((result) => {
            res.json(result)
        })
        .catch(next)
})

categoryRoute.get('/prime', async (req, res, next) => {
    getPrimeCategory()
        .then((result) => {
            res.json(result)
        })
        .catch(next)
})

categoryRoute.get('/childOf/:id', async (req, res, next) => {
    getChildCategory()
        .then((result) => {
            res.json(result)
        })
        .catch(next)
})

categoryRoute.post('/add', async (req, res, next) => {
    const data = req.body
    createCategory(data)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch(next)
})

categoryRoute.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const data = req.body

    updateCategory(id, data)
        .then((result) => {
            res.json(result)
        })
        .catch(next)
})

categoryRoute.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    deleteCategory(id)
        .then(() => {
            res.status(204).send()
        })
        .catch(next)
})

export default categoryRoute
