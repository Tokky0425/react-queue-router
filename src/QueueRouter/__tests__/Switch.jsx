import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-testing-library'
import history from '../history'
import { QueueRouter, Switch, Route } from '../index'

let rootNode
const Top = () => (
  <div>
    <h1>Top page</h1>
  </div>
)
const About = () => (
  <div>
    <h1>About page</h1>
  </div>
)
const User = ({ params }) => (
  <div>
    <h1>User page (ID: {params.id})</h1>
  </div>
)
const UserPost = ({ params }) => (
  <div>
    <h1>
      User Post page (ID: {params.id}, PostID: {params.postId})
    </h1>
  </div>
)
const NotFound = () => (
  <div>
    <h1>404 page</h1>
  </div>
)

const TestNode = () => (
  <QueueRouter>
    <Switch>
      <Route path='/' component={Top} />
      <Route path='/about' component={About} />
      <Route path='/users/:id' component={User} />
      <Route path='/users/:id/:postId' component={UserPost} />
      <Route component={NotFound} />
    </Switch>
  </QueueRouter>
)

const mount = () => {
  act(() => {
    ReactDOM.render(<TestNode />, rootNode)
  })
}

describe('A <Switch>', () => {
  beforeEach(() => {
    rootNode = document.createElement('div')
    document.body.appendChild(rootNode)
  })

  afterEach(() => {
    document.body.removeChild(rootNode)
    rootNode = null
  })

  it('renders Top component', () => {
    mount()
    expect(rootNode.innerHTML).toContain('Top page')
    expect(rootNode.innerHTML).not.toContain('About page')
    expect(window.location.pathname).toEqual('/')
  })

  it('renders About component', () => {
    act(() => {
      history.push('/about')
    })
    mount()
    expect(rootNode.innerHTML).not.toContain('Top page')
    expect(rootNode.innerHTML).toContain('About page')
    expect(window.location.pathname).toEqual('/about')
  })

  it('renders User component with params', () => {
    act(() => {
      history.push('/users/1')
    })
    mount()
    expect(rootNode.innerHTML).not.toContain('Top page')
    expect(rootNode.innerHTML).toContain('User page (ID: 1)')
    expect(window.location.pathname).toEqual('/users/1')
  })

  it('renders UserPost component with params', () => {
    act(() => {
      history.push('/users/1/2')
    })
    mount()
    expect(rootNode.innerHTML).toContain('User Post page (ID: 1, PostID: 2)')
    expect(window.location.pathname).toEqual('/users/1/2')
  })

  it('renders NotFound component', () => {
    act(() => {
      history.push('/404')
    })
    mount()
    expect(rootNode.innerHTML).toContain('404 page')
    expect(window.location.pathname).toEqual('/404')
  })
})
