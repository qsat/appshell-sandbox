import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/template/Layout'
import Loading from '../components/Loading'

const Content = styled.div`
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Home() {
  return (
    <Content>
      <Loading />
    </Content>
  )
}

export default Home
