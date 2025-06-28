import React from 'react';
import './Header.css';

export const Header = ({ title, links }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};


// export default Header;