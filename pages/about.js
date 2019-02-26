import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

function About() {
  return <div>
    <Title>About</Title>
    Welcome to next.js!!!!!
    <Link prefetch href={{ pathname: '/about' }}>
      <a>aboutabout</a>
    </Link>
  </div>
}

export default About
