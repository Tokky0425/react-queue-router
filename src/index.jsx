import React from 'react'
import {render} from 'react-snapshot'
import './styles/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

render(<App/>, document.getElementById('root'))

serviceWorker.unregister()
