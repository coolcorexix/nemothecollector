import React from 'react';
import { base02, blue } from 'src/theme/colors';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';

const Wrapper = styled.div<{
  x: number;
  y: number;
}>`
  border-radius: 4px;
  box-sizing: border-box;
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
  .actions {
    display: none;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
  }

  &:hover {
    cursor: grab;
    border: ${blue} 1px solid;
    .actions {
      display: unset;
    }
  }
`;

function ImageCard(props: {
  imgSrc: string;
  x: number;
  y: number;
  id: string;
  removeDumbDiv: any;
}) {
  return (
    <Wrapper x={props.x} y={props.y} onMouseDown={() => {}}>
      <img src={props.imgSrc} />
      <div className="actions">
        <div
          onClick={() => {
            console.log('onclick ne');
            console.log(
              '🚀 ~ file: ImageCard.tsx ~ line 54 ~ props.removeDumbDiv',
              props.removeDumbDiv
            );
            props.removeDumbDiv(props.id);
          }}
        >
          <CancelIcon color="action" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ImageCard;
