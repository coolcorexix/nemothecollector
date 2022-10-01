import React, { useCallback, useEffect, useMemo, useState } from 'react';

const CRLF = 10;
const BULLET = String.fromCharCode(45);
const INITIAL_STATE = '- ';

function ArrangeButton(props: {
  item: {
    index: number;
    position?: number;
    content: string;
  };
  onTogglePosition: Function;
}) {
  return (
    <div
      className="d-flex flex-row"
      onClick={() => {
        props.onTogglePosition(props.item);
      }}
    >
      <span>{props.item.position || '_'}</span>
      <span>{props.item.content}</span>
    </div>
  );
}

function ArrangeArea(props: { textValue: string }) {
  const [itemsToArrange, setItemsToArrange] = useState<
    {
      index: number;
      position?: number;
      content: string;
    }[]
  >(() => []);
  const [currentPositionToDecide, setCurrentPositionToDecide] = useState(1);
  useEffect(() => {
    setItemsToArrange(
      props.textValue
        .replaceAll('\n', '')
        .split(`${BULLET} `)
        .filter((el: string) => el)
        .map((content: string, index: number) => ({
          content,
          index,
          position: undefined,
        }))
    );
  }, [props.textValue]);

  const computedPositionToDecide = useMemo(() => {
    const itemToArragePoistions = itemsToArrange.map((i) => i.position);
    let longestContinousSinceOne = 0;
    let numberAtTheEndOfContinuos = undefined;
    function doesContainTheNumberRightAfter() {
      for (let i = 0; i < itemToArragePoistions.length; i++) {
        if (itemToArragePoistions[i] === numberAtTheEndOfContinuos + 1) {
          return true;
        }
      }
      return false;
    }
    for (let i = 0; i < itemToArragePoistions.length; i++) {
      if (!numberAtTheEndOfContinuos && itemToArragePoistions[i] === 1) {
        longestContinousSinceOne++;
        numberAtTheEndOfContinuos = 1;
        continue;
      }
      if (doesContainTheNumberRightAfter()) {
        longestContinousSinceOne++;
        numberAtTheEndOfContinuos++;
      }
    }
    return longestContinousSinceOne + 1;
  }, [itemsToArrange]);

  const togglePosition = useCallback(
    (selectedItem) => {
      const itemToUpdate = itemsToArrange.find(
        (item) => selectedItem.index === item.index
      );
      if (itemToUpdate.position) {
        // setCurrentPositionToDecide(itemToUpdate.position);
        itemToUpdate.position = undefined;
        setItemsToArrange([...itemsToArrange]);
        return;
      }
      itemToUpdate.position = computedPositionToDecide;
      setItemsToArrange([...itemsToArrange]);
      //   setCurrentPositionToDecide(
      //     Math.max(
      //       ...itemsToArrange
      //         .filter((item) => typeof item.position === 'number')
      //         .map((item) => item.position)
      //     ) + 1
      //   );
    },
    [itemsToArrange]
  );

  return (
    <div>
      {itemsToArrange.map((item, index) => {
        return (
          <ArrangeButton
            key={index}
            onTogglePosition={togglePosition}
            item={item}
          />
        );
      })}
    </div>
  );
}

function SortThingsOut() {
  const [value, setValue] = useState(INITIAL_STATE);
  return (
    <div className="m-auto p-4">
      <div>
        <textarea
          onInput={(inputEvent) => {
            const inputEventValue = inputEvent.currentTarget.value;
            const char = inputEvent.currentTarget.value.slice(-1).charCodeAt(0);
            if (inputEventValue.length === 0) {
              setValue(INITIAL_STATE);
              return;
            }
            if (char == CRLF && value.length < inputEventValue.length) {
              setValue((prevValue) => prevValue + '\n' + BULLET + ' ');
            } else {
              setValue(inputEventValue);
            }
          }}
          rows={10}
          cols={50}
          value={value}
        />
      </div>
      {/* <button>[arrange it]</button> */}

      <ArrangeArea textValue={value} />
    </div>
  );
}

export default SortThingsOut;
