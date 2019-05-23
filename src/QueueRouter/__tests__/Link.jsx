import React from 'react'
import { Link } from '../index'
import { render, cleanup, fireEvent } from 'react-testing-library'

describe('A <Link>', () => {
  afterEach(cleanup)

  it('navigates to the path given by "to" props', () => {
    expect(window.location.pathname).toEqual('/')

    const { getByText } = render(<Link to='/about'>Navigate to About</Link>)
    fireEvent.click(getByText('Navigate to About'))
    expect(window.location.pathname).toEqual('/about')
  })
})
