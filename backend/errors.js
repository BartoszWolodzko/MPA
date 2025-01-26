export class HttpError extends Error {
    constructor(message, statusCode = 500) {
        super(message)
        this.statusCode = statusCode
    }
}

export class BadRequestError extends HttpError {
    constructor(message) {
        super('Bad Request' + '\n' + message, 400)
    }
}

export class UnauthorizedError extends HttpError {
    constructor() {
        super('Unauthorized' + '\n' + message, 401)
    }
}

export class ForbiddenError extends HttpError {
    constructor() {
        super('Forbidden' + '\n' + message, 403)
    }
}

export class NotFoundError extends HttpError {
    constructor() {
        super('Not Found' + '\n' + message, 404)
    }
}

export class InternalServerError extends HttpError {
    constructor() {
        super('Internal Server Error' + '\n' + message, 500)
    }
}

export class NotImplementedError extends HttpError {
    constructor() {
        super('Not Implemented' + '\n' + message, 501)
    }
}
