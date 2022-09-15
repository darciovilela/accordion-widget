import React from 'react';
import Link from './Link';

const Menu = () => {
  return (
    <nav className="nav">
      <div>
        <ul className="Menu">
          <li className="item">
            <Link href="/">Accordion</Link>
          </li>
          <li className="item">
            <Link href="/search">Search</Link>
          </li>
          <li className="item">
            <Link href="/dropdown" className="item">
              Dropdown
            </Link>
          </li>
          <li className="item">
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
