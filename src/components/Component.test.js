import { render, screen } from '@testing-library/react'
import MyComponent from './Component'

test('render Component correctly', () => {
    render(<MyComponent />)
    
    const linkElement = screen.getByText(/text/i)
    expect(linkElement).toBeInTheDocument()
})

test('aplica clases de Tailwind correctamente', () => {
    render(<MyComponent />)

    const element = screen.getByTestId('test-id')
    expect(element).toHaveClass('bg-blue-500')
})