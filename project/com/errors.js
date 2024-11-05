class SystemError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message)

        this.name = this.message.name
    }
}

const errors = {
    SystemError,
    NotFoundError
}

export default errors