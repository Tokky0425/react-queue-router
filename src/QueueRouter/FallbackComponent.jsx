import React, {Fragment} from 'react'
import {useTransition} from './dispatcher'

const FallbackComponent = () => {
  useTransition()

  return (
    <Fragment/>
  )
}

export default FallbackComponent
