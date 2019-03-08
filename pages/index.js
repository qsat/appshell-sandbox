import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/template/Layout'

const Title = styled.div`
  grid-column: header;
  color: red;
  font-size: 30px;
`

const Content = styled.div`
  grid-column: content;
`

function Home() {
  useEffect(() => {
    document.title = `You clicked times`
  })

  return (
    <Layout>
      <Title>tests</Title>
      <Content>
        <h1>asaas</h1>
        <Link prefetch href={{ pathname: '/about' }}>
          <a>aboutabout</a>
        </Link>
      </Content>
    </Layout>
  )
}

export default Home
