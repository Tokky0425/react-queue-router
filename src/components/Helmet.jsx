import React from 'react'
import {Helmet as H} from 'react-helmet/es/Helmet'

const Helmet = ({title = '', path = ''}) => (
  <H>
    <title>{title ? `${title} | `: ''}React Queue Router</title>
    <meta property="og:url" content={`https://tokky0425.github.io/react-queue-router/${path}`} />
    <meta property="og:title" content={`${title ? `${title} | ` : ''}React Queue Router`} />
  </H>
)

export default Helmet
