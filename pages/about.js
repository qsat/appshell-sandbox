import React from 'react'
import styled from 'styled-components'
import Layout from '../components/template/Layout'
import Message from '../components/molculus/Message'
import MessageInput from '../components/molculus/MessageInput'

const Title = styled.h1`
  color: blue;
  font-size: 30px;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  height: 100%;
  margin: 0;
`

const Content = styled.div`
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
`

const MessageContainer = styled.div`
  position: relative;
  overflow: scroll;
  height: 100%;
`

const MessageList = styled.div`
  display: flex;
  flex-glow: 0;
  flex-basis: auto;
  flex-direction: column-reverse;
  position: absolute;
`

function About() {
  return (
    <>
      <Title>AAAA</Title>
      <Content>
        <MessageContainer>
          <MessageList>
            <Message>aaaa</Message>
            <Message>aaaa</Message>
            <Message align="right" type="primary">aaaa</Message>
            <Message align="right" type="primary">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Message>
            <Message>aaaa</Message>
            <Message>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Message>
            <Message>aaaa</Message>
            <Message align="right" type="primary">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Message>
          </MessageList>
        </MessageContainer>
        <MessageInput />
      </Content>
    </>
  )
}

export default About
