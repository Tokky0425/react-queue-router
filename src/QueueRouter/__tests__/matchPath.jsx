import React from 'react'
import {matchPath} from '../index'

describe('matchPath', () => {
  it('return truthy when the given pathname matches', () => {
    expect(matchPath('/one', { path: '/one', exact: false, strict: false })).toBeTruthy()

    expect(matchPath('/one/two/', { path: '/one/two', exact: false, strict: false })).toBeTruthy()
    expect(matchPath('/one/two/', { path: '/one/two', exact: true, strict: false })).toBeTruthy()
    expect(matchPath('/one/two/', { path: '/one/two', exact: false, strict: true })).toBeTruthy()
    expect(matchPath('/one/two/', { path: '/one/two', exact: true, strict: true })).toBeFalsy()

    expect(matchPath('/one/two', { path: '/one/two/', exact: false, strict: false })).toBeFalsy()
    expect(matchPath('/one/two', { path: '/one/two/', exact: true, strict: false })).toBeFalsy()
    expect(matchPath('/one/two', { path: '/one/two/', exact: false, strict: true })).toBeFalsy()
    expect(matchPath('/one/two', { path: '/one/two/', exact: true, strict: true })).toBeFalsy()
  })

  it('takes just path string as options', () => {
    expect(matchPath('/about', '/about')).toBeTruthy()
  })
})
