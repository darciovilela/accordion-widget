import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Js front end framework.',
  },

  {
    title: 'Why use React?',
    content: 'React is favorite among dev community.',
  },

  {
    title: 'How do you use React?',
    content: 'You use React by creating reusable components.',
  },
];

// Component
const MyApp = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default MyApp;
