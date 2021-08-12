import { Button } from '@chakra-ui/react';
import update from 'immutability-helper';
import React, { useCallback, useState } from 'react';
import { Card } from './card';

const style = {
  width: 400,
};

interface Props {
  items: {
    id: string;
    text: string;
  }[];
}

export const Container: React.FC<Props> = ({ items }) => {
  {
    const [cards, setCards] = useState(items);

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    return (
      <>
        <div style={style}>
          {cards.map(({ id, text }, i) => (
            <Card key={id} index={i} id={id} text={text} moveCard={moveCard} />
          ))}
        </div>
        <Button
          color="black"
          onClick={() => window.alert(`${cards.map(({ id }) => id)}`)}
        >
          Submit
        </Button>
      </>
    );
  }
};
