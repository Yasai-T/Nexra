import { ComponentProps, FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from '../components/dnd/container';

const items: ComponentProps<typeof Container>['items'] = [
  {
    id: 'id-1',
    text: 'Write a cool JS library',
  },
  {
    id: 'id-2',
    text: 'Make it generic enough',
  },
  {
    id: 'id-3',
    text: 'Write README',
  },
  {
    id: 'id-4',
    text: 'Create some examples',
  },
  {
    id: 'id-5',
    text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
  },
  {
    id: 'id-6',
    text: '???',
  },
  {
    id: 'id-7',
    text: 'PROFIT',
  },
];

const DnD: FC = () => (
  <DndProvider backend={HTML5Backend}>
    <div>dnd</div>
    <Container items={items} />
  </DndProvider>
);

export default DnD;
