import React, { useCallback } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  width: 250px;
  flex-flow: row wrap;
  > div {
    margin-right: 16px;
    margin-bottom: 16px;
  }
`;

function Container(props) {
  const [cards, setCards] = useState(() => {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map((el) => {
      return {
        content: el,
      };
    });
  });
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards) => {
      const toMutatePrevCards = [...prevCards];
      // take the drag index out first
      toMutatePrevCards.splice(dragIndex, 1);
      // insert drag right after hover index
      toMutatePrevCards.splice(hoverIndex, 0, prevCards[dragIndex]);
      return [...toMutatePrevCards];
    });
  }, []);
  const renderCards = useCallback(() => {
    return (
      <>
        <Wrapper>
          {cards.map((el, index) => {
            return (
              <Card
                type={props.type}
                key={el.content}
                moveCard={moveCard}
                index={index}
                content={el.content.toString()}
              />
            );
          })}
        </Wrapper>
      </>
    );
  }, [cards]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        <h1>{props.type}</h1>
        {renderCards()}
      </div>
    </DndProvider>
  );
}

export default Container;
