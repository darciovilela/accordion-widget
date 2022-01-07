import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'Red',
  },

  {
    label: 'The Color Green',
    value: 'Green',
  },

  {
    label: 'The Color Blue',
    value: 'Blue',
  },
];

// Component
const MyApp = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default MyApp;
