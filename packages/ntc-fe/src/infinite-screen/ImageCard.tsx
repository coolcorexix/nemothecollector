import React from 'react';
import { base02 } from 'src/theme/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 4px;
  box-sizing: content-box;
  width: 150px;
  img {
    border-radius: 4px;
    width: 100%;
    object-fit: contain;
  }
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  border: ${base02} 1px solid;
  z-index: 1;
`;

function ImageCard(props: { imgSrc: string; x: number; y: number }) {
  return (
    <Wrapper x={props.x} y={props.y}>
      <img src={props.imgSrc} />
    </Wrapper>
  );
}

export default ImageCard;
