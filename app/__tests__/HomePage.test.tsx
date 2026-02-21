import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../page'

describe('HomePage', () => {
  it('renders the main collection heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /our collection/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
