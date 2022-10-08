import React, { ReactNode, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

const DumbDiv = styled.div<{
  x: number;
  y: number;
}>`
  background: green;
  width: 100px;
  height: 100px;
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  z-index: 1;
`;

const ContentLayerWrapper = styled.div<{
  isDragging: boolean;
  width: number;
  height: number;
}>`
  position: absolute;
  z-index: 1;
  ${(props) => css`
    height: ${props.height}px;
    width: ${props.width}px;
  `}
`;

function ContentLayer(props) {
  const [dumbDivs, setDumbDivs] = useState<ReactNode[]>([]);
  const addDumbDiv = useCallback(
    (x, y) => {
      dumbDivs.push(<DumbDiv key={x + y} x={x} y={y} />);
      setDumbDivs([...dumbDivs]);
    },
    [dumbDivs]
  );
  return <ContentLayerWrapper></ContentLayerWrapper>;
}

export default ContentLayer;
