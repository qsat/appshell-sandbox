import React from 'react'
import styled from 'styled-components'
import Layout from '../components/template/Layout'
import Message from '../components/molculus/Message'
import MessageInput from '../components/molculus/MessageInput'

const Title = styled.h1`
  color: blue;
  font-size: 30px;
  display: block;
  align-items: center;
  justify-content: center;
  background: #eee;
  height: 40px;
  width: 100%;
  margin: 0;
  position: fixed;
  z-index: 100;
  top: 0;
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
  padding: 5px 15px;
  position: absolute;
`

const MessageFrom = styled.div`
  color: #aaa;
  font-size: 12px;
  margin-bottom: -3px;
`

const MessagePostedAt = styled.div`
  color: #aaa;
  font-size: 10px;
  margin-top: -2px;
`

function About() {
  return (
    <>
      <Title>AAAA</Title>
      <Content>
        <MessageContainer>
          <MessageList>
            <MessagePostedAt>00:00</MessagePostedAt>
            <Message>aaaa</Message>
            <MessageFrom>aaaaa</MessageFrom>

            <Message>aaaa</Message>
            <MessageFrom>aaaa</MessageFrom>

            <Message align="right" type="primary">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Message>
            <Message align="right" type="primary">aaaa</Message>
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
