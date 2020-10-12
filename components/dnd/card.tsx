import React from "react";
import { useDraggableItem } from "../../hooks/useDraggableItem";

const ItemTypes = {
  CARD: "card",
};

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  color: "black",
  cursor: "move",
};

interface CardProps {
  id: string;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export const Card: React.FC<CardProps> = ({ id, text, index, moveCard }) => {
  const { ref, isDragging } = useDraggableItem(
    index,
    id,
    ItemTypes.CARD,
    moveCard
  );

  const opacity = isDragging ? 0 : 1;

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  );
};
