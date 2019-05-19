## What is React Queue Router?
React Queue Router is an animation friendly router for React.
The interface is similar to `React Router` but you can be more flexible about transition animation.

See the document: [https://tokky0425.github.io/react-queue-router/](https://tokky0425.github.io/react-queue-router/)

## Installation
```bash
$ npm install --save react-queue-router
```

## Basic usage
Let's assume you have 3 pages (Top, About and 404) on your web site.

**App.jsx**
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {QueueRouter, Switch, Route} from 'react-queue-router'

import Top from './Top'
import About from './About'
import NotFound from './NotFound'

const App = () => {
  return (
    <QueueRouter>
      <Switch>
        <Route path='/' component={Top}/>
        <Route path='/about' component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </QueueRouter>
  )
 }
 
ReactDOM.render(<App/>, document.getElementById('root'))
```

**Top.jsx**
```javascript
import React from 'react'
import {useTransition} from 'react-queue-router'

const Top = () => {
  useTransition()
  
  return <h1>Hello, React Queue Router!</h1>
}

export default Top
```

**About.jsx**
```javascript
import React from 'react'
import {useTransition} from 'react-queue-router'

const About = () => {
  useTransition()
  
  return <h1>Hello, About page!</h1>
}

export default About
```

**NotFound.jsx**
```javascript
import React from 'react'
import {useTransition} from 'react-queue-router'

const NotFound = () => {
  useTransition()
  
  return <h1>404 Page Not Found</h1>
}

export default NotFound
```

For adding transition animation, see Usage of document: [https://tokky0425.github.io/react-queue-router/usage/](https://tokky0425.github.io/react-queue-router/usage/)

## License

This project is licensed under the MIT License - See the [LICENSE](./LICENSE) file for details.
