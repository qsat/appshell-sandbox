import React from 'react';
import styled from 'styled-components'

const Loading = styled.svg`
  width: 35px;
  height: 30px;

  rect {
   fill: #2196f3;
  }
`;

const Transform = ({begin}) => 
  <animateTransform 
    attributeType="xml"
    attributeName="transform"
    type="translate"
    values="0 0; 0 20; 0 0"
    begin={begin}
    calcMode="spline"
    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
    dur="0.6s"
    repeatCount="indefinite" />

export default () => (
  <Loading>
    <rect x="0" y="0" width="3" height="10" transform="translate(0 19.1863)">
      <Transform begin={0} />
    </rect>
    <rect x="8" y="0" width="3" height="10" transform="translate(0 5.85293)">
      <Transform begin={0.08} />
    </rect>
    <rect x="16" y="0" width="3" height="10" transform="translate(0 7.4804)">
      <Transform begin={0.16} />
    </rect>
    <rect x="24" y="0" width="3" height="10" transform="translate(0 7.4804)">
      <Transform begin={0.24} />
    </rect>
  </Loading>
)
