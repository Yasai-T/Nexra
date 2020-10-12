import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container, Item } from "../components/dnd/container";

const items: Item[] = [
  {
    id: 1,
    text: "Write a cool JS library",
  },
  {
    id: 2,
    text: "Make it generic enough",
  },
  {
    id: 3,
    text: "Write README",
  },
  {
    id: 4,
    text: "Create some examples",
  },
  {
    id: 5,
    text:
      "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
  },
  {
    id: 6,
    text: "???",
  },
  {
    id: 7,
    text: "PROFIT",
  },
];

const DnD: FC = () => (
  <DndProvider backend={HTML5Backend}>
    <div>dnd</div>
    <Container items={items} />
  </DndProvider>
);

export default DnD;
