import React from 'react'
import ReactDOM from 'react-dom'
import { getByText, fireEvent, act } from 'react-testing-library'
import history from '../history'
import { QueueRouter, Switch, Route, Link, useTransition } from '../index'

let rootNode

const Top = () => {
  useTransition(enterAnimation, leaveAnimation)
  return (
    <div>
      <h1>Top page</h1>
    </div>
  )
}

const About = () => {
  useTransition(enterAnimation, leaveAnimation)
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}

const User = ({ params }) => {
  useTransition(enterAnimation, leaveAnimation)
  return (
    <div>
      <h1>User page (ID: {params.id})</h1>
    </div>
  )
}

const NotFound = () => {
  useTransition(enterAnimation, leaveAnimation)
  return (
    <div>
      <h1>404 page</h1>
    </div>
  )
}

const enterAnimation = ({ release }) => {
  setTimeout(() => {
    release()
  }, 1000)
}

const leaveAnimation = ({ release }) => {
  setTimeout(() => {
    release()
  }, 2000)
}

// simulate clicking Link
const clickNavigation = (container, text) => {
  act(() => {
    fireEvent.click(getByText(container, text))
  })
}

// fast forward `setTimeout` in leaveAnimation and enterAnimation
const fastForward = () => {
  act(() => {
    jest.runAllTimers()
  })
}

const TestNode = () => (
  <QueueRouter>
    <Link to='/'>Navigate to Top</Link>
    <Link to='/about'>Navigate to About</Link>
    <Link to='/users/1'>Navigate to User 1</Link>
    <Link to='/users/2'>Navigate to User 2</Link>
    <Link to='/404'>Navigate to 404</Link>
    <Switch>
      <Route path='/' component={Top} />
      <Route path='/about' component={About} />
      <Route path='/users/:id' component={User} />
      <Route component={NotFound} />
    </Switch>
  </QueueRouter>
)

const mount = () => {
  act(() => {
    ReactDOM.render(<TestNode />, rootNode)
  })
}

describe('Integration test', () => {
  jest.useFakeTimers()

  beforeEach(() => {
    rootNode = document.createElement('div')
    document.body.appendChild(rootNode)
  })

  afterEach(() => {
    document.body.removeChild(rootNode)
    rootNode = null
  })

  it('works without a crash', () => {
    // initial mount
    mount()
    fastForward()
    expect(window.location.pathname).toEqual('/')
    expect(rootNode.innerHTML).toContain('Top page')
    expect(rootNode.innerHTML).not.toContain('About page')

    // go to About page
    clickNavigation(rootNode, 'Navigate to About')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/about')
    expect(rootNode.innerHTML).not.toContain('Top page')
    expect(rootNode.innerHTML).toContain('About page')

    // go to User (ID: 1) page
    clickNavigation(rootNode, 'Navigate to User 1')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/users/1')
    expect(rootNode.innerHTML).not.toContain('About page')
    expect(rootNode.innerHTML).toContain('User page (ID: 1)')

    // go to User (ID: 2) page
    clickNavigation(rootNode, 'Navigate to User 2')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/users/2')
    expect(rootNode.innerHTML).not.toContain('User page (ID: 1)')
    expect(rootNode.innerHTML).toContain('User page (ID: 2)')

    // hit browser back
    act(() => {
      history.goBack()
    })
    fastForward() // This is run but nothing will happen at router level
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/users/1')
    expect(rootNode.innerHTML).not.toContain('User page (ID: 2)')
    expect(rootNode.innerHTML).toContain('User page (ID: 1)')

    // hit same navigation twice
    // (second hit is expected to be ignored)
    clickNavigation(rootNode, 'Navigate to Top')
    clickNavigation(rootNode, 'Navigate to Top')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/')
    expect(rootNode.innerHTML).toContain('Top page')

    // hit different navigation twice
    // (second hit is expected to be valid only after the first hit is done)
    clickNavigation(rootNode, 'Navigate to About')
    clickNavigation(rootNode, 'Navigate to Top')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/')
    expect(rootNode.innerHTML).toContain('About page')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/')
    expect(rootNode.innerHTML).toContain('Top page')

    // go to 404 page
    clickNavigation(rootNode, 'Navigate to 404')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/404')
    expect(rootNode.innerHTML).toContain('404 page')

    // transition from 404 page
    clickNavigation(rootNode, 'Navigate to Top')
    fastForward()
    fastForward()
    expect(window.location.pathname).toEqual('/')
    expect(rootNode.innerHTML).toContain('Top page')
  })
})
