import React from 'react';
import Link from './Link';
import Header from './Header';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="ui secondary pointing menu">
        <ul>
          <li>
            <Link href="/" className="item">
              Accordion
            </Link>
          </li>
          <li>
            <Link href="/search" className="item">
              Search
            </Link>
          </li>
          <li>
            <Link href="/dropdown" className="item">
              Dropdown
            </Link>
          </li>
          <li>
            <Link href="/translate" className="item">
              Translate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
