import React, { RefObject, useEffect, useRef, useState } from 'react';
import { base02, base2, blue } from 'src/theme/colors';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';

const Wrapper = styled.div<{
  x: number;
  y: number;
  hasNote: boolean;
}>`
  visibility: ${(props) => (props.hasNote ? 'visibility' : 'hidden')};
  border-radius: 4px;
  padding: 8px;
  padding-bottom: 16px;
  background-color: ${base2};
  box-sizing: border-box;
  width: 150px;
  img {
    visibility: visible;
    opacity: 1;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 8px;
    object-fit: contain;
    border: ${base02} 1px solid;
  }
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  border: ${base02} 1px solid;
  z-index: 1;
  .actions {
    display: flex;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    visibility: visible;
    cursor: grab;
    border: ${blue} 1px solid;
  }
`;

function ImageCard(props: {
  imgSrc: string;
  x: number;
  y: number;
  id: string;
  removeDumbDiv: any;
}) {
  const [note, setNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);
  const noteRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (showNoteInput && noteRef.current) {
      noteRef.current.focus();
    }
  }, [showNoteInput]);
  return (
    <Wrapper hasNote={!!note} x={props.x} y={props.y} onMouseDown={() => {}}>
      <img src={props.imgSrc} />
      <div className="actions">
        {!note && !showNoteInput && (
          <div
            onClick={() => {
              setShowNoteInput(true);
            }}
          >
            [add note]
          </div>
        )}
        {showNoteInput && (
          <form
            onSubmit={() => {
              setShowNoteInput(false);
              noteRef.current.blur();
            }}
          >
            <input
              ref={noteRef}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </form>
        )}
        {!showNoteInput && !!note && (
          <span
            onClick={() => {
              setShowNoteInput(true);
            }}
          >
            {note}
          </span>
        )}

        {/* <div
          onClick={() => {
            console.log(
              '🚀 ~ file: ImageCard.tsx ~ line 54 ~ props.removeDumbDiv',
              props.removeDumbDiv
            );
            props.removeDumbDiv(props.id);
          }}
        >
          [delete]
        </div> */}
      </div>
    </Wrapper>
  );
}

export default ImageCard;
