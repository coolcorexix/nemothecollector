import React, { ReactNode, useCallback, useEffect, useState } from 'react';
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

const DumbImg = styled.img<{
  x: number;
  y: number;
}>`
  width: 100px;
  height: 100px;
  object-fit: contain;
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

function ContentLayer(props: { width: number; height: number }) {
  const [dumbDivs, setDumbDivs] = useState<ReactNode[]>([]);
  const [mousePosition, setMousePosition] = useState(() => {
    return {
      x: 0,
      y: 0,
    };
  });
  useEffect(() => {
    const handleMouseMove = async (event: MouseEvent) => {
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);
  useEffect(() => {
    const handlePaste = async (event: ClipboardEvent) => {
      console.log(event.pageX);
      const items = event.clipboardData.items;
      console.log(
        '🚀 ~ file: ContentLayer.tsx ~ line 34 ~ window.addEventListener ~ items',
        items.length
      );
      const isPastingAnImageFromWeb =
        items[0].type === 'text/html' && items[1].type === 'image/png';
      if (!isPastingAnImageFromWeb) {
        return;
      }
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.type === 'text/html') {
          item.getAsString((a) => {
            console.log('get as string: ', a);
          });
        }
        if (item.type === 'text/html') {
          item.getAsString((html) => {
            const parser = new DOMParser();
            const parsedDoc = parser.parseFromString(html, 'text/html');
            const imgSrc = parsedDoc.body.getElementsByTagName('img')[0].src;
            dumbDivs.push(
              <DumbImg
                x={mousePosition.x}
                y={mousePosition.y}
                key={Date.now()}
                src={imgSrc}
              />
            );
            setDumbDivs([...dumbDivs]);
          });
        }
        console.log('item type ', item.type);
      }

      console.log(JSON.stringify(items));
    };
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, [dumbDivs, mousePosition]);
  const addDumbDiv = useCallback(
    (x, y) => {
      dumbDivs.push(<DumbDiv key={x + y} x={x} y={y} />);
      setDumbDivs([...dumbDivs]);
    },
    [dumbDivs]
  );
  return (
    <ContentLayerWrapper
      {...props}
      onClick={(e) => {
        addDumbDiv(e.pageX, e.pageY);
      }}
    >
      {dumbDivs}
    </ContentLayerWrapper>
  );
}

export default ContentLayer;
