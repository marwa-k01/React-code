import React from 'react';
import {Header} from './componets/header';

const App = () => {
  const navLinks = [
    { href: '/home', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <div>
      <Header title="My Website" links={navLinks} />
    </div>
  );
};

export default App;
