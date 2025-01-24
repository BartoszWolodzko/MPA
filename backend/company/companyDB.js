import { getPrismaClient } from '../prisma/databaseConnection.js'

export async function getAllCompanies() {
    const prisma = getPrismaClient()
    return prisma.company.findMany()
}

export async function getCompanyById(id) {
    const prisma = getPrismaClient()
    return prisma.company.findUnique({
        where: {
            company_id: Number(id),
        },
    })
}

export async function createCompany(newCompany) {
    const prisma = getPrismaClient()
    return prisma.company.create({
        data: {
            ...newCompany,
        },
    })
}

export async function updateCompany(newCompany) {
    const prisma = getPrismaClient()
    return prisma.company.update({
        where: {
            company_id: Number(newCompany.id),
        },
        data: {
            ...newCompany,
        },
    })
}

export async function deleteCompany(id) {
    const prisma = getPrismaClient()
    return prisma.company.delete({
        where: {
            company_id: Number(id),
        },
    })
}
