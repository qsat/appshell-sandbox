import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ align = 'left' }) => `flex-${align === 'left' ? 'start' : 'end' }`};
  padding-left: ${({ align = 'left' }) => `${align === 'left' ? 0 : 20 }`}px;
  padding-right: ${({ align = 'left' }) => `${align === 'left' ? 20 : 0 }`}px;
`

const colors = {
  normal: '#dedede',
  primary: '#2196f3',
}

const Content = styled.div`
  background: ${({ type }) => colors[type || 'normal']};
  border-radius: 4px;
  margin: 5px 15px;
  padding: 10px;
  word-break: break-all;
`

export default ({ align, type, children }) => {
  return (
    <Wrapper align={align}>
      <Content type={type}>{children}</Content>
    </Wrapper>
  )
}
