import React, {Fragment, createElement} from 'react'

const Route = ({component, params}) => {
  const newComponent = createElement(component, {params})

  return (
    <Fragment>
      {newComponent}
    </Fragment>
  )
}

export default Route
