import { BadRequestError, NotFoundError } from '../errors.js'
import {
    createCategoryInDB,
    deleteCategoryFromDB,
    getAllCategoriesFromDB,
    getCategoryByIdFromDB,
    getChildrenCategoriesFromDB,
    getPrimeCategoriesFromDB,
    updateCategoryInDB,
} from './categoryDB.js'
import { CategoryEntity } from './categoryEntity.js'

export async function getAllCategories() {
    const categories = await getAllCategoriesFromDB()
    return categories.map((category) => new CategoryEntity(category))
}

export async function getCategoryById(id) {
    if (!id) throw new BadRequestError('Please provide an ID')

    const category = await getCategoryByIdFromDB(id)
    if (!category) throw new NotFoundError(`No category found with ID ${id}`)

    return new CategoryEntity(category)
}

export async function getPrimeCategory() {
    const category = await getPrimeCategoriesFromDB()
    return category.map((category) => new CategoryEntity(category))
}

export async function getChildCategory(id) {
    if (!id) throw new BadRequestError('Please provide an ID')

    const categories = await getChildrenCategoriesFromDB(id)
    return categories.map((category) => new CategoryEntity(category))
}

export async function createCategory(data) {
    try {
        if (!data) throw new BadRequestError('Please provide category data')

        const newCategory = new CategoryEntity(data)
        if (!newCategory.validate()) {
            throw new BadRequestError('Invalid category data')
        }

        const result = await createCategoryInDB(newCategory.toORMFriendly())
        return new CategoryEntity(result)
    } catch (error) {
        console.error(error)
        throw new BadRequestError(error.message)
    }
}

export async function updateCategory(id, categoryData) {
    if (!id || !categoryData)
        throw new BadRequestError('Please provide an ID and category data')

    const oldCategory = await getCategoryByIdFromDB(id)
    if (!oldCategory) throw new NotFoundError(`No category found with ID ${id}`)

    const updatedData = { ...oldCategory, ...categoryData }

    const updatedCategory = new CategoryEntity({ id, ...updatedData })
    if (!updatedCategory.validate()) {
        throw new BadRequestError('Invalid company data')
    }

    const result = await updateCategoryInDB(updatedCategory)
    return new CategoryEntity(result)
}

export async function deleteCategory(id) {
    if (!id) throw new BadRequestError('Please provide an ID')
    const deletedCategory = await deleteCategoryFromDB(id)
    return new CategoryEntity(deletedCategory)
}
