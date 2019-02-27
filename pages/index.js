import React, { useEffect } from 'react'
import { install } from '@material-ui/styles';
import Link from 'next/link'
import styled from 'styled-components'
import InfiniteCalendar from 'react-infinite-calendar';
import Layout from '../components/template/Layout'

import 'react-infinite-calendar/styles.css';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

install()

function Home() {
  useEffect(() => {
    document.title = `You clicked times`
  })

  return (
    <Layout>
      <Title>tests</Title>
      Welcome to next.js!!!!!
      <InfiniteCalendar height={300} width={375} displayOptions={{ showHeader: false }} />
      <Link prefetch href={{ pathname: '/about' }}>
        <a>aboutabout</a>
      </Link>
    </Layout>
  )
}

export default Home
