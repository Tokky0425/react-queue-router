import React from 'react'
import {Route} from '../index'
import {render, cleanup} from 'react-testing-library'

const User = ({params}) => <div><h1>User page (ID: {params.id})</h1></div>

describe('A <Route>', () => {
  afterEach(cleanup)

  it('renders child component passed in "component" props with params', () => {
    const params = {id: 1} // params actually will be passed down by Switch component
    const {container} = render(<Route params={params} component={User}/>)
    expect(container.innerHTML).toContain('User page (ID: 1)')
  })
})
