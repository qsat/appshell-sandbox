import React, { useState, useCallback } from 'react';
import Router from 'next/router'
import styled from 'styled-components'

import Ripple from '../../atoms/Ripple'
import FavoriteIcon from '../../icons/Favorite'

export const BottomNavi = styled.ul`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px;
  margin: 0px;
  height: 100%;
`

const BottomNaviItem = styled.li`
  list-style: none;
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 14px 3px 2px;
  padding-top: ${({active}) => active ? '2px' : '14px'};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  & > .button {
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    flex-direction: column;
    pointer-events: none;
    height: 100%;
    text-decoration: none;
    color: ${({ active }) => active ? '#2196f3' : 'rgba(0, 0, 0, 0.54)'};
    font-size: 11px;

    & > span {
      opacity: ${({active}) => active ? 1 : 0};
      font-size: ${({active}) => active ? '1em' : '0.8em'};
      transition: font-size 0.2s, opacity 0.2s;
    }
  }
`

const Icon1 = styled.div`
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

const Icon = () => (
  <Icon1><FavoriteIcon /></Icon1>
)

export const NaviItem = ({ href, current, children }) => {
  const [ripple, startRipple] = useState(null)
  const handleMouseDown = useCallback((e) => {
    const rect = e.target.getBoundingClientRect()
    startRipple([
      `${((e.clientX - rect.x)/rect.width) * 100}%`,
      `${((e.clientY - rect.y)/rect.height)* 100}%`,
    ])
    setTimeout(() => startRipple(null), 500)
    Router.push(href)
  }, [])
  return (
    <BottomNaviItem active={href === current} onClick={handleMouseDown}>
      <span className="button">
        <Icon />
        <span>{children}</span>
      </span>
      <Ripple ripple={ripple} />
    </BottomNaviItem>
  )
}
