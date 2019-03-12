import React from 'react'
import styled from 'styled-components'
import Layout from '../components/template/Layout'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`

function About() {
  return (
    <>
      <Title>AAAA</Title>
      <Content>
        <MessageContainer>
          aaaa
        </MessageContainer>
      </Content>
    </>
  )
}

export default About
