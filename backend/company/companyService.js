import { BadRequestError, NotFoundError } from '../errors.js'
import {
    createCompanyInDB,
    deleteCompanyFromDB,
    getAllCompaniesFromDB,
    getCompanyByIdFromDB,
    updateCompanyInDB,
} from './companyDB.js'
import { CompanyEntity } from 'sharedModules'

export async function getAllCompanies() {
    const companies = await getAllCompaniesFromDB()
    return companies.map((company) => new CompanyEntity(company))
}

export async function getCompanyById(id) {
    if (!id) throw new BadRequestError('Please provide an ID')

    const company = await getCompanyByIdFromDB(id)
    if (!company) throw new NotFoundError(`No company found with ID ${id}`)

    return new CompanyEntity(company)
}

export async function createCompany(data) {
    try {
        if (!data) throw new BadRequestError('Please provide company data')

        const newCompany = new CompanyEntity(data)
        if (!newCompany.validate()) {
            throw new BadRequestError('Invalid company data')
        }

        const result = await createCompanyInDB(newCompany.toORMFriendly())
        return new CompanyEntity(result)
    } catch (error) {
        console.error(error)
        throw new BadRequestError(error.message)
    }
}

export async function updateCompany(id, companyData) {
    if (!id || !companyData)
        throw new BadRequestError('Please provide an ID and company data')

    const oldCompany = await getCompanyByIdFromDB(id)
    if (!oldCompany) throw new NotFoundError(`No company found with ID ${id}`)

    const updatedData = { ...oldCompany, ...companyData }

    const updatedCompany = new CompanyEntity({ id, ...updatedData })
    if (!updatedCompany.validate()) {
        throw new BadRequestError('Invalid company data')
    }

    const result = await updateCompanyInDB(updatedCompany)
    return new CompanyEntity(result)
}

export async function deleteCompany(id) {
    if (!id) throw new BadRequestError('Please provide an ID')
    const deletedCompany = await deleteCompanyFromDB(id)
    return new CompanyEntity(deletedCompany)
}
