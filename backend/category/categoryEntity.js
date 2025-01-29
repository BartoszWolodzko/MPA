import * as languages from '../language-codes.json' with { type: 'json' }

export class CategoryEntity {
    constructor(data) {
        this.id = Number(data.id)
        this.name = data.name
        this.parentCategoryId = Number(data.parentCategoryId)
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    validate() {
        if (!typeof this.name === 'JSON') {
            return false
        }

        for (let key in this.name) {
            if (!Object.keys(languages.default).includes(key)) {
                return false
            }
        }

        return true
    }

    toORMFriendly() {
        let ormData = {}
        if (this.id) {
            ormData.id = this.id
        }
        if (this.name) {
            ormData.name = this.name
        }
        if (this.parentCategoryId) {
            ormData.parentCategoryId = this.parentCategoryId
        }
        return ormData
    }
}
