import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Add your form submission logic here
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Message:
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form