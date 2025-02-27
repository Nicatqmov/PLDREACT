import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/form">form</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
