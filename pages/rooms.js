import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Ripple from '../components/atoms/Ripple'

import { Router } from '../routes'

const Title = styled.h1`
  color: blue;
  font-size: 30px;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  height: 40px;
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
  box-sizing: border-box;
  list-style: none;
  display: flex;
  height: 56px;
  width: 100vw;
  padding: 0 0 0 7px;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
`

const RoomStatus = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${({ unread }) => unread ? '#e44' : 'transparent'};
  margin-right: 7px;
  flex: none;
`

const Ellipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
`

const RoomInfo = styled.div`
  overflow: hidden;
  pointer-events: none;
`

const RoomName = styled(Ellipsis)``

const LastMessage = styled(Ellipsis)`
  font-size: 12px;
  color: #bbb;
`


const Room = ({ href, children }) => {
  const [ripple, startRipple] = useState(null)
  const handleMouseDown = useCallback((e) => {
    const rect = e.target.getBoundingClientRect()
    startRipple([
      `${((e.clientX - rect.x)/rect.width) * 100}%`,
      `${((e.clientY - rect.y)/rect.height)* 100}%`,
    ])
    setTimeout(() => startRipple(null), 500)
    Router.pushRoute(href)
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
  border: 2px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
`

const AvaterList = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  pointer-events: none;
  flex-direction: row-reverse;

  & > div {
    margin-left: -12px;

    &:last-child {
      margin-left: 0;
    }
  }
`

function Rooms() {
  return (
    <>
      <Title>AAAA</Title>
      <Content>
        <RoomList>
          <Room href='/rooms/1'>
            <RoomStatus unread />
            <RoomInfo>
              <RoomName>
                Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
              </RoomName>
              <LastMessage>
                (1時間前) こんにちはこんにちはこんにちはこんばんわ
              </LastMessage>
            </RoomInfo>
            <AvaterList>
              <Avater>A</Avater>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/2'>
            <RoomStatus />
            <RoomInfo>
              <RoomName>
                Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
              </RoomName>
              <LastMessage>
                (1時間前) こんにちはこんにちはこんにちはこんばんわ
              </LastMessage>
            </RoomInfo>
            <AvaterList>
              <Avater>A</Avater>
            </AvaterList>
          </Room>
          <Room href='/rooms/3'>
            <RoomStatus />
            <RoomInfo>
              <RoomName>
                Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1Room1
              </RoomName>
              <LastMessage>
                (1時間前) こんにちはこんにちはこんにちはこんばんわ
              </LastMessage>
            </RoomInfo>
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

export default Rooms 
