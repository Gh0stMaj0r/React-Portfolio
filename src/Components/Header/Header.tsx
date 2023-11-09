import React from 'react';

import './Header.css';

export default function Header() {
    return (
        <div className="header">
          <a className="logo">Porfolio</a>
        <div className="header-right">
          <a className="active" href="#home">.Home()</a>
          <a href="#about">.About me()</a>
          <a href="#skills">.Skills()</a>
          <a href="#projects">.Projects()</a>
          <a href="#contact">.Contact()</a>
        </div>
      </div>
    );
}