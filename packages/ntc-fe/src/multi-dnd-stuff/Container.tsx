import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useState } from 'react';
import DroppableGap from './DroppableGap';

const Wrapper = styled.div`
  display: flex;
  width: 270px;
  flex-flow: row wrap;
  > div {
    margin-bottom: 16px;
  }

  > div:first-child {
    margin-left: -16px;
  }
`;

//* Conclusion: live preview should not be done with multiselect drag n drop
//* Reason: it is hard to determine the direction of the drag because multiselect can be mixed
//* picked intermittently and it mess up the array arrangement a lot
//* so given the urgency + limited in this domain, I have decided not to pursue this UX approach
//* I may revisit it once I saw a nice implementation from other apps
function Container(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [cards, setCards] = useState(() => {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map((el) => {
      return {
        content: el,
      };
    });
  });
  const [selectedIndexes, setSelectIndexes] = useState([]);
  const sortedSelectedIndexes = useMemo(() => {
    return selectedIndexes.sort((a, b) => a - b);
  }, [selectedIndexes]);
  console.log(
    '🚀 ~ file: Container.tsx ~ line 32 ~ Container ~ selectedIndexes',
    selectedIndexes
  );

  const moveCards1stApproach = useCallback(
    (itemIndexes: number[], gapIndex: number) => {
      setCards((prevCards) => {
        let toMutatePrevCards = [...prevCards];
        // take the drag index out first
        toMutatePrevCards = toMutatePrevCards.filter(
          (el, index) => !itemIndexes.includes(index)
        );
        const itemsToReorder = itemIndexes.map(
          (cardIndex) => prevCards[cardIndex]
        );

        toMutatePrevCards.splice(gapIndex, 0, ...itemsToReorder);

        toMutatePrevCards = toMutatePrevCards.filter((el) => !!el);

        setSelectIndexes([]);

        return toMutatePrevCards;
      });
    },
    []
  );

  const moveCards2nd = useCallback(
    (itemIndexes: number[], gapIndex: number) => {
      setCards((prevCards) => {
        let toMutatePrevCards = [...prevCards];
        // take the drag index out first
        toMutatePrevCards.forEach((el, index) => {
          if (itemIndexes.includes(index)) {
            toMutatePrevCards[index] = null;
          }
        });
        const itemsToReorder = itemIndexes.map(
          (cardIndex) => prevCards[cardIndex]
        );
        if (gapIndex === 0) {
          toMutatePrevCards = [...itemsToReorder, ...toMutatePrevCards];
        } else {
          toMutatePrevCards.splice(gapIndex, 0, ...itemsToReorder);
        }

        setSelectIndexes([]);

        return toMutatePrevCards;
      });
    },
    []
  );

  return (
    <>
      <div
        style={{
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        <div className="flex mb-1 items-baseline">
          <div className="mr-2">{props.type}</div>
        </div>

        <Wrapper>
          {cards.map((el, index) => {
            if (!el) {
              return null;
            }
            return (
              <>
                <DroppableGap
                  isDragging={isDragging}
                  selectedIndexes={sortedSelectedIndexes}
                  gapIndex={index}
                  // moveCards={moveCards}
                  moveCards={moveCards2nd}
                  type={props.type}
                  key={'gap' + index}
                />
                <Card
                  setIsDragging={setIsDragging}
                  type={props.type}
                  key={'card' + el.content}
                  onSelect={(selectIndex) => {
                    setSelectIndexes((prevSIs) => {
                      return [...prevSIs, selectIndex];
                    });
                  }}
                  onDeselect={(deselectIndex) => {
                    setSelectIndexes((prevSIs) => {
                      return prevSIs.filter((sI) => sI !== deselectIndex);
                    });
                  }}
                  isChecked={selectedIndexes.includes(index)}
                  index={index}
                  content={el.content.toString()}
                />
              </>
            );
          })}
          <DroppableGap
            isDragging={isDragging}
            selectedIndexes={selectedIndexes}
            gapIndex={cards.length}
            moveCards={moveCards2nd}
            type={props.type}
            key={'gap' + cards.length}
          />
        </Wrapper>
      </div>
    </>
  );
}

export default Container;
