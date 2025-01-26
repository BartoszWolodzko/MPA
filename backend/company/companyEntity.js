export class CompanyEntity {
    constructor(data) {
        this.id = Number(data.id)
        this.name = data.name
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    validate() {
        if (this.name === '') {
            return false
        }

        return true
    }

    toORMFriendly() {
        return {
            name: this.name,
        }
    }
}
