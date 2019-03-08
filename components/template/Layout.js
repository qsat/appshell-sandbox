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
  padding: 19px 3px 6px;
  padding-top: ${({active}) => active ? '6px' : '19px'};
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

const Ripple = styled.span`
  animation: ${({ ripple }) => ripple ? 'ripple 0.75s ease-out' : 'none'};
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  pointer-events: none;
  background: rgba(0,0,0,0.1);
  transform: translate(-50%, -50%) scale(0);
  top: ${({ ripple }) => ripple ? `${ripple[1]}` : '50%'};
  left: ${({ ripple }) => ripple ? `${ripple[0]}` : '50%'};

  @keyframes ripple {
    from {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0);
    }
    to {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
  }
`

const Icon = () => (
  <Icon1>
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg> 
  </Icon1>
)

const NaviItem = ({ active, onClick, index, children }) => {
  const [ripple, startRipple] = useState(null)
  const handleMouseDown = useCallback((e) => {
    const rect = e.target.getBoundingClientRect()
    startRipple([
      `${((e.clientX - rect.x)/rect.width) * 100}%`,
      `${((e.clientY - rect.y)/rect.height)* 100}%`,
    ])
    setTimeout(() => startRipple(null), 500)
    onClick(index)
  }, [])
  return (
    <BottomNaviItem active={active} onClick={handleMouseDown}>
      <span className="button">
        <Icon />
        <span>{children}</span>
      </span>
      <Ripple ripple={ripple} />
    </BottomNaviItem>
  )
}

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
