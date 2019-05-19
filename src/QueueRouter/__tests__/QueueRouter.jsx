import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {act} from 'react-testing-library'
import {QueueRouter, RouterContext} from '../index'
import {RouterSetterContext, RouterHistoryContext} from '../RouterContext'
import history from '../history'

let rootNode
let currentPathVal
let nextPathVal
let historyStoreVal
let setCurrentPathVal
let setNextPathVal

const ContextChecker = () => {
  const {currentPath, nextPath} = useContext(RouterContext)
  const {setCurrentPath, setNextPath} = useContext(RouterSetterContext)
  const {historyStore} = useContext(RouterHistoryContext)
  currentPathVal = currentPath
  nextPathVal = nextPath
  historyStoreVal = historyStore
  setCurrentPathVal = setCurrentPath
  setNextPathVal = setNextPath
  return (
    <div/>
  )
}

const TestNode = () => (
  <QueueRouter>
    <ContextChecker/>
  </QueueRouter>
)

const mount = () => {
  act(() => { ReactDOM.render(<TestNode/>, rootNode) })
}

describe('A <QueueRouter>', () => {
  jest.useFakeTimers()

  beforeEach(() => {
    rootNode = document.createElement('div')
    document.body.appendChild(rootNode)
    act(() => { history.push('/') })
    mount()
  })

  afterEach(() => {
    document.body.removeChild(rootNode)
    rootNode = null
  })

  it('passes values down to its children via context', () => {
    expect(currentPathVal).toBeTruthy()
    expect(nextPathVal).toBeTruthy()
    expect(setCurrentPathVal).toBeTruthy()
    expect(setNextPathVal).toBeTruthy()
  })

  it('updates the paths to be passed down to its children', () => {
    act(() => { setCurrentPathVal('/about') })
    expect(currentPathVal).toBe('/about')
    expect(nextPathVal).toBe('/')

    act(() => { setNextPathVal('/about') })
    expect(currentPathVal).toBe('/about')
    expect(nextPathVal).toBe('/about')
  })

  it('updates the historyStore in reaction to history event', () => {
    expect(historyStoreVal.current.store.length).toBe(0)

    act(() => { history.push('/about') })
    expect(historyStoreVal.current.store[0].pathname).toBe('/about')

    act(() => { history.push('/contact') })
    act(() => { history.goBack() })
    act(() => { jest.runAllTimers() })
    expect(historyStoreVal.current.store[2].pathname).toBe('/about')
  })

  it('updates historyStore only when the path is not same as the last one', () => {
    expect(historyStoreVal.current.store.length).toBe(0)

    act(() => { history.push('/about') })
    act(() => { history.push('/about') })
    expect(historyStoreVal.current.store.length).toBe(1)

    act(() => { history.push('/contact') })
    expect(historyStoreVal.current.store[0].pathname).toBe('/about')
    expect(historyStoreVal.current.store[1].pathname).toBe('/contact')
  })
})
