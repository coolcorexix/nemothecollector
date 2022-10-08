import React, { Ref, useState } from 'react';
import styled, { css } from 'styled-components';

const ScrollLayerWrapper = styled.div<{
  isDragging: boolean;
  width: number;
  height: number;
}>`
  position: absolute;
  cursor: ${(props) => (props.isDragging ? 'grabbing' : 'grab')};
  background: pink;
  opacity: 0.4;
  z-index: 2;
  ${(props) => css`
    height: ${props.height}px;
    width: ${props.width}px;
  `}
`;

function ScrollLayer(props: {
  viewportRef: React.MutableRefObject<any>;
  mapSize: {
    width: number;
    height: number;
  };
}) {
  const { viewportRef, mapSize } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [startDraggingPoint, setStartDraggingPoint] = useState({
    left: 0,
    top: 0,
    // Get the current mouse position
    x: 0,
    y: 0,
  });
  console.log('in scroll layer: ', props);
  if (!viewportRef.current) {
    return null;
  }
  return (
    <ScrollLayerWrapper
      {...mapSize}
      isDragging={isDragging}
      onMouseDown={(e) => {
        setStartDraggingPoint({
          // The current scroll
          left: viewportRef.current.scrollLeft,
          top: viewportRef.current.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
        });
        setIsDragging(true);
      }}
      onMouseMove={(e) => {
        const dx = e.clientX - startDraggingPoint.x;
        const dy = e.clientY - startDraggingPoint.y;

        // Scroll the element
        viewportRef.current.scrollTo(
          startDraggingPoint.left - dx,
          startDraggingPoint.top - dy
        );
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
    />
  );
}

export default ScrollLayer;
