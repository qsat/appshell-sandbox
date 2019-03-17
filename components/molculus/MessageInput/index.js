import { useCallback } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  height: 40px;
  padding-left: 8px;
  position: sticky;
  bottom: 0;
`

const Input = styled.textarea`
  border: none;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  height: 100%;
  line-height: 1.4em;
  outline: none;
  padding: 10px 0;
  width: 100%;

  &::placeholder{
    color:#ccc
  }
`

const SubmitButton = styled.span`
  bottom: 8px;
  color: ${({ disabled }) => disabled ? '#aaa' : '#0f94f6' };
  display: block;
  font-size: 14px;
  position: absolute;
  right: 12px;
`

export default () => {
  const handleFocus = useCallback((e) => {
    const target = e.target
    // setTimeout(() => target.scrollIntoView(false), 100)
  }, [])
  return (
    <Root>
      <Input placeholder="メッセージを入力" onFocus={handleFocus} onChange={handleFocus}/>
      <SubmitButton disabled>送信</SubmitButton>
    </Root>
  )
}
