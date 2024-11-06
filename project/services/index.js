import express from 'express'

import { cors, errorHandler } from '../middlewares'

return fetch(VITE_API_URL)
.then(() => {
    console.info(`API connected to ${VITE_API_URL}`)

    const api = express()

    api.use(cors)

    api.get('VITE_API_URL/experience')

    api.get('VITE_API_URL/habilidades')

    api.get('VITE_API_URL/proyectos')

    api.get('VITE_API_URL/formacion')

    api.use(errorHandler)

    api.listen(process.env.PORT, () => console.info(`API listening on PORT ${PORT}`))
})
.catch(error => console.error(error))