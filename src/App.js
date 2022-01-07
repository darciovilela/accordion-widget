import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// for accordion
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

// for dropdown
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

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
