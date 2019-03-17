import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Ripple from '../components/atoms/Ripple'

import route from '../routes'

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

const RoomList = styled.ul`
  margin: 0;
  padding: 0;
`

const RoomItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  list-style: none;
  display: flex;
  height: 40px;
  width: 100vw;
  padding: 0px 15px;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
`
const RoomName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
`

const Room = ({ children }) => {
  const [ripple, startRipple] = useState(null)
  const handleMouseDown = useCallback((e) => {
    const rect = e.target.getBoundingClientRect()
    startRipple([
      `${((e.clientX - rect.x)/rect.width) * 100}%`,
      `${((e.clientY - rect.y)/rect.height)* 100}%`,
    ])
    setTimeout(() => startRipple(null), 500)
    // route.push(href)
  }, [])

  return (
    <RoomItem onClick={handleMouseDown}>
      { children }
      <Ripple ripple={ripple} />
    </RoomItem>
  )
}

const Avater = styled.div`
  background: #33d;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`

const AvaterList = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 25px;
  pointer-events: none;
  flex-direction: row-reverse;

  & > div {
    margin-left: -14px;

    &:last-child {
      margin-left: 0;
    }
  }
`

function About() {
  return (
    <>
      <Title>AAAA</Title>
      <Content>
        <RoomList>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/1'>
            <RoomName>
            Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
            </RoomName>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
        </RoomList>
      </Content>
    </>
  )
}

export default About
