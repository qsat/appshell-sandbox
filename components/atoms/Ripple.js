import styled from 'styled-components'

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
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(3);
    }
  }
`

export default Ripple
