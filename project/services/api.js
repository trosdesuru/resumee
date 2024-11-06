import { errors } from '../com/index'

const { SystemError } = errors

const experienceData = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/experiencia`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const { status } = response

            if (status === 200) {
                return response.json()
                    .then(data => data)
            }

            return response.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

const habilitiesData = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/habilidades`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const { status } = response

            if (status === 200) {
                return response.json()
                    .then(data => data)
            }

            return response.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

const projectData = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/proyectos`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const { status } = response

            if (status === 200) {
                return response.json()
                    .then(data => data)
            }

            return response.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

const educationData = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/formacion`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const { status } = response

            if (status === 200) {
                return response.json()
                    .then(data => data)
            }

            return response.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]
                    throw new constructor(message)
                })
        })
}

export { experienceData, habilitiesData, projectData, educationData }