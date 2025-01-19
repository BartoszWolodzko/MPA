import express from "express";
import { createCompany, deleteCompany, getAllCompanies, getCompanyById, updateCompany } from "./companyDB.js";
const companyRoute = express.Router()

companyRoute.get('/', async (req, res) => {
    const companies = await getAllCompanies();
    res.json(companies);
})

companyRoute.get('/:id', async (req, res) => {
    const { id } = req.params;

    const company = await getCompanyById(id)

    res.json(company);
})

companyRoute.post('/add', async (req, res) => {
    const name = req.query.name;

    const result = await createCompany({name})

    res.json(result)
})

companyRoute.put('/:id', async (req, res) => {
    const { id } = req.params;
    const name = req.query.name;

    const result = await updateCompany(id, {name})

    res.json(result)
})

companyRoute.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await deleteCompany(id)

    res.json(result)
})

export default companyRoute;