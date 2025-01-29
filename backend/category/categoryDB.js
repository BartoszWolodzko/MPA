import { getPrismaClient } from '../prisma/databaseConnection.js'

export async function getAllCategoriesFromDB() {
    const prisma = getPrismaClient()
    return prisma.category.findMany()
}

export async function getCategoryByIdFromDB(id) {
    const prisma = getPrismaClient()
    return prisma.category.findUnique({
        where: {
            id: Number(id),
        },
    })
}

export async function getPrimeCategoriesFromDB() {
    const prisma = getPrismaClient()
    return prisma.category.findMany({
        where: {
            parentCategoryId: null,
        },
    })
}

export async function getChildrenCategoriesFromDB(parentId) {
    const prisma = getPrismaClient()
    return prisma.category.findMany({
        where: {
            parentCategoryId: Number(parentId),
        },
    })
}

export async function createCategoryInDB(newCategory) {
    const prisma = getPrismaClient()
    return prisma.category.create({
        data: {
            ...newCategory,
        },
    })
}

export async function updateCategoryInDB(newCategory) {
    const prisma = getPrismaClient()
    return prisma.category.update({
        where: {
            id: Number(newCategory.id),
        },
        data: {
            ...newCategory,
        },
    })
}

export async function deleteCategoryFromDB(id) {
    const prisma = getPrismaClient()
    return prisma.category.delete({
        where: {
            id: Number(id),
        },
    })
}
