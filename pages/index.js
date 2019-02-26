import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import InfiniteCalendar from 'react-infinite-calendar';

import 'react-infinite-calendar/styles.css';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

function Home() {
  useEffect(() => {
    document.title = `You clicked times`

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      console.log('1238127398712')
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/_next/serviceworker.js')
      })
    }

  })

  return <div>
    <Title>tests</Title>
    Welcome to next.js!!!!!
    <InfiniteCalendar height={300} width={375} displayOptions={{ showHeader: false }} />
    <Link prefetch href={{ pathname: '/about' }}>
      <a>aboutabout</a>
    </Link>
  </div>
}

export default Home
