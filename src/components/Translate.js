import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },

  {
    label: 'Arabic',
    value: 'ar',
  },

  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(options[0]);

  return (
    //campo de texto
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text:</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a Language:"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <br />
      <hr />
      <h3>Output:</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
