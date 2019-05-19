import {createContext} from 'react'

export const RouterContext = createContext()
export const RouterSetterContext = createContext()
export const RouterHistoryContext = createContext()
export const RouterContextProvider = RouterContext.Provider
export const RouterSetterContextProvider = RouterSetterContext.Provider
export const RouterHistoryContextProvider = RouterHistoryContext.Provider
