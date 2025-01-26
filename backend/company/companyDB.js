import { getPrismaClient } from '../prisma/databaseConnection.js'

export async function getAllCompaniesFromDB() {
    const prisma = getPrismaClient()
    return prisma.company.findMany()
}

export async function getCompanyByIdFromDB(id) {
    const prisma = getPrismaClient()
    return prisma.company.findUnique({
        where: {
            id: Number(id),
        },
    })
}

export async function createCompanyInDB(newCompany) {
    const prisma = getPrismaClient()
    return prisma.company.create({
        data: {
            ...newCompany,
        },
    })
}

export async function updateCompanyInDB(newCompany) {
    const prisma = getPrismaClient()
    return prisma.company.update({
        where: {
            id: Number(newCompany.id),
        },
        data: {
            ...newCompany,
        },
    })
}

export async function deleteCompanyFromDB(id) {
    const prisma = getPrismaClient()
    return prisma.company.delete({
        where: {
            id: Number(id),
        },
    })
}
