import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import './style.css';

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
    label: 'Choose...',
    value: '',
  },

  {
    label: '>>Color Red',
    value: 'Red',
  },

  {
    label: '>>Color Green',
    value: 'Green',
  },

  {
    label: '>>Color Blue',
    value: 'Blue',
  },
];

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }
// };

// const showSearch = () => {
//   if (window.location.pathname === '/search') {
//     return <Search />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color:"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
