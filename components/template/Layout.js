import React, { useState, useCallback } from 'react';
import styled from 'styled-components'

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template: "header" 40px
                 "content" 1fr
                 "footer" 55px
                 / 1fr;`

const Footer = styled.div`
  grid-column: footer;
  border-top: 1px solid #efefef;
`

const BottomNavi = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 3px;
  margin: 0px;
  height: 100%;
`

const BottomNaviItem = styled.li`
  list-style: none;
  display: block;
  width: 100%;
  padding: 19px 3px 6px;
  padding-top: ${({active}) => active ? '6px' : '19px'};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  & > span {
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.54);
    font-size: 11px;

    & > span {
      opacity: ${({active}) => active ? 1 : 0};
      font-size: ${({active}) => active ? '1em' : '0.8em'};
      transition: font-size 0.2s, opacity 0.2s;
    }

    &.active {
      color: #2196f3;
    }
    &::active {
      background: transparent;
    }
  }
`

const Content = styled.div`
  grid-column: content;
`

const Icon1 = styled.div`
  flex-shrink: 0;
  fill: currentColor;
  font-size: 24px;
  width: 1em;
  height: 1em;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

const Icon = () => (
  <Icon1>
    <svg class="j2dfb39" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg> 
  </Icon1>
)

const NaviItem = ({ active, onClick, index, children }) => (
  <BottomNaviItem active={active}>
    <span className={ active ? 'active' : ''} onClick={() => onClick(index)}>
      <Icon />
      <span>{children}</span>
    </span>
  </BottomNaviItem>
)

export default ({ children }) => {
  const [active, setActive] = useState(0)
  return (
    <Layout>
      { children }
      <Footer>
        <BottomNavi>
          <NaviItem index={0} active={active === 0} onClick={setActive}>Recent</NaviItem>
          <NaviItem index={1} active={active === 1} onClick={setActive}>Favorite</NaviItem>
          <NaviItem index={2} active={active === 2} onClick={setActive}>Recent</NaviItem>
        </BottomNavi>
      </Footer>
    </Layout>
  )
}
