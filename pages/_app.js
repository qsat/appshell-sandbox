import React, { useRef, Children } from 'react'
import styled from 'styled-components'
import App, { Container } from 'next/app'
import { useTransition, animated } from 'react-spring'
import { BottomNavi, NaviItem } from '../components/molculus/BottomNavigation'

const Layout = styled(animated.div)`
  height: 100%;
  display: grid;
  /* grid-template-areas: "header" 40px
                 "content" 1fr
                 "footer" 55px
                 / 1fr; */
  grid-template-rows: 40px 1fr 55px;
  grid-template-columns: 1fr;
`

const Footer = styled.div`
  border-top: 1px solid #efefef;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  bottom: 0;
`

const PageTransition = ({ asPath, children }) => {
  const prev = useRef(null)
  const child = Children.only(children)
  
  const transitions = useTransition(asPath, p => p, {
    from:  { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)', position: 'absolute' },
  })

  if (!prev.current) {
    prev.current = { [asPath]: child }
    return <Layout>{children}</Layout>
  }

  prev.current = { ...prev.current, [asPath]: child }

  if (transitions.length === 1) prev.current = { [asPath]: child }

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <Layout style={{ ...props, width: '100%'}} key={key}>
          { prev.current[item] }
        </Layout>
      ))}
    </>
  )
}

class Application extends App {
  render () {
    const { Component, router, pageProps } = this.props
    const pathname = router.pathname

    return (
      <Container>
        <PageTransition asPath={router.asPath}>
          <Component {...pageProps} />
        </PageTransition>
        <Footer>
          <BottomNavi>
            <NaviItem href="/" current={pathname}>Recent</NaviItem>
            <NaviItem href="/about" current={pathname}>Favorite</NaviItem>
            <NaviItem href="/rooms" current={pathname}>Settings</NaviItem>
          </BottomNavi>
        </Footer>
      </Container>
    )
  }
}

export default Application
