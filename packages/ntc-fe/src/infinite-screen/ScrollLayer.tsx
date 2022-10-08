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
  wrapperRef: React.MutableRefObject<any>;
  mapSize: {
    width: number;
    height: number;
  };
}) {
  const { wrapperRef, mapSize } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [startDraggingPoint, setStartDraggingPoint] = useState({
    left: 0,
    top: 0,
    // Get the current mouse position
    x: 0,
    y: 0,
  });
  console.log('in scroll layer: ', props);
  if (!wrapperRef.current) {
    return null;
  }
  return (
    <ScrollLayerWrapper
      {...mapSize}
      isDragging={isDragging}
      onMouseDown={(e) => {
        setStartDraggingPoint({
          // The current scroll
          left: wrapperRef.current.scrollLeft,
          top: wrapperRef.current.scrollTop,
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
        wrapperRef.current.scrollTo(
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
