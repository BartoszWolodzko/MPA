import * as languages from '../backend/language-codes.json' with { type: 'json' }

export class CompanyEntity {
    constructor(data) {
        this.id = Number(data.id)
        this.name = data.name
        this.created_at = data.created_at
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
        return {
            name: this.name,
        }
    }
}
