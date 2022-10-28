import { stringify } from 'querystring';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ImageCard from '../ImageCard';

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
  width: 150px;
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

function ContentLayer(props: {
  width: number;
  height: number;
  removeDumbDiv: any;
}) {
  const [dumbDivs, setDumbDivs] = useState<
    {
      render: ReactNode;
      id: string;
    }[]
  >([]);
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
      const items = event.clipboardData.items;
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
            dumbDivs.push({
              render: (
                <ImageCard
                  key={Date.now().toString()}
                  removeDumbDiv={removeDumbDiv}
                  x={mousePosition.x}
                  y={mousePosition.y}
                  id={Date.now().toString()}
                  imgSrc={imgSrc}
                />
              ),
              id: Date.now().toString(),
            });
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

  const removeDumbDiv = useCallback(
    (id) => {
      console.log('remove id: ', id);
      setDumbDivs((prevDivs) => prevDivs.filter((div) => div.id !== id));
    },
    [dumbDivs]
  );
  return (
    <ContentLayerWrapper {...props}>
      {dumbDivs.map((div) => div.render)}
    </ContentLayerWrapper>
  );
}

export default ContentLayer;
