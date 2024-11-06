import { errors } from '../com/errors'

const { NotFoundError } = errors

export default (error, req, res, next) => {
    let status = 500

    if (error instanceof NotFoundError)
        status = 404

    res.status(status).json({ error: error.constructor.name, message: error.message })
}